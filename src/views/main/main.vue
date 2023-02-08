<template>
  <div class="main">main</div>
</template>

<script setup>
import { reactive } from 'vue'
import { accountLoginRequest } from '../../service/login/login'

accountLoginRequest({ name: 'hh', password: '123456' }).then((res) => {
  console.log(res)
})
</script>

<style lang="less" scoped></style>
