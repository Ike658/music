<template>
  <div id="songlist">
    <div class="bgimg">
      <img :src="topimg" alt="" />
    </div>
    <div class="headportrait">
      <div class="headleft">
        <img :src="topimg" alt="" />
        <span>歌单</span>
        <i class="iconfont icon-headset">{{ playCount }}万</i>
      </div>

      <div class="headright">
        <h2>{{ songList.name }}</h2>
        <router-link tag="div" class="user" :to="`/user/${songList.userId}`">
          <span><img :src="userName" /></span>
          <span class="userfont">{{ name }}</span>
        </router-link>
      </div>
    </div>

    <songcom :songArr="songsong"></songcom>

    <songfot :songCommentListArr="songCommentList"></songfot>

    <div class="total">查看全部{{ tota }}条评论</div>
  </div>
</template>

<script>
import songcom from "../components/songLic.vue";
import songfot from "../components/songcomment.vue";
export default {
  data: () => {
    return {
      topimg: "",
      userName: "",
      songList: [],
      songsong: [],
      songCommentAll: [],
      songCommentList: [],
      name: "",
      tota: 0,
      playCount: 0,
    }
  },
  mounted () {
    this._axios.get(`/playlist/detail?id=${this.$route.params.id}`).then((res) => {
      this.$route.params.id;
      this.songList = res.data.playlist;
      this.songsong = res.data.playlist.tracks;
      console.log(res);
      //   .data.playlist.tracks[0].id  
      this.topimg = this.songList.coverImgUrl;
      this.userName = this.songList.creator.avatarUrl;
      this.name = this.songList.creator.nickname;
      this.playCount = parseFloat(this.songList.playCount / 10000).toFixed(2);

    }),
      this._axios.get(`/comment/playlist?id=${this.$route.params.id}`).then((res) => {
        this.songCommentAll = res.data;
        this.songCommentList = res.data.hotComments;
        this.tota = this.songCommentAll.total;
        // console.log(this.songCommentList);
      })
  },
  components: {
    songcom,
    songfot,
  },
  watch: {
    songList () {
      localStorage.setItem("songlist", JSON.stringify(this.songList));
    },
    songCommentList () {
      localStorage.setItem("songCommentList", JSON.stringify(this.songCommentList));
    }
  },
}
</script>

<style lang="scss" scoped>
#songlist {
  position: relative;
  .bgimg {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    overflow: hidden;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: _vw(205);
    background-color: #000;
    z-index: -1;
    opacity: 0.4;
  }
  .headportrait {
    width: 100%;
    height: 100%;
    padding: _vw(25);
    display: flex;
    box-sizing: border-box;
    > .headleft {
      width: _vw(150);
      height: _vw(150);
      position: relative;
      img {
        width: _vw(150);
        height: _vw(150);
      }
      i {
        position: absolute;
        font-size: 10px;
        top: 0;
        right: 0;
        color: #fff;
        transform: scale(0.6) translateX(20px);
      }
      span {
        position: absolute;
        font-size: _vw(10);
        height: _vw(28);
        line-height: _vw(28);
        width: 40px;
        text-align: center;
        top: 5%;
        left: 0;
        color: #fff;
        background-color: #bc363d;
        border-radius: 0 _vw(10) _vw(10) 0;
      }
    }
    > .headright {
      width: _vw(750);
      height: _vw(150);
      margin-left: _vw(20);
      h2 {
        color: #fff;
        height: _vw(60);
        font-size: _vw(18);
        font-weight: 300;
      }
      .user {
        span {
          vertical-align: middle;
          img {
            width: _vw(30);
            border-radius: _vw(15);
          }
        }
        > .userfont {
          font-size: _vw(18);
          margin-left: _vw(5);
          color: #b2b5c7;
        }
      }
    }
  }

  .total {
    color: #999;
    font-size: _vw(14);
    padding: _vw(18) 0;
    text-align: center;
  }
}
</style>