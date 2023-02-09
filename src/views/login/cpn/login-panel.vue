<!--
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-09 09:36:47
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-09 14:56:56
-->
<template>
  <div class="login-panel">
    <div class="title">后台管理系统</div>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><user /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <Account ref="accountRef"></Account>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <phone></phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="bottom">
      <el-checkbox v-model="checked" size="large">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" size="large" @click="login">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Account from './account.vue'
import Phone from './phone.vue'

const checked = ref(false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof Account>>()

function login() {
  if (activeName.value === 'account') {
    console.log(accountRef)
    accountRef.value?.loginAction()
  } else {
    console.log('另一种手机方式')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 300px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
