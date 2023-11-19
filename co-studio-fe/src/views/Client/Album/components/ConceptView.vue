<template>
  <main class="pt-[4.5rem] bg-GutterColor">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">CONCEPT CHỤP ẢNH</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class="grid grid-cols-3 gap-8 w-1/2 mx-auto">
      <div class="" v-for="(x, i) in img">
        <router-link :to="`/album/${key[i]}`">
          <div
            :id="x.id"
            :style="{ backgroundImage: 'url(' + x.imgbg + ')' }"
            class="rounded flex flex-col justify-end items-start bg-[url('src/views/Client/Album/images/imgbanner.jpg')] bg-no-repeat bg-center bg-cover h-[32vh]">
            <h1 class="rounded font-lato text-xl font-semibold text-BrowColor px-11 py-2 bg-lightpinkColor">
              {{ key[i] }}
            </h1>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
  import { Concepts } from '../../../../constants';

  export default {
    data() {
      return {
        concepts: Concepts,
        key: [],
        img: [],
      };
    },
    props: {
      data: Array,
    },
    methods: {},
    mounted() {
      for (let index = 0; index < this.concepts.length; index++) {
        const element = this.concepts[index];
        this.key = Object.keys(element);
        console.log(this.key);
        this.img = element[this.key[index]];
        console.log(this.img[index].imgbg);
      }
      console.log(this.data[0]);
    },
  };
</script>

<style scoped></style>
