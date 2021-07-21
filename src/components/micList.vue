<template >
  <section>
    <template v-for="(item, index) in evenArr">
      <div id="micList" :key="item.id">
        <div class="main">
          <div class="main_content">
            <div class="main_left" :class="{ active: index < 3 }">
              {{ (++index).toString().padStart(2, "0") }}
            </div>
            <div class="main_center">
              <div>
                <span>{{ item.name }} </span>
                <span v-show="item.alia.length">{{ item.alia[0] }}</span>
              </div>
              <div>
                <span class="iconfont icon-SQ"></span
                >{{ item.ar[0].name + "-" + item.al.name }}
              </div>
            </div>
            <div class="main_right">
              <span class="iconfont icon-play"></span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  props: ["evenArr"],
}
</script>

<style>
</style>