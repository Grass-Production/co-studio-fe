import HomeViewVue from '@/views/Client/home/HomeView.vue'
import * as vueRouter from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Trang chủ | Cỏ Studio',
        component: HomeViewVue,
    },
]
const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes: routes,

    // Cuộn lên đầu trang khi chuyển Route
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // Nếu route đích có anchor (ví dụ: #section1)
            return { el: to.hash, behavior: 'smooth' };
        } else if (savedPosition) {
            // Nếu đã lưu vị trí cuộn trước đó
            return savedPosition;
        } else {
            // Mặc định, kéo lên đầu trang
            return { top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = ` ${to.name} `;
    next();
});
export default router;