<!-- 专辑页歌单列表组件 -->
<template>
  <div id="albumList">
    <ul>
      <template v-for="(item, index) in songArr">
        <li :key="item.id">
          <div class="left">{{ ++index }}</div>
          <div class="right">
            <div class="content">
              <p>{{ item.name }} ({{ item.alia[0] }})</p>
              <p>{{ album.artists[0].name }}-{{ album.name }}</p>
            </div>
            <i class="iconfont icon-play"></i>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songArr: Array,
    album: Object,
  }
}
</script>

<style lang="scss" scoped>
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
</style>