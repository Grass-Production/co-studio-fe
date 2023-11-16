<template>
  <header>
    <div class="flex justify-between px-28 pt-11 pb-5">
      <div class="flex gap-3">
        <fb :width="24" :height="24" :color="HeaderClass ? `#FAF9F7` : `#867070`" />
        <ig :width="24" :height="24" :color="HeaderClass ? `#FAF9F7` : `#867070`" />
        <a href="https://m.me/tonyweddingphoto" target="_blank">
          <mess :width="24" :height="24" :color="HeaderClass ? `#FAF9F7` : `#867070`" />
        </a>
      </div>
      <div class="">
        <div class="mb-3">
          <h1
            class="text-center font-bodonimoda font-semibold text-[3.5rem]"
            :class="HeaderClass ? ' text-AlabasterColor2' : 'text-DBrowColor'">
            Co Studio
          </h1>
        </div>
        <div id="nav" class="flex gap-20">
          <router-link
            to="/"
            class="focus:isolate font-lato border-transparent border-b-2 hover:text-DBrowColor hover:border-b-2 hover:border-DBrowColor focus:text-DBrowColor focus:border-b-2 focus:border-DBrowColor text-base font-semibold"
            :class="HeaderClass ? ' text-AlabasterColor2' : 'text-DBrowColor'">
            TRANG CHỦ
          </router-link>
          <router-link to="/#service" style="border: none">
            <h1
              class="font-lato hover:text-DBrowColor hover:border-b-2 hover:border-DBrowColor focus:text-DBrowColor focus:border-b-2 focus:border-DBrowColor text-base font-semibold"
              :class="HeaderClass ? ' text-AlabasterColor2' : 'text-DBrowColor'">
              DỊCH VỤ
            </h1>
          </router-link>
          <router-link
            to="/album"
            class="font-lato border-transparent border-b-2 hover:text-DBrowColor hover:border-b-2 hover:border-DBrowColor focus:text-DBrowColor focus:border-b-2 focus:border-DBrowColor text-base font-semibold"
            :class="HeaderClass ? ' text-AlabasterColor2' : 'text-DBrowColor'">
            ALBUM
          </router-link>
          <router-link
            to="/story"
            class="font-lato border-transparent border-b-2 hover:text-DBrowColor hover:border-b-2 hover:border-DBrowColor focus:text-DBrowColor focus:border-b-2 focus:border-DBrowColor text-base font-semibold"
            :class="HeaderClass ? ' text-AlabasterColor2' : 'text-DBrowColor'">
            CÂU CHUYỆN
          </router-link>
          <router-link
            to="/contact"
            class="font-lato border-transparent border-b-2 hover:text-DBrowColor hover:border-b-2 hover:border-DBrowColor focus:text-DBrowColor focus:border-b-2 focus:border-DBrowColor text-base font-semibold"
            :class="HeaderClass ? ' text-AlabasterColor2' : 'text-DBrowColor'">
            LIÊN HỆ
          </router-link>
        </div>
      </div>
      <div class="flex gap-6">
        <h4 class="font-lato text-xl font-bold" :class="HeaderClass ? '  text-lightpinkColor' : 'text-BrowColor'">
          VN
        </h4>
        <h4 class="font-lato text-xl font-bold" :class="HeaderClass ? '  text-lightpinkColor' : 'text-BrowColor'">|</h4>
        <h4 class="font-lato text-xl font-bold" :class="HeaderClass ? '  text-lightpinkColor' : 'text-BrowColor'">
          EN
        </h4>
      </div>
    </div>
  </header>
</template>

<script>
  import fb from '@public/icon/fb.svg.vue';
  import ig from '@public/icon/ig.svg.vue';
  import mess from '@public/icon/mess.svg.vue';
  import arrowdown from '@public/icon/arrowdown.svg.vue';

  export default {
    components: { fb, ig, mess, arrowdown },
    data() {
      return {
        show: true,
      };
    },
    methods: {},
    computed: {
      HeaderClass() {
        return this.$route.path == '/album';
      },
    },
  };
</script>

<style>
  #nav .active-link-css {
    border-bottom: 2px solid #3f1d1f;
    color: #3f1d1f;
  }
</style>
