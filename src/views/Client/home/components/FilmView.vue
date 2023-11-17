<template>
  <main class="px-28 py-[4.25rem]">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">PHIM NHÀ CỎ</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>

    <div class="grid grid-cols-4 gap-8 mb-16">
      <div class="" v-for="(x, i) in dataclip">
        <div @click="ShowPopUp(x.url)">
          <div
            class="rounded h-48 w-full flex justify-center items-center"
            :style="{ background: 'url(' + x.img + ') center/cover no-repeat' }">
            <pausesvg />
            <div
              v-if="showPopUp"
              class="z-50 w-full fixed top-0 left-0 min-h-screen flex justify-center items-center"
              style="background-color: rgba(0, 0, 0, 0.295)">
              <div :key="x.id" @click="ShowPopUp(x.url)">
                <iframe
                  class="w-[60vw] h-[70vh]"
                  :src="url"
                  title="Một chiều thu - Tỏi ft. Trazik | (Prod. Pieper Beats)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="block mx-auto font-lato font-semibold text-base text-BrowColor py-4 px-10 outline outline-1 outline-BrowColor rounded">
      Xem thêm
    </button>
  </main>
</template>

<script>
  import pausesvg from '@public/icon/pause.svg.vue';
  export default {
    components: { pausesvg },
    data() {
      return {
        showPopUp: false,
        url: '',
        dataclip: [
          {
            id: 1,
            img: '/src/views/Client/home/images/imgalbum1.jpg',
            url: 'https://www.youtube.com/embed/sEdlWPbjgsg',
          },
          {
            id: 2,
            img: '/src/views/Client/home/images/imgalbum2.png',
            url: 'https://www.youtube.com/embed/2CLp4rKHvx8',
          },
          {
            id: 3,
            img: '/src/views/Client/home/images/imgalbum3.png',
            url: 'https://www.youtube.com/embed/wwyiBgNjBrE',
          },
          {
            id: 4,
            img: '/src/views/Client/home/images/imgalbum4.png',
            url: 'https://www.youtube.com/embed/VbqTux0AJr0',
          },
        ],
      };
    },
    methods: {
      ShowPopUp(url) {
        this.showPopUp = !this.showPopUp;
        console.log(this.dataclip);
        this.url = url;
      },
    },
  };
</script>

<style scoped>
  .bg {
  }
</style>
