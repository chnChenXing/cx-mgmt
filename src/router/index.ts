// 路由页面逻辑：
// 1.注册的路由包含所有页面，通过菜单的path字段去匹配对应组件
// 路由守卫拦截逻辑：
// 1.如果needAuth==true, 则需要登录才能进入路由页面，未登录就跳转到登录页面
// 2.如果已登录，通过authRoles决定当前角色是否有权限进入页面，没有跳转到forbidden页

import { createRouter, createWebHistory } from "vue-router";
import routeList from "./routeList";

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: routeList,
});

// 路由拦截
router.beforeEach(async (to, form, next) => {
  console.log(to, form);
  if (to.meta.authInfo?.needAuth) {
    // 未登录，跳转到登录页面
    const userInfoStr = localStorage.getItem("userInfo");
    if (!userInfoStr) {
      console.log("当前未登录，请先登录！");
      next("/");
      return;
    }
    // 登录了，根据角色判断，判断是否有权限，
    if (to.meta.authInfo?.authRoles) {
      const authRoles = to.meta.authInfo.authRoles;
      // 一共10个角色，用10位数的字符串表示，1代表该账号有这个角色，0代表该账号没有这个角色
      const userInfo = JSON.parse(userInfoStr);
      if (userInfo?.roles) {
        const roles = userInfo.roles;
        for (let i = 0; i < authRoles.length; i++) {
          if (authRoles[i] === "1" && roles[i] === "1") {
            // 有权限，进入页面
            next();
            return;
          }
        }
      }
      console.log("当前角色无权限，请联系管理员！");
      next("/forbidden");
    }
  }
  next();
});

export default router;
