<template>
  <header>
    <div class="flex justify-between px-28 pt-11 pb-5">
      <div class="flex gap-3">
        <fb />
        <ig />
        <a href="https://m.me/tonyweddingphoto" target="_blank">
          <mess />
        </a>
      </div>
      <div class="">
        <div class="mb-3">
          <h1 class="text-center font-bodonimoda font-semibold text-main-header text-DBrowColor">Co Studio</h1>
        </div>
        <div class="flex gap-20">
          <router-link to="/">
            <h4 class="font-lato text-base font-medium text-DBrowColor">TRANG CHỦ</h4>
          </router-link>
          <router-link to="">
            <div class="flex items-center gap-x-2">
              <h1 class="font-lato text-base font-medium text-DBrowColor">DỊCH VỤ</h1>
              <arrowdown />
            </div>
          </router-link>
          <router-link to="/album">
            <h4 class="font-lato text-base font-medium text-DBrowColor">ALBUM</h4>
          </router-link>
          <router-link to="/story">
            <h4 class="font-lato text-base font-medium text-DBrowColor">CÂU CHUYỆN</h4>
          </router-link>
          <router-link to="/contact">
            <h4 class="font-lato text-base font-medium text-DBrowColor">LIÊN HỆ</h4>
          </router-link>
        </div>
      </div>
      <div class="flex gap-6">
        <h4>VN</h4>
        <h4>|</h4>
        <h4>EN</h4>
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
  };
</script>

<style scoped>
  .text-main-header {
    font-size: 3.5rem;
    line-height: 4rem;
  }
</style>
