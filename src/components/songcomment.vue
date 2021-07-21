<template>
  <section>
    <div id="songcomment">
      <div class="foothead">精彩评论</div>
      <template v-for="item in songCommentListArr">
        <div :key="item.commentId" class="footmain">
          <div class="main_left">
            <img :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="main_content">
            <span>{{ item.user.nickname }}</span>
            <span>{{ DateTime(item.time) }}</span>
            <span>{{ item.content }}</span>
          </div>
          <span class="main_right">
            {{ item.likedCount }}
            <!-- 头像右下logo，user.avatarDetail.identityIconUrl -->
          </span>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      year: "",
      month: "",
      day: "",
    }
  },
  methods: {
    DateTime (time) {
      this.year = new Date(time).getFullYear();
      this.month = String(new Date(time).getMonth() + 1).padStart(2, "0");
      this.day = new Date(time).getDate();
      return this.year + "年" + this.month + "月" + this.day + "日";
    }
  },
  props: ["songCommentListArr"],
}
</script>

<style lang="scss" scoped>
#songcomment {
  .foothead {
    font-size: _vw(16);
    padding: _vw(10) 0;
    background-color: #eeeff0;
  }
  .footmain {
    position: relative;
    display: flex;
    border-bottom: 1px solid #eee;
    padding: _vw(18);
    .main_left {
      img {
        width: _vw(50);
        border-radius: _vw(25);
      }
    }
    .main_content {
      margin-left: _vw(15);
      display: flex;
      flex-direction: column;
      span:nth-of-type(1) {
        font-size: _vw(20);
        color: #666;
        margin-bottom: _vw(2);
      }

      span:nth-of-type(2) {
        font-size: _vw(9);
        color: #999;
      }
      span:nth-of-type(3) {
        font-size: _vw(18);
        color: #333;
      }
    }
    .main_right {
      position: absolute;
      font-size: _vw(11);
      color: #999;
      top: 10%;
      right: 3%;
    }
  }
}
</style>
