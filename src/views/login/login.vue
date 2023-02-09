<!--
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-07 11:08:18
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-09 10:28:52
-->
<template>
  <div class="login"><login-panel></login-panel></div>
</template>

<script setup>
import LoginPanel from './cpn/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  // background-color: aquamarine;
}
</style>
