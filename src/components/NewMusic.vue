 <!-- 推荐音乐页最新音乐 -->
<template>
  <div id="NewMusic">
    <ul>
      <template v-for="item in NewMusicArr">
        <router-link tag="li" :key="item.id" :to="`/play/${item.id}`">
          <div class="left">
            <p>
              <span>{{ item.name }}</span>
              <span v-show="item.song.alias.length"
                >({{ item.song.alias[0] }})</span
              >
            </p>
            <span
              ><i class="iconfont icon-SQ"></i>
              {{ item.song.artists[0].name }}-{{ item.name }}</span
            >
          </div>
          <div class="right">
            <i class="iconfont icon-play"></i>
          </div>
        </router-link>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    NewMusicArr: Array,
  },
}
</script>

<style lang="scss" scoped>
ul {
  li {
    display: flex;
    justify-content: space-between;
    margin: _vw(10);
    border-bottom: 0.5px solid #a4a4a4;
    // .left {
    //   p {
    //   }
    // }
    .right {
      display: flex;
      align-items: center;
      i {
        font-size: _vw(22);
        color: #a4a4a4;
      }
    }
    span:first-child {
      font-size: _vw(25);
    }
    span:not(:first-child) {
      font-size: _vw(19);
      color: #818b99;
    }
    .icon-SQ {
      color: red;
    }
  }
}
</style>