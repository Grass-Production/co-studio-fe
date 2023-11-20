<template>
  <main>
    <Transition>
      <div class="" v-if="show">
        <BannerHomeViewVue />
        <AlbumHomeViewVue />
        <ProminentView />
        <ServiceViewVue id="service" />
        <FilmViewVue />
        <FeedbackViewVue />
        <ContactViewVue id="contact" />
      </div>
    </Transition>
  </main>
</template>

<script>
  import BannerHomeViewVue from '@/views/Client/home/components/BannerHomeView.vue';
  import ServiceViewVue from '@/views/Client/home/components/ServiceView.vue';
  import FeedbackViewVue from '@/views/Client/home/components/FeedbackView.vue';
  import ContactViewVue from '@/views/Client/home/components/ContactView.vue';
  import AlbumHomeViewVue from '@/views/Client/home/components/AlbumHomeView.vue';
  import ProminentView from '@/views/Client/Album/components/ProminentView.vue';
  import FilmViewVue from '@/views/Client/home/components/FilmView.vue';
  export default {
    components: {
      BannerHomeViewVue,
      FilmViewVue,
      ProminentView,
      AlbumHomeViewVue,
      ServiceViewVue,
      FeedbackViewVue,
      ContactViewVue,
    },
    data() {
      return {
        show: false,
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
