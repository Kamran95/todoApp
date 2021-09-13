import Vue from 'vue'
import VueRouter from 'vue-router'
import systemSubLayout from '../layouts/systemSubLayout.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Login',
    meta: {
      layout: 'authLayout',
      requiresVisitor: true,
    },
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/Login')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'authLayout',
      requiresVisitor: true,
    },
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/Register')
  },
  {
    path: '/app',
    name: 'App',
    meta: { layout: 'kycLayout' },
    redirect: '/app/todos',
    component: systemSubLayout,
    children: [
      {
        path: "todos",
        name: "Todos",
        props: true,
        meta: {
          layout: "systemLayout",
          requiresAuth:true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/system/Todos.vue")
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  let isLogin = !!(store.getters['auth/getToken'])
  if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (isLogin) {
      next({name:'App'})
    } else {
      next()
    }
  }
 else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin) {
      next({name:'Login'})
    } else  {
      next()
    }
  } else {
    next() 
  }
})

export default router
