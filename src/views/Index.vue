<template>
  <div id="index">
    <header>
      <section>
        <p><i class="iconfont icon-xigua"></i><span>西瓜音乐</span></p>
        <button>下载App</button>
      </section>
      <nav>
        <ul>
          <router-link tag="li" to="/recommend">推荐音乐</router-link>
          <router-link tag="li" to="/hot">热歌榜</router-link>
          <router-link tag="li" to="/search">搜索</router-link>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //   async mounted () {
  //     // this._axios.get("/top/playlist/highquality").then(res => {
  //     //   console.log(res);
  //     // })
  //     let res = await this._axios.get("/top/playlist/highquality");
  //     console.log(res);
  //   },
}
</script>

<style lang="scss" scoped>
// ~@ 代表 src文件夹
// @import "~@/assets/scss/_vw.scss";
#index {
  header {
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 _vw(20);
      height: _vw(84);
      background-color: #d43c33;
      line-height: _vw(84);
      font-size: _vw(25);
      p {
        color: #fff;
      }
      i {
        font-size: _vw(36);
        margin: 0 _vw(10);
      }
      button {
        height: _vw(50);
        line-height: _vw(50);
        font-size: _vw(24);
        width: _vw(150);
        text-align: center;
        border: none;
        outline: none;
        color: #d43c33;
        background-color: #fff;
        border-radius: 37.5%/100%;
      }
    }
    nav {
      ul {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #c1c1c1;
        li {
          height: _vw(60);
          line-height: _vw(60);
          font-size: _vw(24);
          &.active {
            border-bottom: 2px solid #e22d43;
            color: #e22d43;
          }
        }
      }
    }
  }
}
</style>