<template>
  <main>
    <BannerHomeViewVue />
    <AlbumHomeViewVue />
    <ServiceViewVue />
    <ProminentView />
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
  import ProminentView from '@/views/Client/home/components/ProminentView.vue';
  export default {
    components: { BannerHomeViewVue, ProminentView, AlbumHomeViewVue, ServiceViewVue, FeedbackViewVue, ContactViewVue },
  };
</script>

<style scoped></style>
