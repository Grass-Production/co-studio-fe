<template>
  <div class="px-28">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">TẤT CẢ</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class="grid gap-8 grid-cols-4">
      <div
        class=""
        v-for="x in albums"
        :class="({ 'col-start-1 col-end-3': x.id === 1 }, { 'col-start-3 col-end-5': x.id === 2 })">
        <div class="grid grid-cols-2" :class="x.id > 2 ? 'h-[40vh]' : 'h-[60vh]'">
          <div
            :style="{ background: 'url(' + x.imgbg + ')' }"
            class="row-start-1 row-end-4 bg-no-repeat bg-center bg-cover"></div>
          <div :style="{ background: 'url(' + x.imgbg2 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
          <div :style="{ background: 'url(' + x.imgbg3 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
          <div :style="{ background: 'url(' + x.imgbg4 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { LazyLoad, initTE } from 'tw-elements';
  export default {
    data() {
      return {
        mergedCount: 0,
        albums: [
          {
            id: 1,
            imgbg: '/src/views/Client/Album/images/imgconcept.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept.jpg',
          },
          {
            id: 2,
            imgbg: '/src/views/Client/Album/images/imgconcept2.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept2.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept2.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept2.jpg',
          },
          {
            id: 3,
            imgbg: '/src/views/Client/Album/images/imgconcept3.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept3.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept3.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept3.jpg',
          },
          {
            id: 4,
            imgbg: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept4.jpg',
          },
          {
            id: 5,
            imgbg: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept5.jpg',
          },
          {
            id: 6,
            imgbg: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept6.jpg',
          },
        ],
        albumsload: [
          {
            id: 7,
            imgbg: '/src/views/Client/Album/images/imgconcept.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept.jpg',
          },
          {
            id: 8,
            imgbg: '/src/views/Client/Album/images/imgconcept2.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept2.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept2.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept2.jpg',
          },
          {
            id: 9,
            imgbg: '/src/views/Client/Album/images/imgconcept3.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept3.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept3.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept3.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept4.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept5.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept6.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept4.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept5.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept6.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept4.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept5.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept6.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept4.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept4.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept5.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept5.jpg',
          },
          {
            id: 10,
            imgbg: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg2: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg3: '/src/views/Client/Album/images/imgconcept6.jpg',
            imgbg4: '/src/views/Client/Album/images/imgconcept6.jpg',
          },
        ],
      };
    },
    methods: {
      Lazyload() {
        const chunkSize = 6;
        window.addEventListener('scroll', () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (this.mergedCount < this.albumsload.length) {
              console.log('Cuộn hết thanh cuộn - true');
              const chunk = this.albumsload.slice(this.mergedCount, this.mergedCount + chunkSize);
              this.albums = this.albums.concat(chunk);
              this.mergedCount += chunkSize;
              console.log(this.albums);
            }
          }
        });
      },
    },
    mounted() {
      this.Lazyload();
      initTE({ LazyLoad });
    },
  };
</script>

<style scoped></style>
