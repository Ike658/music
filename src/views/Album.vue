<template>
  <div id="album">
    <header>
      <div class="bgimg">
        <img :src="album.blurPicUrl" />
      </div>
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
      <span class="iconfont icon-arrow-left"></span>
      <h3>歌曲列表</h3>
      <albumList :songArr="songArr" :album="album"></albumList>
      <h3>精彩评论</h3>
      <comment :commentArr="commentArr"></comment>
    </main>
  </div>
</template>

<script>
import albumList from "../components/AlbumList.vue"
import comment from "../components/comment.vue"
export default {
  async mounted () {
    // let res = await this._axios.get("/user/playlist?uid=1398221246");
    let res = await this._axios.get("/album?id=32311");
    //专辑对象
    this.album = res.data.album;
    // 歌手名
    this.name = res.data.album.artist.name;
    // 专辑名
    this.albumName = res.data.album.name;
    //发行时间戳转成年月日格式
    this.year = new Date(res.data.album.publishTime).getFullYear();
    this.month = String(new Date(res.data.album.publishTime).getMonth() + 1).padStart(2, "0");
    this.day = new Date(res.data.album.publishTime).getDate();
    //简介描述
    this.description = res.data.album.description;
    // 歌单列表数组
    this.songArr = res.data.songs;
    // console.log(this.songArr);
    // console.log(this.album);

    let res2 = await this._axios.get("/comment/album?id=32311");
    this.commentArr = res2.data.hotComments;
    console.log(this.commentArr);

  },
  data: () => {
    return {
      album: {},
      name: "",
      albumName: "",
      year: "",
      month: "",
      day: "",
      description: "",
      songArr: [],
      commentArr: [],
    }
  },
  components: {
    albumList, comment
  }
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
    background-color: rgba(0, 0, 0, 0.7);
  }
  .bgimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    img {
      width: 100%;
      transform: translateY(-30%);
    }
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
          font-size: _vw(30);
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
    height: _vw(120);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  > span {
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
}
</style>