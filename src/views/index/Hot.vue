<template>
  <div id="hot">
    <div class="hottop">
      <div class="banner">
        <span>更新日期: 07月20日</span>
      </div>
    </div>

    <itemArr :evenArr="hotArr"></itemArr>

    <div class="hotfoot">
      <p>查看完整榜单<span class="iconfont icon-arrow-left"></span></p>
    </div>
  </div>
</template>

<script>
import itemArr from "../../components/micList.vue";
export default {
  data: () => {
    return {
      hotArr: JSON.parse(localStorage.getItem("hotArr")) || [],
    }
  },

  mounted () {
    this._axios.get("/playlist/detail?id=3778678").then((res) => {
      this.hotArr = res.data.playlist.tracks.slice(0, 20);
      console.log(this.hotArr);
    })
  },
  components: {
    itemArr,
  },
  watch: {
    hotArr () {
      localStorage.setItem("hotArr", JSON.stringify(this.hotArr));
    }
  },
}
</script>

<style lang="scss">
#hot {
  .hottop {
    position: relative;
    height: _vw(292);
    background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=)
      no-repeat;
    background-size: 100% 100%;
    &::before {
      content: "";
      width: 100%;
      height: _vw(292);
      top: 0;
      left: 0;
      position: absolute;
      display: inline-block;
      background-color: #000;
      z-index: 0;
      opacity: 0.2;
    }
    .banner {
      position: absolute;
      top: _vw(39);
      left: _vw(70);
      width: _vw(332);
      height: _vw(194);
      background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=)
        no-repeat;
      background-size: 110%;
      background-position: 100% 260%;
      span {
        position: absolute;
        color: #fff;
        top: 100%;
        left: 10%;
      }
    }
  }
  .main {
    border-bottom: 1px solid #c1c1c1;
    .main_content {
      display: flex;
      width: _vw(750);
      height: _vw(100);
      > .main_left {
        color: #919191;
        line-height: _vw(100);
        font-size: _vw(35);
        padding: 0 _vw(20);
      }
      .active {
        color: red;
      }
      > .main_right > span {
        line-height: _vw(100);
        font-size: _vw(44);
        color: #c1c1c1;
        padding: 0 _vw(20);
      }
      > .main_center {
        width: _vw(750);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        > div:nth-of-type(1) {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: _vw(30);
          span:nth-of-type(2) {
            color: #a3a3a3;
          }
        }
        > div:nth-of-type(2) {
          font-size: _vw(25);
          color: #b5b5b5;
          > span {
            font-size: _vw(38);
            color: #fd895d;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .hotfoot {
    height: _vw(96);
    line-height: _vw(96);
    text-align: center;
    color: #919191;
  }
}
</style>




