<template>
  <main class="pt-[4.5rem] bg-GutterColor">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">CONCEPT CHỤP ẢNH</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class="grid grid-cols-3 gap-8 w-1/2 mx-auto">
      <div
        v-for="x in albums"
        :id="x.id"
        :style="{ background: 'url(' + x.imgbg + ')' }"
        class="rounded flex flex-col justify-end items-start bg-[url('src/views/Client/Album/images/imgbanner.jpg')] bg-no-repeat bg-center bg-cover h-[32vh]">
        <h1 class="rounded font-lato text-xl font-semibold text-BrowColor px-11 py-2 bg-lightpinkColor">
          {{ x.category }}
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        albums: [
          {
            id: 1,
            imgbg: '/src/views/Client/Album/images/imgconcept.jpg',
            category: 'Đám cưới',
          },
          {
            id: 2,
            imgbg: '/src/views/Client/Album/images/imgconcept2.jpg',
            category: 'Em bé',
          },
          {
            id: 3,
            imgbg: '/src/views/Client/Album/images/imgconcept3.jpg',
            category: 'Pre-wedding',
          },
          {
            id: 4,
            imgbg: '/src/views/Client/Album/images/imgconcept4.jpg',
            category: 'Ngoại cảnh',
          },
          {
            id: 5,
            imgbg: '/src/views/Client/Album/images/imgconcept5.jpg',
            category: 'Cặp đôi',
          },
          {
            id: 6,
            imgbg: '/src/views/Client/Album/images/imgconcept6.jpg',
            category: 'Gia đình',
          },
        ],
      };
    },
  };
</script>

<style scoped></style>
