<template>
  <main>
    <BannerHomeViewVue />
    <AlbumHomeViewVue />
    <ServiceViewVue />
    <FeedbackViewVue id="fed" />
    <ContactViewVue />
  </main>
</template>

<script>
  import BannerHomeViewVue from '@/views/Client/home/components/BannerHomeView.vue';
  import ServiceViewVue from '@/views/Client/home/components/ServiceView.vue';
  import FeedbackViewVue from '@/views/Client/home/components/FeedbackView.vue';
  import ContactViewVue from '@/views/Client/home/components/ContactView.vue';
  import AlbumHomeViewVue from '@/views/Client/home/components/AlbumHomeView.vue';
  export default {
    components: { BannerHomeViewVue, AlbumHomeViewVue, ServiceViewVue, FeedbackViewVue, ContactViewVue },
  };
</script>

<style scoped></style>
