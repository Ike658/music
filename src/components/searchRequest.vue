<template>
  <div id="searchrequest">
    <div class="search_head">
      <span>搜索“{{ this.userinput }}”</span>
    </div>
    <ul>
      <template v-for="item in searchRequestArr">
        <li :key="item.__ob__.dep.id" class="search_main">
          <i class="iconfont icon-icon-search"></i>
          <span>{{ item.keyword }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["searchRequestArr", "userinput"],
}
</script>

<style lang="scss" scoped>
#searchrequest {
  .search_head {
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    font-size: _vw(22);
    border-bottom: 1px solid #eee;
    span {
      color: #507daf;
    }
  }
  ul {
    .search_main {
      height: 60px;
      line-height: 60px;
      padding-left: _vw(20);
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      i {
        color: #9ba1a1;
        font-size: _vw(40);
      }
      span {
        display: inline-block;
        width: 100%;
        padding-right: _vw(20);
        font-size: _vw(20);
      }
    }
  }
}
</style>