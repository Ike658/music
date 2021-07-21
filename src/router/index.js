import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import("../views/Index.vue"),
        redirect: '/recommend',
        children: [{
            path: 'recommend',
            name: 'Recommend',
            component: () => import("../views/index/Recommend.vue"),
            meta: {
                title: "今日歌曲推荐"
            }
        },
        {
            path: 'hot',
            name: 'Hot',
            component: () => import("../views/index/Hot.vue"),
            meta: {
                title: "Hot热歌榜"
            }
        }, {
            path: 'search',
            name: 'Search',
            component: () => import("../views/index/Search.vue"),
            meta: {
                title: "搜你心中所想"
            }
        }]
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import("../views/User.vue"),
        meta: {
            title: "用户中心"
        }
    },
    {
        path: '/album',
        name: 'Album',
        component: () => import("../views/Album.vue"),
        meta: {
            title: "专辑"
        }
    },
    {
        path: '/play',
        name: 'Play',
        component: () => import("../views/Play.vue"),
        meta: {
            title: "播放"
        },
    },
    {
        path: '/SongList/:id',
        name: 'SongList',
        component: () => import("../views/SongList.vue"),
        meta: {
            title: "歌单详情页"
        }
    }
]

const router = new VueRouter({
    "linkActiveClass": "active",
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})
export default router
