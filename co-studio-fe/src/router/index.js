import HomeViewVue from '@/views/Client/home/HomeView.vue';
import * as vueRouter from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Trang chủ | Cỏ Studio',
    component: HomeViewVue,
  },
  //   {
  //     path: '/album',
  //     name: 'Album | Cỏ Studio',
  //     component: () => import('@/views/Client/Album/AlbumView.vue'),
  //   },
  {
    path: '/album',
    name: 'Album | Cỏ Studio',
    component: () => import('@/views/Client/Album/AlbumView.vue'),
  },
  {
    path: '/album/:albumname',
    name: 'Album Dtail | Cỏ Studio',
    component: () => import('@/views/Client/Album/AlbumDtail/DamCuoiView.vue'),
  },
  {
    path: '/album/:name/:image',
    name: 'Images | Cỏ Studio',
    component: () => import('@/views/Client/Album/AlbumDtail/ImageView.vue'),
  },
  {
    path: '/story',
    name: 'Câu chuyện | Cỏ Studio',
    component: () => import('@/views/Client/Story/StoryView.vue'),
  },
  {
    path: '/contact',
    name: 'Liên hệ | Cỏ Studio',
    component: () => import('@/views/Client/Contact/ContactView.vue'),
  },
];
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: routes,
  linkActiveClass: 'active-link-css',

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
