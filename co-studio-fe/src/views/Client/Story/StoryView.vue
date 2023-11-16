<template>
  <BannerViewVue />
  <HightlineViewVue />
  <AllalbumViewVue />
</template>

<script>
  import BannerViewVue from '@/views/Client/Story/components/BannerView.vue';
  import HightlineViewVue from '@/views/Client/Story/components/HightlineView.vue';
  import AllalbumViewVue from '@/views/Client/Story/components/AllalbumView.vue';
  export default {
    components: { BannerViewVue, HightlineViewVue, AllalbumViewVue },
  };
</script>

<style scoped></style>
