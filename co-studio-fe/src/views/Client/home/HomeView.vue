<template>
  <main>
    <BannerHomeViewVue />
    <AlbumHomeViewVue />
    <ProminentView />
    <ServiceViewVue id="service" />
    <FilmViewVue />
    <FeedbackViewVue />
    <ContactViewVue />
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
  };
</script>

<style scoped></style>
