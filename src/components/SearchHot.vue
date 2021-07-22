<template>
  <div id="searchhot">
    <div class="serachhot_head">
      <div>热门搜索</div>
    </div>
    <ul>
      <template v-for="item in searchArr">
        <span
          :key="item.score"
          class="search_main"
          @click="clickSearch(item.searchWord)"
          >{{ item.searchWord }}</span
        >
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["searchArr"],
  methods: {
    clickSearch (searchName) {
      this.$emit("clicksearch", searchName)
    }
  }
}
</script>

<style lang="scss" scoped>
#searchhot {
  padding: _vw(20) _vw(20) 0 _vw(20);
  .serachhot_head {
  }
  ul {
    margin: _vw(20) 0;
    .search_main {
      border: 1px solid #ddd;
      border-radius: _vw(30);
      height: 35px;
      line-height: 35px;
      padding: 0 15px;
      display: inline-block;
      margin: 0 _vw(15) _vw(15) 0;
    }
  }
}
</style>