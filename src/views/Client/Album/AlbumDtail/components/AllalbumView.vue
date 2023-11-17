<template>
  <div class="px-28">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">TẤT CẢ</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class="grid gap-8 grid-cols-4">
      <div class="" v-for="x in albums"
        :class="(x.id == 1 ? 'col-start-1 col-end-3' : '' || x.id == 2 ? 'col-start-3 col-end-5' : '')">
        <div class="grid grid-cols-2" :class="x.id > 2 ? 'h-[40vh] grid-rows-2' : 'h-[60vh]'">
          <div :style="{ backgroundImage: 'url(' + x.imgbg + ')' }"
            class="row-start-1 row-end-4 bg-no-repeat bg-center bg-cover"></div>
          <div :style="{ backgroundImage: 'url(' + x.imgbg2 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
          <div :style="{ backgroundImage: 'url(' + x.imgbg3 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
          <div v-if="x.id < 3" :style="{ backgroundImage: 'url(' + x.imgbg4 + ')' }"
            class="bg-no-repeat bg-center bg-cover">
          </div>
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
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album1.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album1.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album1.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img4album1.png',
        },
        {
          id: 2,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album2.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album2.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album2.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img4album2.png',
        },
        {
          id: 3,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album3.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album3.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',

        },
        {
          id: 4,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album4.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album4.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album4.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album4.png',

        },
        {
          id: 5,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album5.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album5.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album5.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album5.png',

        },
        {
          id: 6,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album3.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album3.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
        },
      ],
      albumsload: [
        {
          id: 7,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album1.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album1.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album1.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img4album1.png',
        },
        {
          id: 8,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album2.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album2.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album2.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img4album2.png',
        },
        {
          id: 9,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album3.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album3.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album4.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album4.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album4.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album4.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album5.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album5.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album5.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album5.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album3.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album3.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album3.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album2.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album2.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album2.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img4album2.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album1.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album1.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album1.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img4album1.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album4.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album4.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album4.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album4.png',
        },
        {
          id: 10,
          imgbg: '/src/views/Client/Album/AlbumDtail/images/img1album5.png',
          imgbg2: '/src/views/Client/Album/AlbumDtail/images/img2album5.png',
          imgbg3: '/src/views/Client/Album/AlbumDtail/images/img3album5.png',
          imgbg4: '/src/views/Client/Album/AlbumDtail/images/img2album5.png',
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
