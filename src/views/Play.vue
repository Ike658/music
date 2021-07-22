<template>
  <div id="play">
    <header>
      <div class="bgimg">
        <img :src="picUrl" />
      </div>
      <div class="top">
        <span>你知道这首歌居然被这样评论？</span>
        <button>打开看看></button>
      </div>
    </header>
    <main>
      <div class="play">
        <div class="rocker">
          <img src="../assets/play.png" />
        </div>
        <div class="rotate" @click="play" ref="ro">
          <img :src="picUrl" />
          <img src="../assets/disc.png" />
        </div>
        <div class="btn">
          <span v-show="isPlay" class="iconfont icon-play" @click="play"></span>
        </div>
        <div class="lyric">
          <p>{{ songName }}-{{ playerName }}</p>
          <ul>
            <template v-for="(item, index) in currentArr">
              <li :key="index" :style="lyric">
                {{ item }}
              </li>
            </template>
          </ul>
        </div>
        <audio :src="musicUrl" ref="music"></audio>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      picUrl: "",
      lyricArr: [],
      currentArr: [],
      musicUrl: "",
      isPlay: true,
      songName: "",
      playerName: "",
      timer: "",
      nowIndex: 0,
      lyric: {
        transition: " all .3s",
        transform: "translat,eY(0)",
      },
    }
  },
  methods: {
    play () {
      if (this.isPlay) {
        this.$refs.music.play();
        this.$refs.ro.classList.add("active");
        setInterval(() => {
          this.timer = parseInt(this.$refs.music.currentTime)
        }, 50)
        // console.log(this.$refs.music.currentTime);
      } else {
        this.$refs.music.pause();
        this.$refs.ro.classList.remove("active");
      }
      this.isPlay = !this.isPlay;
    }
  },
  watch: {
    timer () {
      for (let index in this.currentArr) {
        if (this.timer == index) {
          this.lyric.transform = `translateY(-${this.nowIndex++}00%)`;
        }
      }
    },
  },
  async mounted () {
    let res = await this._axios.get(`/song/detail?ids=${this.$route.params.id}`);
    console.log(res.data);
    this.picUrl = res.data.songs[0].al.picUrl;
    this.songName = res.data.songs[0].al.name;
    this.playerName = res.data.songs[0].ar[0].name;

    let res2 = await this._axios.get(`/lyric?id=${this.$route.params.id}`);
    // this.lyricArr = res2.data.lrc.lyric.split("\n");

    this.lyricArr = res2.data.lrc.lyric.split('[').slice(1); // 先以[进行分割
    let lrcObj = {};
    this.lyricArr.forEach(item => {
      let arr = item.split(']');	// 再分割右括号
      // 时间换算成秒
      let m = parseInt(arr[0].split(':')[0])
      let s = parseInt(arr[0].split(':')[1])
      arr[0] = m * 60 + s;
      if (arr[1] != '\n') { // 去除歌词中的换行符
        lrcObj[arr[0]] = arr[1];
      }
    })
    // 存储数据
    this.currentArr = lrcObj;
    console.log(this.currentArr);

    let res3 = await this._axios.get(`/song/url?id=${this.$route.params.id}`);
    this.musicUrl = res3.data.data[0].url;
    // console.log(this.musicUrl);
  },
}
</script>

<style lang="scss" scoped>
header {
  height: _vw(100);
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .bgimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    -webkit-filter: blur(30px);
    -moz-filter: blur(30px);
    -ms-filter: blur(30px);
    filter: blur(30px);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top {
    margin: 0 auto;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    span {
      color: #fff;
      font-size: 10px;
    }
    button {
      width: _vw(180);
      height: _vw(60);
      color: #fff;
      border: 1px solid #fff;
      border-radius: _vw(30);
      font-size: 10px;
      outline: none;
      background-color: transparent;
    }
  }
}
main {
  height: _vw(1000);
  .play {
    position: relative;
    height: 100%;
    .rocker {
      position: absolute;
      left: 60%;
      top: _vw(40);
      transform-origin: left top;
      transform: translateX(-50%) rotate(-10deg);
      z-index: 2;
      img {
        width: _vw(160);
      }
    }
    .rotate {
      position: absolute;
      width: _vw(500);
      height: _vw(500);
      left: 20%;
      top: _vw(140);
      transition: all 30s;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: _vw(500);
      }
      img:first-child {
        width: _vw(500);
        transform: scale(0.8);
        border-radius: 50%;
      }
    }
    .rotate.active {
      animation: rot 5s linear infinite;
    }
    .btn {
      position: absolute;
      left: 50%;
      top: _vw(325);
      transform: translateX(-30%);
      span {
        font-size: _vw(115);
        color: #fff;
      }
    }
    .lyric {
      position: absolute;
      top: _vw(675);
      width: 100%;
      color: whitesmoke;
      text-align: center;
      ul {
        margin-top: _vw(50);
        height: _vw(80);
        overflow: hidden;
      }
    }
  }
  @keyframes rot {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>