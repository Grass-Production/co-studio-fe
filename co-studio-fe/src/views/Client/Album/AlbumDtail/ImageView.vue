<template>
  <Transition>
    <main v-if="show" class="px-28 bg-GutterColor py-14">
      <div data-te-lightbox-init class="columns-3 w-full gap-8">
        <div class="">
          <img class="w-full rounded mb-6 cursor-zoom-in data-[te-lightbox-disabled]:cursor" v-for="x, i in albumsTest[0]"
            :src="x" alt="" />
        </div>
      </div>
    </main>
  </Transition>
</template>

<script>
import { Concepts } from '@/constants/index.js';
import { Lightbox, initTE } from 'tw-elements';

export default {
  data() {
    return {
      show: false,
      urlPath: '',
      name: '',
      albums: [],
      albumsTest: [],
      category: ''
    };
  },
  methods: {
    Fillter() {
      this.name = this.urlPath;
      var parts = this.name.split('/');
      this.name = parts[parts.length - 1];
      this.category = parts[parts.length - 2];
      console.log(this.name);
    },
    GetData() {
      this.albums = Concepts[0][this.category]
      console.log(this.albums)
    },
    CheckName() {
      for (let index = 0; index < this.albums.length; index++) {
        if (this.albums[index].name == this.name) {
          this.albumsTest.push(this.albums[index].imgall);
        }
      }
    },
  },
  beforeMount() {
    this.urlPath = window.location.pathname;
    this.Fillter();
    this.GetData()
    this.CheckName();
  },
  mounted() {
    initTE({ Lightbox });
    this.show = true;

  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
