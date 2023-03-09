<!--
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-06 16:11:28
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-09 10:05:38
-->
<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
