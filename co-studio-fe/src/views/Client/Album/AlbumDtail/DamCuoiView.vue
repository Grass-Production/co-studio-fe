<template>
  <BannerViewVue />
  <HightlineViewVue :data="data" />
  <AllalbumViewVue :data="data" />
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
        data: Concepts,
      };
    },
  };
</script>

<style scoped></style>
