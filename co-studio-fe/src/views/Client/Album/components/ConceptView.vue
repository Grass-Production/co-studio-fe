<template>
  <main class="pt-[4.5rem] bg-GutterColor">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">CONCEPT CHỤP ẢNH</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class="grid grid-cols-3 gap-8 w-1/2 mx-auto">
      <div class="" v-for="(x, i) in bg">
        <router-link :to="`/album/${key[i]}`">
          <div
            :id="x.id"
            :style="{ backgroundImage: 'url(' + x + ')' }"
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
        bg: [],
      };
    },
    props: {
      data: Array,
    },
    methods: {
      GetBg() {
        const data = this.data[0];
        for (let index = 0; index < this.key.length; index++) {
          const element = this.key[index];
          this.bg.push(data[element][0].imgbg);
        }
      },
      GetKey() {
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          this.key = Object.keys(element);
          this.img = element[this.key[index]];
        }
      },
    },
    mounted() {
      this.GetKey();
      this.GetBg();
    },
  };
</script>

<style scoped></style>
