 <!-- 推荐音乐页编辑推荐 -->
<template>
  <div id="EditRecommend">
    <ul>
      <template v-for="item in EditRecommendArr">
<<<<<<< HEAD
        <!-- <router-link tag="li" :key="item.id"> -->
        <li :key="item.id" @click="sonid(item.id)">
=======
        <li :key="item.id" @click="toSongList(item.id)">
>>>>>>> fc609134a2e82f7b99a5e0a00988ae8505c497ec
          <img :src="item.picUrl" />
          <span>{{ item.name }}</span>
          <p>
            <i class="iconfont icon-headset"></i>
            <span>{{ parseFloat(item.playCount / 10000).toFixed(1) }}万</span>
          </p>
        </li>
<<<<<<< HEAD
        <!-- </router-link> -->
=======
>>>>>>> fc609134a2e82f7b99a5e0a00988ae8505c497ec
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: { "EditRecommendArr": Array },
  methods: {
<<<<<<< HEAD
    sonid (itemid) {
      this.$emit("sonid", itemid);
    }
  }

=======
    toSongList (nowId) {
      this.$emit("toSongList", nowId);
    }
  }
>>>>>>> fc609134a2e82f7b99a5e0a00988ae8505c497ec
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#EditRecommend {
  margin: 0;
  padding: 0;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      margin-bottom: _vw(30);
      display: flex;
      flex-direction: column;
      width: _vw(248);
      height: _vw(248);
      img {
        width: 100%;
        height: 100%;
      }
      > span {
        position: absolute;
        bottom: _vw(-30);
        left: 0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: _vw(16);
      }
      p {
        position: absolute;
        right: _vw(10);
        top: _vw(10);
        color: #fff;
        font-size: _vw(16);
      }
    }
  }
}
</style>