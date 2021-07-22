<template>
  <div id="comment">
    <ul>
      <template v-for="item in commentArr">
        <li :key="item.commentId">
          <div class="content">
            <div class="left">
              <div class="img">
                <img :src="item.user.avatarUrl" />
              </div>
              <div class="box">
                <p>{{ item.user.nickname }}</p>
                <p>{{ getTime(item.time) }}</p>
              </div>
            </div>
            <div class="right">
              <span>{{ item.likedCount }}</span>
              <span class="iconfont icon-dianzan"></span>
            </div>
          </div>
          <div class="text">{{ item.content }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    commentArr: Array
  },
  methods: {
    getTime (stamp) {
      let year = new Date(stamp).getFullYear();
      let month = String(new Date(stamp).getMonth() + 1).padStart(2, "0");
      let day = new Date(stamp).getDate();
      return `${year}年${month}月${day}日`;
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        justify-content: space-between;
        .img {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 94px;
          margin: 0 _vw(38);
          img {
            height: 54px;
            border-radius: 50%;
          }
        }
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            margin: _vw(5) 0;
            font-size: 14px;
            color: rgb(26, 4, 4);
          }
          p:nth-child(2) {
            color: #c1c1c1;
          }
        }
      }
      .right {
        height: 70px;
        line-height: 70px;
        color: #c1c1c1;
        span {
          font-size: 14px;
          margin: 0 _vw(10);
        }
      }
    }
    .text {
      width: 100%;
      box-sizing: border-box;
      padding-left: _vw(180);
    }
  }
}
</style>