<template>
  <div id="songlist">
    <div class="headportrait">
      <div class="headleft">
        <img :src="topimg" alt="" />
        <span>歌单</span>
        <i class="iconfont icon-headset">331.8万</i>
      </div>

      <div class="headright">
        <h2>{{ songList.name }}</h2>
        <div class="user" @click="toUser(songList.userId)">
          <span><img :src="userName" /></span>
          <span class="userfont">{{ songList.creator.nickname }}</span>
        </div>
      </div>
    </div>

    <songcom :songArr="songsong"></songcom>

    <songfot :songCommentListArr="songCommentList"></songfot>

    <div class="total">查看全部{{ songCommentAll.data.total }}条评论</div>
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
    }
  },
  mounted () {
    this._axios.get(`/playlist/detail?id=${this.$route.params.id}`).then((res) => {
      this.songList = res.data.playlist;
      this.songsong = res.data.playlist.tracks;
      //   console.log(res);
      //   .data.playlist.tracks[0].id  
      this.topimg = this.songList.coverImgUrl;
      this.userName = this.songList.creator.avatarUrl;
    }),
      this._axios.get(`/comment/playlist?id=${this.$route.params.id}`).then((res) => {
        this.songCommentAll = res;
        this.songCommentList = res.data.hotComments;
        console.log(this.songCommentList);
      })
  },
  methods: {
    toUser (nowId) {
      this.$router.push(`/user/${nowId}`);
    }
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
  height: _vw(205);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: _vw(305);
    background: url("//music.163.com/api/img/blur/109951165671785433?param=170y170")
      no-repeat;
    z-index: -2;
    background-position: 63% 55%;
    background-size: 180% 365%;
    filter: blur(11px);
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
    padding: 25px;
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
        font-size: _vw(10);
        top: 0;
        right: 0;
        color: #fff;
      }
      span {
        position: absolute;
        font-size: _vw(10);
        height: 18px;
        line-height: 18px;
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