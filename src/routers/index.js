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
        path: '/comment',
        name: 'Comments',
        component: () => import('../views/Comments.vue')
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/Mine.vue'),
        beforeEnter: (to, from, next) => {
            let user = localStorage.getItem('user')
            if (user && user !== 'undefined') {
                next()
            }
            else {
                next('home')
            }
        }
    },
    {
        path: '/reserve/:tid',
        name: 'Reserve',
        component: () => import('../views/Reserve.vue'),
        props: true,
        children: [
            {
                path: '/reserve/:tid/:rid',
                name: 'RoomDetail',
                component: () => import('../components/reserve/RoomDetail.vue'),
                props: true
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/404.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router