<template>
  <el-card class="login-card">
    <h2 class="login-title">重置密码</h2>
    <el-form ref="loginForm" :model="form" :rules="rules" :label-width="labelWidth" class="login-form">
      <el-form-item prop="telephone">
        <el-input v-model.number="form.telephone" placeholder="请输入绑定手机号" size="large">
          <template #append>
            <el-button type="primary" @click="getCheckCode">{{ getCodeText }}</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="checkCode">
        <el-input type="password" v-model="form.checkCode" placeholder="请输入短信验证码" size="large"></el-input>
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
const getCodeText = ref('获取验证码');

interface Form {
  telephone: string;
  checkCode: string;
  newPassword1: string;
  newPassword2: string;
}

const form = ref<Form>({
  telephone: '',
  checkCode: '',
  newPassword1: '',
  newPassword2: '',
});

// 重置密码
function resetPassword() {
  // 调用重置密码接口
  ElMessage({
    message: '重置密码成功',
    type: 'success',
  });
  toggle('AccountLogin');
}

const regex = /^1[3456789]\d{9}$/; //手机号的校验规则
function getCheckCode() {
  if (!form.value.telephone) {
    ElMessage({
      message: '请输入手机号',
      type: 'warning',
    });
    return;
  }

  if (!/^1[3456789]\d{9}$/.test(form.value.telephone)) {
    ElMessage({
      message: '请输入正确的手机号',
      type: 'warning',
    });
    return;
  }

  // 调用获取验证码接口
}

// 接收事件
const toggleComponent: Function | undefined = inject('toggleComponent');
const toggle = (type: string) => {
  toggleComponent && toggleComponent(type);
};

const validatePhoneNumber = (rule: any, value: any, callback: Function) => {
  if (!regex.test(value)) {
    callback(new Error('请输入正确的手机号'));
  } else {
    callback();
  }
};

const rules = {
  telephone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { validator: validatePhoneNumber, message: '请输入正确的手机号', trigger: 'blur' },
  ],
  checkCode: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
  newPassword1: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
  newPassword2: [{ required: true, message: '请再次输入新密码', trigger: 'blur' }],
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
