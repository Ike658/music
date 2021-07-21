<template>
  <div id="recommend">
    <div class="title"><h2>编辑推荐</h2></div>
    <EditRecommend :EditRecommendArr="EditRecommendArr"></EditRecommend>
    <div class="title"><h2>最新音乐</h2></div>
    <NewMusic :NewMusicArr="NewMusicArr"></NewMusic>
    <footer>
      <div class="name">
        <p><i class="iconfont icon-xigua"></i><span>西瓜音乐</span></p>
      </div>
      <div class="download">
        <router-link tag="button" to="#">打开app,发现更多好音乐></router-link>
      </div>
      <div class="copyright">
        <p>西瓜公司版权所有@1998-2021 广州信息科技有限公司运营</p>
      </div>
    </footer>
  </div>
</template>

<script>
import EditRecommend from "../../components/EditRecommend.vue"
import NewMusic from "../../components/NewMusic.vue"
export default {
  async mounted () {
    let res = await this._axios.get("/personalized");
    this.EditRecommendArr = res.data.result.slice(0, 6);
    // console.log(this.EditRecommendArr);
    // console.log(res.data.result);
    let res2 = await this._axios.get("/personalized/newsong");
    this.NewMusicArr = res2.data.result;
    console.log(res2.data.result);
  },
  data: () => {
    return {
      EditRecommendArr: JSON.parse(localStorage.getItem("EditRecommendArr")) || [],
      NewMusicArr: JSON.parse(localStorage.getItem("NewMusicArr")) || []
    }
  },
  components: {
    EditRecommend, NewMusic
  },
  watch: {
    EditRecommendArr () {
      localStorage.setItem("EditRecommendArr", JSON.stringify(this.EditRecommendArr));
    },
    NewMusicArr () {
      localStorage.setItem("NewMusicArr", JSON.stringify(this.NewMusicArr));
    }
  }
}
</script>

<style lang="scss" scoped>
#recommend {
  .title {
    display: flex;
    height: _vw(100);
    line-height: _vw(100);
    h2 {
      margin-top: _vw(25);
      height: 50%;
      line-height: _vw(50);
      font-weight: 400;
      border-left: 2px solid #d43c33;
    }
  }
  footer {
    margin: _vw(80) 0;
    .name {
      p {
        font-size: _vw(36);
        text-align: center;
        color: #d43c33;
        i {
          font-size: _vw(36);
        }
      }
    }
    .download {
      width: 90%;
      margin: _vw(10) auto;
      button {
        width: 100%;
        height: _vw(36);
        line-height: _vw(36);
        border: 1px solid #d43c33;
        color: #d43c33;
        border-radius: _vw(30);
        font-size: _vw(24);
        outline: none;
        background-color: transparent;
      }
    }
    .copyright {
      width: 70%;
      margin: 0 auto;
      p {
        text-align: center;
        font-size: _vw(16);
        color: #c1c1c1;
      }
    }
  }
}
</style>