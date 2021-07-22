<template>
  <div id="search">
    <div class="head">
      <div class="headtop">
        <i class="iconfont icon-icon-search"></i>
        <input
          type="text"
          placeholder="搜索歌曲、歌手、专辑"
          @keyup.enter="entersearch(userinp)"
          v-model="userinp"
        />
        <span v-show="userinp" class="delItem" @click="delItem">x</span>
      </div>
    </div>

    <searchhot
      :searchArr="hotSearchArr"
      v-show="searchshow === 1"
      @clicksearch="clicksearch"
    ></searchhot>

    <searchrequest
      :searchRequestArr="searchRequestArr"
      :userinput="userinp"
      v-show="searchshow === 2"
    ></searchrequest>

    <div class="searchResult" v-show="searchshow === 3">
      <div class="head1">
        <span>最佳匹配</span>
      </div>
      <div class="main_head">
        <div class="geshou" v-show="selectname1">
          <div><img :src="selectpic1" alt="" /></div>
          <div>歌手:{{ selectname1 }}</div>
          <div><span class="iconfont icon-arrow-left"></span></div>
        </div>
        <div class="zhuanji" v-show="selectname2">
          <div><img :src="selectpic2" alt="" /></div>
          <div>
            <div>
              专辑: <span>{{ selectname2 }}</span>
            </div>
            <span>{{ selectname1 }}</span>
          </div>
          <div><span class="iconfont icon-arrow-left"></span></div>
        </div>
      </div>

      <template v-for="item in selectArr">
        <div :key="item.id" class="foot">
          <div>
            <span>{{ item.name }}</span>
            <span>{{ item.artists[0].name }}-{{ item.name }}</span>
          </div>
          <div>
            <span class="iconfont icon-play"></span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import searchrequest from "../../components/searchRequest.vue";
import searchhot from "../../components/SearchHot.vue";
export default {
  data: () => {
    return {
      userinp: "",
      selectname1: "",
      selectname2: "",
      selectpic1: "",
      selectpic2: "",
      selectArr: [],
      searchshow: 1,
      hotSearchArr: [],
      searchRequestArr: [],
      searchresultArr: [],
      isRun: true,
    }
  },
  methods: {
    clicksearch (searchName) {
      this.isRun = false;
      this.userinp = searchName;
      this.searchshow = 3;
      this._axios.get(`/search/multimatch?keywords=%20${searchName}`).then((res) => {
        if (res.data.result.album) {
          this.searchresultArr = res.data.result.album[0];
          this.selectname1 = this.searchresultArr.artist.name;
          this.selectname2 = this.searchresultArr.name;
          this.selectpic1 = this.searchresultArr.artist.picUrl;
          this.selectpic2 = this.searchresultArr.picUrl;
          //   console.log(this.searchresultArr);
          this.isRun = true;
        } else {
          this.searchresultArr = "";
        }
      });
      this._axios.get(`/search?keywords=%20${searchName}`).then((res) => {
        if (res) {
          this.selectArr = res.data.result.songs;
        }
      })
    },

    entersearch (userinp) {
      this.isRun = false;
      this.userinp = userinp;
      this.searchshow = 3;
      this._axios.get(`/search/multimatch?keywords=%20${userinp}`).then((res) => {
        console.log(res);
        if (res.data.result.album) {
          this.searchresultArr = res.data.result.album[0];
          this.selectname1 = this.searchresultArr.artist.name;
          this.selectname2 = this.searchresultArr.name;
          this.selectpic1 = this.searchresultArr.artist.picUrl;
          this.selectpic2 = this.searchresultArr.picUrl;
          //   console.log(this.searchresultArr);
          this.isRun = true;
        } else {
          this.searchresultArr = "";
        }
      });
      this._axios.get(`/search?keywords=%20${userinp}`).then((res) => {
        if (res) {
          this.selectArr = res.data.result.songs;
        }
      })
    },
    delItem () {
      this.searchshow = 1;
      this.userinp = "";
    },
  },
  mounted () {
    this._axios.get("/search/hot/detail").then((res) => {
      this.hotSearchArr = res.data.data.slice(0, 10);
    })

  },
  components: {
    searchhot,
    searchrequest,
  },

  watch: {
    userinp () {
      if (this.isRun) {
        this.searchshow = 2;
        this._axios.get(`/search/suggest?keywords=%20${this.userinp}&type=mobile`).then((res) => {
          if (res.data.result === undefined) {
            this.searchshow = 1;
            this.searchRequestArr = "";
          } else if (this.searchshow === 2) {
            this.searchRequestArr = res.data.result.allMatch;
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#search {
  .head {
    padding: _vw(20) _vw(10);
    border-bottom: 1px solid #eee;
    .headtop {
      height: _vw(60);
      background-color: #e6e7e7;
      border-radius: _vw(30);
      display: flex;
      align-items: center;
      i {
        padding: 0 0 0 _vw(10);
        font-size: _vw(40);
        color: #848888;
      }
      input {
        width: 90%;
        margin: _vw(5);
        background-color: #e6e7e7;
        color: #848888;
        border: none;
        font-size: _vw(32);
        outline: none;
      }
      .delItem {
        margin-right: _vw(20);
        border-radius: _vw(15);
        width: _vw(30);
        height: _vw(30);
        line-height: _vw(30);
        text-align: center;
        background-color: #848888;
        color: #fff;
      }
    }
  }
  .searchResult {
    padding: _vw(10) 0;
    .head1 {
      margin-left: _vw(15);
    }
    .main_head {
      display: flex;
      flex-direction: column;
      margin-left: _vw(15);
      padding: _vw(10) _vw(15) _vw(10) 0;
      > .geshou {
        display: flex;
        align-items: center;
        > div:nth-of-type(1) {
          img {
            width: _vw(80);
            height: _vw(80);
          }
        }
        > div:nth-of-type(2) {
          width: 100%;
          font-size: _vw(25);
          padding-left: _vw(20);
        }
        > div:nth-of-type(3) {
          span {
            color: #848888;
            display: inline-block;
            margin: 0 _vw(10);
            font-size: _vw(30);
          }
        }
      }
      > .zhuanji {
        display: flex;
        align-items: center;
        > div:nth-of-type(1) {
          img {
            width: _vw(80);
            height: _vw(80);
          }
        }
        > div:nth-of-type(2) {
          width: 100%;
          font-size: _vw(25);
          padding-left: _vw(20);
          display: flex;
          flex-direction: column;
          > div {
            span {
              color: rgb(40, 107, 184);
            }
          }
          > span {
            font-size: _vw(16);
            color: #848888;
          }
        }
        > div:nth-of-type(3) {
          span {
            color: #848888;
            display: inline-block;
            margin: 0 _vw(10);
            font-size: _vw(30);
          }
        }
      }
    }
    .foot {
      display: flex;
      padding: _vw(10) 0;
      align-items: center;
      > div:nth-of-type(1) {
        padding-left: _vw(20);
        width: 100%;
        display: flex;
        flex-direction: column;
        > span:nth-of-type(1) {
          font-size: _vw(25);
        }
        > span:nth-of-type(2) {
          color: #848888;
          font-size: _vw(18);
        }
      }
      > div:nth-of-type(2) {
        span {
          color: #a8aaaa;
          font-size: _vw(40);
        }
      }
    }
  }
}
</style>