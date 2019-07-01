import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '../store/store';
import Home from '../views/Home.vue';

Vue.use(Router);

const myRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '*', 
      redirect: '/404',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
      hidden: true,
    },
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      meta: {
        title: '登陆',
      },
    },
    {
      path: '/404',
      component: () => import('@/components/ErrorPage/404'),
    },
    {
      path: '/401',
      component: () => import('@/components/ErrorPage/401'),
      hidden: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      hidden: true,
    },
  ],
});

//路由配置

myRouter.beforeEach((to, from, next)=> {
  NProgress.start();
<<<<<<< HEAD
  // if (!store.state.token) {   // 此处有死循环-
  //   next(
  //     {
  //       path: './login',
  //     },
  //   ); // 跳转登录
  next();
  //   NProgress.done(); // 结束Progress
  // }
});
=======
  if (to.path !== '/login') {
    next('/'); //跳转登录
    NProgress.done(); // 结束Progress
  }
})
>>>>>>> 34d9109301b46ffa6f094168378f706550645352
myRouter.afterEach(() => {
  NProgress.done(); // 结束Progress
})

export default myRouter;