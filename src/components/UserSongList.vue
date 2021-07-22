 <!-- 用户中心页歌单列表 -->
<template>
  <div id="userSongList">
    <ul>
      <template v-for="item in HotArr">
        <li :key="item.id">
          <div class="left">
            <img :src="item.coverImgUrl" />
          </div>
          <div class="right">
            <p>{{ item.name }}</p>
            <p>
              {{ item.trackCount }}首 播放{{
                parseFloat(item.playCount / 10000).toFixed(1)
              }}万次
            </p>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: { "HotArr": Array }
}
</script>

<style lang="scss" scoped>
#userSongList {
  ul {
    li {
      margin: _vw(10) 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .left {
        width: _vw(150);
        height: _vw(100);
        text-align: center;
        img {
          height: 100%;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: _vw(600);
        height: _vw(100);
        p {
          font-size: _vw(28);
        }
        p:nth-child(2) {
          font-size: _vw(24);
          color: #c1c1c1;
        }
      }
    }
  }
}
</style>