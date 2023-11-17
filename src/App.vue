<template>
  <main>
    <HeaderView />
    <router-view></router-view>
    <FooterView />
  </main>
</template>

<script>
  import HeaderView from '@/components/Navigation/HeaderView.vue';
  import FooterView from '@/components/Navigation/FooterView.vue';

  export default {
    components: {
      HeaderView,
      FooterView,
    },
  };
</script>

<style scoped></style>
