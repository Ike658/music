<!-- 用户中心页 -->
<template>
  <div id="user">
    <header>
      <img :src="background" />
      <div class="message">
        <div class="top">
          <div class="left">
            <p>{{ playCount }}</p>
            <p>听歌数</p>
          </div>
          <div class="center">
            <img :src="avatar" />
          </div>
          <div class="right">
            <p>{{ fans }}</p>
            <p>粉丝数</p>
          </div>
        </div>
        <div class="bottom">
          <p>{{ nickname }}</p>
          <p><button>+关注</button></p>
        </div>
      </div>
    </header>
    <main>
      <div class="title">
        <p>歌单({{ HotArr.length }})</p>
      </div>
      <userSongList :HotArr="HotArr"></userSongList>
    </main>
  </div>
</template>

<script>
import userSongList from "../components/UserSongList.vue"
export default {
  async mounted () {
    let res = await this._axios.get(`/user/playlist?uid=${this.$route.params.id}`);
    // 歌单数组
    this.HotArr = res.data.playlist.slice(0, 8);
    // console.log(this.HotArr);
    // 背景图
    this.background = this.HotArr[0].creator.backgroundUrl;
    //昵称
    this.nickname = this.HotArr[0].creator.nickname;
    //头像
    this.avatar = this.HotArr[0].creator.avatarUrl;
    //播放次数
    this.playCount = this.HotArr[0].playCount;
    //粉丝数
    this.fans = this.HotArr[0].trackCount;
  },
  data: () => {
    return {
      HotArr: [],
      background: "",
      playCount: 0,
      nickname: "",
      avatar: "",
      fans: 0,
    }
  },
  components: {
    userSongList,
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: _vw(500);
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 4, 4, 0.7);
    z-index: 2;
  }
  img {
    position: absolute;
    width: 100%;
  }
  .message {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: _vw(36);
    text-align: center;
    z-index: 3;
    .top {
      margin: _vw(60) 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .center {
        img {
          transform: translate(-50%, -50%);
          width: _vw(140);
          border-radius: 50%;
        }
      }
    }
    .bottom {
      width: 100%;
      p {
        margin-top: _vw(10);
        button {
          width: 30%;
          height: _vw(50);
          border: 1px solid #fff;
          outline: none;
          border-radius: _vw(25);
          color: #fff;
          background-color: transparent;
        }
      }
    }
  }
}
main {
  .title {
    p {
      background-color: #c1c1c1;
      line-height: _vw(80);
      height: _vw(80);
    }
  }
}
</style>