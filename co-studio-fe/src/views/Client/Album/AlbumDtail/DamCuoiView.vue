<template>
  <BannerViewVue />
  <HightlineViewVue />
  <AllalbumViewVue />
</template>

<script>
import BannerViewVue from '@/views/Client/Album/AlbumDtail/components/BannerView.vue';
import HightlineViewVue from '@/views/Client/Album/AlbumDtail/components/HightlineView.vue';
import AllalbumViewVue from '@/views/Client/Album/AlbumDtail/components/AllalbumView.vue';
export default {
  components: { BannerViewVue, HightlineViewVue, AllalbumViewVue },
};
</script>

<style scoped></style>
