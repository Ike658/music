<template>
  <section>
    <div id="main">
      <div class="mainhead">歌曲列表</div>
      <template v-for="(item, index) in songArr">
        <router-link
          tag="div"
          :to="`/play/${item.id}`"
          class="mainlic"
          :key="item.id"
        >
          <span>{{ ++index }}</span>
          <div class="maincen">
            <span>{{ item.name }}</span>
            <span>{{ item.ar[0].name + "-" + item.al.name }}</span>
          </div>
          <i class="iconfont icon-play"></i>
        </router-link>
      </template>
      <div class="main_downlond">查看更多歌曲，请下载客户端</div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["songArr"]
}
</script>

<style lang="scss" scoped>
#main {
  .mainhead {
    font-size: _vw(16);
    background-color: #eeeff0;
    padding: _vw(10) 0;
  }
  .mainlic {
    background-color: #fff;
    display: flex;
    padding: _vw(10);
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
    > span {
      font-size: 16px;
      line-height: _vw(55);
      color: #a2a2a2;
      padding: 0 _vw(20);
    }
    .maincen {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      > span:nth-of-type(1) {
        color: #000000;
        font-size: _vw(10);
      }
      > span:nth-of-type(2) {
        color: #adadad;
        font-size: _vw(5);
      }
    }
    i {
      color: #dcdcdc;
      padding: 0 _vw(20);
      font-size: _vw(30);
      line-height: _vw(55);
    }
  }
  .main_downlond {
    text-align: center;
    color: #adadad;
    font-weight: 400;
    background-color: #fff;
    font-size: _vw(16);
    padding: _vw(20);
  }
}
</style>