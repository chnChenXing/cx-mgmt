<template>
  <div id="login">
    <component :is="currentComponent"></component>
  </div>
</template>

<script setup lang="ts">
// 登录页面布局：
// 登录页有三个组件，分别是AccountLogin、ChangePassword、ResetPassword，使用component :is来切换
import { shallowRef, provide } from 'vue';

import AccountLogin from './login/AccountLogin.vue';
import ChangePassword from './login/ChangePassword.vue';
import ResetPassword from './login/ResetPassword.vue';

const currentComponent = shallowRef<typeof AccountLogin>(AccountLogin);

const components: { [key: string]: any } = {
  AccountLogin,
  ChangePassword,
  ResetPassword,
};

const toggleComponent = (name: string) => {
  currentComponent.value = components[name];
};
// 这么写，子组件都能用
provide('toggleComponent', toggleComponent);
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(src/assets/images/bg_2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
