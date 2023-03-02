<!--
 * @Description:
 * @version:
 * @Author: Huangjiahui
 * @Date: 2023-02-09 09:37:33
 * @LastEditors: Huangjiahui
 * @LastEditTime: 2023-02-11 17:49:13
-->
<template>
  <div class="account">
    <el-form
      label-width="60px"
      :model="formLabelAlign"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formLabelAlign.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useLoginStore from '@/store/modules/login'
import { type ElForm, type FormRules, type FormInstance, ElMessage } from 'element-plus'
import { localCache } from '@/utils/localCache'
import { CACHE_NAME, CACHE_PASSWORD } from '@/global/constants'
const formLabelAlign = reactive({
  name: localCache.get(CACHE_NAME) ?? '',
  password: localCache.get(CACHE_PASSWORD) ?? ''
})
// 2.定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}

//或const formRef=ref<FormInstance>()

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()

function loginAction(checked: boolean) {
  formRef.value?.validate((vaild) => {
    if (vaild) {
      const name = formLabelAlign.name
      const password = formLabelAlign.password

      //发送请求
      loginStore.loginAccount({ name, password }).then((res) => {
        if (checked) {
          localCache.set(CACHE_NAME, name)
          localCache.set(CACHE_PASSWORD, password)
        }
      })
    } else {
      ElMessage.error('请输入正确格式')
    }
  })
}

//父组件调用子组件方法需把该方法暴露出去
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.account {
  color: red;
}
</style>
