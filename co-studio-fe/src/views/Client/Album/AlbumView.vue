<template>
  <BannerViewVue />
  <ConceptViewVue :data="Data" />
  <ProminentViewVue />
  <router-view></router-view>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import BannerViewVue from '@/views/Client/Album/components/BannerView.vue';
  import ProminentViewVue from '@/views/Client/Album/components/ProminentView.vue';
  import ConceptViewVue from '@/views/Client/Album/components/ConceptView.vue';
  import { Concepts } from '../../../constants';
  export default {
    components: { BannerViewVue, ProminentViewVue, ConceptViewVue },
    data() {
      return {
        Data: Concepts,
      };
    },
  };
</script>

<style scoped></style>
