<template>
  <div id="album">
    <header>
      <div class="content">
        <div class="left">
          <div class="img">
            <img :src="album.blurPicUrl" />
          </div>
        </div>
        <div class="right">
          <p>{{ albumName }}</p>
          <div>
            <p>
              歌手：<span> {{ name }}</span>
            </p>
            <p>发行时间：{{ year }}-{{ month }}-{{ day }}</p>
          </div>
          <p></p>
        </div>
      </div>
    </header>
    <main>
      <section>简介：{{ description }}</section>
      <i class="iconfont icon-arrow-left"></i>
      <h3>歌曲列表</h3>
      <ul>
        <li>
          <div class="left">1</div>
          <div class="right">
            <div class="content">
              <p>疯狂的阳光</p>
              <p>张悬-神的游戏</p>
            </div>
            <i class="iconfont icon-play"></i>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  async mounted () {
    // let res = await this._axios.get("/user/playlist?uid=1398221246");
    let res = await this._axios.get("/album?id=32311");
    this.album = res.data.album;
    this.name = res.data.album.artist.name;
    this.albumName = res.data.album.name;
    this.year = new Date(res.data.album.publishTime).getFullYear();
    this.month = String(new Date(res.data.album.publishTime).getMonth() + 1).padStart(2, "0");
    this.day = new Date(res.data.album.publishTime).getDate();
    this.description = res.data.album.description;
    console.log(this.album);

  },
  data: () => {
    return {
      album: {},
      name: "",
      albumName: "",
      year: "",
      month: "",
      day: "",
      description: ""
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: _vw(370);
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .content {
    position: absolute;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    width: 100%;
    height: 100%;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40%;
      height: 100%;
      z-index: 2;
      box-sizing: border-box;
      .img {
        position: relative;
        width: 90%;
        &::before {
          content: "专辑";
          position: absolute;
          top: _vw(20);
          width: 35px;
          height: 20px;
          line-height: 20px;
          color: #fff;
          text-align: center;
          font-size: 17px;
          border-radius: 0 _vw(20) _vw(20) 0;
          background-color: #d43c33;
        }
        img {
          width: 100%;
        }
      }
    }
    .right {
      margin: auto;
      padding-left: _vw(20);
      width: 60%;
      height: 60%;
      z-index: 2;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      > p {
        font-size: 18px;
      }
      div {
        p {
          margin-top: _vw(15);
          color: #9a9d9f;
          span {
            color: #fff;
          }
        }
      }
    }
  }
}
main {
  overflow-x: hidden;
  section {
    padding: 10px 10px 0 15px;
    font-size: 14px;
    color: #676666;
    height: 50px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  i {
    float: right;
    color: #676666;
    transform: rotate(90deg);
  }
  h3 {
    margin-top: 15px;
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    font-weight: 400;
    text-indent: 1em;
    color: #5a5155;
    background-color: #eeeff0;
  }
  ul {
    li {
      display: flex;
      height: _vw(110);
      .left {
        width: 10%;
        text-align: center;
        color: #8aa2c6;
        line-height: _vw(110);
      }
      .right {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p:first-child {
            font-size: 17px;
          }
          p:nth-child(2) {
            font-size: 12px;
            color: #89919a;
          }
        }
        i {
          transform: translateX(-10px) rotate(-120deg);
          font-size: 20px;
          color: #89919a;
        }
      }
    }
  }
}
</style>