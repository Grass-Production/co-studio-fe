<template>
  <main>
    <Transition>
      <div class="" v-if="show">
        <BannerViewVue />
        <ConceptViewVue :data="Data" />
        <ProminentViewVue />
        <!-- <router-view></router-view> -->
      </div>
    </Transition>
  </main>
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
        show: false,
        Data: Concepts,
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
