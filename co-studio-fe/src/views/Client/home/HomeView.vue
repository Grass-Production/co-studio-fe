<template>
  <BannerHomeViewVue />
  <ServiceViewVue />
  <FedbackViewVue />
</template>

<script>
  import BannerHomeViewVue from '@/views/Client/home/components/BannerHomeView.vue';
  import ServiceViewVue from '@/views/Client/home/components/ServiceView.vue';
  import FedbackViewVue from '@/views/Client/home/components/FeedbackView.vue';
  export default {
    components: { BannerHomeViewVue, ServiceViewVue, FedbackViewVue },
  };
</script>

<style scoped></style>
