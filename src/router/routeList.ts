interface routeType {
  path: string;
  name: string;
  component: any;
  meta?: {
    authInfo?: {
      needAuth?: boolean;
      authRoles?: string;
    };
  };
}

const routeList: routeType[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: () => import('@/components/errorPage/Forbidden.vue'),
  },
  {
    path: '/',
    name: 'NotFound',
    component: () => import('@/components/errorPage/NotFound.vue'),
  },
  {
    path: '/dashbord',
    name: 'Dashbord',
    component: () => import('@/views/dashbord/Dashbord.vue'),
    meta: {
      authInfo: {
        needAuth: true,
        authRoles: '1111111000',
        // 一共10位数，代表10个角色，1代表该角色有权限进入，0代表该角色无权限进入，这个理应放到后台，查接口去获取
      },
    },
  },
];

export default routeList;
