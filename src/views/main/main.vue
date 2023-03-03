<!--
 * @Description:x
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-07 11:08:25
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-03-03 18:06:53
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <!-- <main-menu :is-fold="isFold"></main-menu> -->
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @fold-change="handleChang"></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
