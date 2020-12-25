import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        children: [
            {
                path: '/login',
                name: 'LoginBox',
                component: () => import('../components/user/LoginBox.vue'),
                beforeEnter: (to, from, next) => {
                    let user = localStorage.getItem('user')
                    if (user && user !== 'undefined') {
                        next('home')
                    }
                    else {
                        next()
                    }
                }
            },
            {
                path: '/register',
                name: 'RegisterBox',
                component: () => import('../components/user/RegisterBox.vue')
            }
        ]
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/reserve/:type',
        name: 'Reserve',
        component: () => import('../views/Reserve.vue'),
        props: true,
        children: [
            {
                path: '/reserve/:type/:rid',
                name: 'RoomDetail',
                component: () => import('../components/reserve/RoomDetail.vue'),
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router