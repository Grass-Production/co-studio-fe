<template>
  <div class="parent">
    <div class="div1 bg-orange-400">
      <img class="w-full" src="../images/imgalbum1.jpg" alt="" />
    </div>
    <div class="div2 bg-orange-400">
      <img class="w-full" src="../images/imgalbum1.jpg" alt="" />
    </div>
    <div class="div3 bg-orange-400">
      <img class="w-full" src="../images/imgalbum1.jpg" alt="" />
    </div>
    <div class="div4 bg-orange-400">
      <img class="w-full" src="../images/imgalbum1.jpg" alt="" />
    </div>
    <div class="div5 bg-orange-400">
      <img class="w-full" src="../images/imgalbum1.jpg" alt="" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .div1 {
    grid-area: 4 / 1 / 6 / 3;
  }

  .div2 {
    grid-area: 4 / 3 / 5 / 4;
  }

  .div3 {
    grid-area: 4 / 4 / 5 / 5;
  }

  .div4 {
    grid-area: 5 / 4 / 6 / 5;
  }

  .div5 {
    grid-area: 5 / 3 / 6 / 4;
  }
</style>
