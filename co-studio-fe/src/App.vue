<template>
  <main>
    <HeaderView />
    <router-view></router-view>
  </main>
</template>

<script>
  import HeaderView from '@/components/Navigation/HeaderView.vue';

  export default {
    components: {
      HeaderView,
    },
  };
</script>

<style scoped></style>
