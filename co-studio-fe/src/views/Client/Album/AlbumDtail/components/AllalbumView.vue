<template>
  <div class="px-28">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">TẤT CẢ</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class="grid gap-8 grid-cols-4">
      <div class="" v-for="x in data[0][category]"
        :class="x.id == 1 ? 'col-start-1 col-end-3' : '' || x.id == 2 ? 'col-start-3 col-end-5' : ''">
        <router-link :to="`${urlPath}/${x.name}`">
          <div class="grid grid-cols-2" :class="x.id > 2 ? 'h-[40vh] grid-rows-2' : 'h-[60vh]'">
            <div :style="{ backgroundImage: 'url(' + x.imgbg1 + ')' }"
              class="row-start-1 row-end-4 bg-no-repeat bg-center bg-cover"></div>
            <div :style="{ backgroundImage: 'url(' + x.imgbg2 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
            <div :style="{ backgroundImage: 'url(' + x.imgbg3 + ')' }" class="bg-no-repeat bg-center bg-cover"></div>
            <div v-if="x.id < 3" :style="{ backgroundImage: 'url(' + x.imgbg4 + ')' }"
              class="bg-no-repeat bg-center bg-cover"></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { LazyLoad, initTE } from 'tw-elements';
// import { AlbumAll, AlbumLoadAll, Concepts } from '@/constants/index.js'
export default {
  data() {
    return {
      urlPath: '',
      category: '',
      mergedCount: 0,
      // albums: AlbumAll,
      // albumsload: AlbumLoadAll
    };
  },
  props: {
    data: Array,
  },
  methods: {
    // Lazyload() {
    //   const chunkSize = 6;
    //   window.addEventListener('scroll', () => {
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //       if (this.mergedCount < this.albumsload.length) {
    //         console.log('Cuộn hết thanh cuộn - true');
    //         const chunk = this.albumsload.slice(this.mergedCount, this.mergedCount + chunkSize);
    //         this.albums = this.albums.concat(chunk);
    //         this.mergedCount += chunkSize;
    //         console.log(this.albums);
    //       }
    //     }
    //   });
    // },
    GetCategory() {
      var path = this.urlPath;
      var parts = path.split('/');
      this.category = parts[parts.length - 1];
    },
  },
  beforeMount() {
    // this.Lazyload();
    initTE({ LazyLoad });
    this.urlPath = window.location.pathname;
    this.GetCategory();
  },
};
</script>

<style scoped></style>
