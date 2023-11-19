<template>
  <main class=" px-28 pt-14 pb-[4.25rem]">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">NỔI BẬT</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>
    <div class=" ">
      <swiper ref="mySwiper" :slidesPerView="3" :spaceBetween="30" :loop="true" :pagination="{
        clickable: true, dynamicBullets: true, dynamicMainBullets: 1
      }" :navigation="true" :modules="modules" class="mySwiper h-[45vh]">
        <swiper-slide v-for="x in albums">
          <div class=" grid grid-cols-4 h-[40vh] rounded-2xl">
            <div :style="{ backgroundImage: 'url(' + x.imgbg + ')' }"
              class="absolute hover:w-full hover:z-10 hover:left-0 z-0 transition-all duration-[0.4s] ease-in-out  hover:delay-[0.2s] w-[60%] h-[40vh]  rounded-2xl bg-no-repeat bg-center bg-cover left-[40%]  ">
            </div>
            <div :style="{ backgroundImage: 'url(' + x.imgbg2 + ')' }"
              class="absolute hover:w-full hover:z-10 hover:left-0 z-0 transition-all duration-[0.4s] ease-in-out hover:delay-[0.2s] w-[60%] h-[40vh]  rounded-2xl bg-no-repeat bg-center bg-cover left-[30%] ">
            </div>
            <div :style="{ backgroundImage: 'url(' + x.imgbg3 + ')' }"
              class="absolute hover:w-full hover:z-10 hover:left-0 z-0 transition-all duration-[0.4s] ease-in-out hover:delay-[0.2s] w-[60%] h-[40vh]  rounded-2xl bg-no-repeat bg-center bg-cover left-[15%] ">
            </div>
            <div :style="{ backgroundImage: 'url(' + x.imgbg4 + ')' }"
              class="absolute hover:w-full hover:z-10 hover:left-0 z-0 transition-all duration-[0.4s] ease-in-out hover:delay-[0.2s] w-[60%] h-[40vh]  rounded-2xl bg-no-repeat bg-center bg-cover left-[0] ">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </main>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import { AlbumAll } from '@/constants/index.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      albums: AlbumAll,
    }
  },
};
</script>

<style>
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  opacity: 1;
  background: #E4D0D0;
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #3F1D1F;
}

.swiper-button-next,
.swiper-button-prev {
  width: 3.5rem;
  height: 3.5rem;
  color: #E4D0D0;
  transition: scale 0.4s, color 0.4s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #3F1D1F;
  transform: scale(1.8);
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>