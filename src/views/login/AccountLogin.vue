<template>
  <el-card class="login-card">
    <h2 class="login-title">用户登录</h2>
    <el-form ref="loginForm" :model="form" :rules="rules" :label-width="labelWidth" class="login-form">
      <el-form-item label="" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号" size="large"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码" size="large"></el-input>
      </el-form-item>
      <el-form-item class="login-operation">
        <el-button type="primary" class="w100p" @click="submitForm">登录</el-button>
        <div class="pwd-manage">
          <el-link href="#" @click="toggle('ChangePassword')" :underline="false">修改密码</el-link>
          <el-link href="#" @click="toggle('ResetPassword')" :underline="false">忘记密码?</el-link>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { ElCard, ElForm, ElFormItem, ElInput, ElButton, ElLink } from 'element-plus';
import { useRouter } from 'vue-router';

const labelWidth = '0px';
const form = ref({
  username: '',
  password: '',
});

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

const router = useRouter();
const submitForm = () => {
  // 调用登录接口
  const userInfo = {
    username: '小黑子',
    id: '123456789',
    roles: '1111111111',
  };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  router.push('/dashbord');
};

// 接收事件
const toggleComponent: Function | undefined = inject('toggleComponent');
const toggle = (type: string) => {
  toggleComponent && toggleComponent(type);
};
</script>

<style lang="scss" scoped>
.login-card {
  width: 360px;
  padding: 0 30px;
}

.login-title {
  text-align: center;
}

.login-form {
  margin-top: 20px;
}

.pwd-manage {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
