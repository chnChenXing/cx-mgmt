<template>
  <el-card class="login-card">
    <h2 class="login-title">修改密码</h2>
    <el-form ref="loginForm" :model="form" :rules="rules" :label-width="labelWidth" class="login-form">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" size="large"></el-input>
      </el-form-item>
      <el-form-item prop="oldPassword">
        <el-input type="password" v-model="form.oldPassword" placeholder="请输入初始密码" size="large"></el-input>
      </el-form-item>
      <el-form-item prop="newPassword1">
        <el-input type="password" v-model="form.newPassword1" placeholder="请输入新密码" size="large"></el-input>
      </el-form-item>
      <el-form-item prop="newPassword2">
        <el-input type="password" v-model="form.newPassword2" placeholder="再次输入新密码" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row style="width: 360px">
          <el-col :span="16">
            <el-button class="btn1" type="primary" @click="resetPassword">确定</el-button>
          </el-col>
          <el-col :offset="1" :span="7">
            <el-button class="btn2" type="" @click="toggle('AccountLogin')">取消</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { ElCard, ElForm, ElFormItem, ElInput, ElButton, ElRow, ElCol, ElMessage } from 'element-plus';

const labelWidth = '0px';
const form = ref({
  username: '',
  oldPassword: '',
  newPassword1: '',
  newPassword2: '',
});

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  oldPassword: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
  newPassword1: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
  newPassword2: [{ required: true, message: '请再次输入新密码', trigger: 'blur' }],
};

const resetPassword = () => {
  // 调用修改密码接口
  ElMessage({
    message: '修改密码成功',
    type: 'success',
  });
  toggle('AccountLogin');
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
  .login-title {
    text-align: center;
  }

  .login-form {
    margin-top: 20px;
  }

  .btn1,
  .btn2 {
    width: 100%;
  }
}
</style>
