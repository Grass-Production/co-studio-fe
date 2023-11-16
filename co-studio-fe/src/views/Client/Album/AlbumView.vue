<template>
  <BannerViewVue />
  <ConceptViewVue />
  <ProminentViewVue />
  <router-view></router-view>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import BannerViewVue from '@/views/Client/Album/components/BannerView.vue';
  import ProminentViewVue from '@/views/Client/Album/components/ProminentView.vue';
  import ConceptViewVue from '@/views/Client/Album/components/ConceptView.vue';

  export default {
    components: { BannerViewVue, ProminentViewVue, ConceptViewVue },
  };
</script>

<style scoped></style>
