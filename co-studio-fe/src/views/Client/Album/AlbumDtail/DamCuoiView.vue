<template>
  <main>
    <Transition>
      <div class="" v-if="show">
        <BannerViewVue />
        <HightlineViewVue :data="data" />
        <AllalbumViewVue :data="data" />
      </div>
    </Transition>
  </main>
</template>

<script>
  import BannerViewVue from '@/views/Client/Album/AlbumDtail/components/BannerView.vue';
  import HightlineViewVue from '@/views/Client/Album/AlbumDtail/components/HightlineView.vue';
  import AllalbumViewVue from '@/views/Client/Album/AlbumDtail/components/AllalbumView.vue';

  import { Concepts } from '@/constants/index.js';

  export default {
    components: { BannerViewVue, HightlineViewVue, AllalbumViewVue },
    data() {
      return {
        show: false,
        data: Concepts,
      };
    },
    mounted() {
      this.show = true;
    },
  };
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
