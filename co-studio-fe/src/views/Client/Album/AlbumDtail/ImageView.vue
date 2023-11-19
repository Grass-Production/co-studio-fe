<template>
  <main class="px-28 bg-GutterColor py-14">
    <div data-te-lightbox-init class="columns-3 w-full gap-8">
      <img
        class="w-full rounded mb-6 cursor-zoom-in data-[te-lightbox-disabled]:cursor"
        v-for="x in albumsTest"
        :src="x.imgbg"
        alt="" />
      <img
        class="w-full rounded mb-6 cursor-zoom-in data-[te-lightbox-disabled]:cursor"
        v-for="x in albumsTest"
        :src="x.imgbg2"
        alt="" />
      <img
        class="w-full rounded mb-6 cursor-zoom-in data-[te-lightbox-disabled]:cursor"
        v-for="x in albumsTest"
        :src="x.imgbg3"
        alt="" />
      <img
        class="w-full rounded mb-6 cursor-zoom-in data-[te-lightbox-disabled]:cursor"
        v-for="x in albumsTest"
        :src="x.imgbg4"
        alt="" />
    </div>
  </main>
</template>

<script>
  import { AlbumAll } from '@/constants/index.js';
  import { Lightbox, initTE } from 'tw-elements';

  export default {
    data() {
      return {
        urlPath: '',
        name: '',
        albums: AlbumAll,
        albumsTest: [],
      };
    },
    methods: {
      Fillter() {
        this.name = this.urlPath;
        var parts = this.name.split('/');
        this.name = parts[parts.length - 1];
        console.log(this.name);
      },
      CheckName() {
        for (let index = 0; index < this.albums.length; index++) {
          if (this.albums[index].name == this.name) {
            this.albumsTest.push(this.albums[index]);
          }
        }
      },
    },
    mounted() {
      initTE({ Lightbox });
      this.urlPath = window.location.pathname;
      this.Fillter();
      this.CheckName();
    },
  };
</script>

<style scoped></style>
