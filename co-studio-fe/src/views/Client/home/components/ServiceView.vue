<template>
  <main class="bg-GutterColor">
    <div class="px-28 pb-[4.75rem] pt-9">
      <div class="text-center mb-9">
        <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">DỊCH VỤ CỎ STUDIO</h1>
        <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
      </div>
      <ul
        class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 justify-center gap-16"
        role="tablist"
        data-te-nav-ref>
        <li role="presentation" class="w-32 text-center">
          <a
            href="#home"
            class="my-2 font-lato text-base font-bold text-pinkColor block border-b-2 border-t-0 border-transparent hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-DBrowColor data-[te-nav-active]:text-DBrowColor dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-DBrowColor-400 dark:data-[te-nav-active]:text-DBrowColor-400"
            data-te-toggle="pill"
            data-te-target="#home"
            data-te-nav-active
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >PHÓNG SỰ CƯỚI
          </a>
        </li>
        <li role="presentation" class="w-32 text-center">
          <a
            href="#tabs-profile"
            class="my-2 font-lato text-base font-bold text-pinkColor block border-b-2 border-t-0 border-transparent hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-DBrowColor data-[te-nav-active]:text-DBrowColor dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-DBrowColor-400 dark:data-[te-nav-active]:text-DBrowColor-400"
            data-te-toggle="pill"
            data-te-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
            >BABY PHOTO
          </a>
        </li>
        <li role="presentation" class="w-32 text-center">
          <a
            href="#tabs-messages"
            class="my-2 font-lato text-base font-bold text-pinkColor block border-b-2 border-t-0 border-transparent hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-DBrowColor data-[te-nav-active]:text-DBrowColor dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-DBrowColor-400 dark:data-[te-nav-active]:text-DBrowColor-400"
            data-te-toggle="pill"
            data-te-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
            >COUPLE
          </a>
        </li>
        <li role="presentation" class="w-32 text-center">
          <a
            href="#tabs-contact"
            class="my-2 font-lato text-base font-bold text-pinkColor block border-b-2 border-t-0 border-transparent hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-DBrowColor data-[te-nav-active]:text-DBrowColor dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-DBrowColor-400 dark:data-[te-nav-active]:text-DBrowColor-400"
            data-te-toggle="pill"
            data-te-target="#tabs-contact"
            role="tab"
            aria-controls="tabs-contact"
            aria-selected="false"
            >PRE - WEDDING
          </a>
        </li>
      </ul>
      <div class="mb-6">
        <div
          class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
          data-te-tab-active>
          <div
            v-for="image in imagePsc"
            :key="image.id"
            class="mb-12 grid grid-cols-4 gap-8 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            data-te-lightbox-init>
            <div
              :id="image.id"
              :key="image.id"
              class="col-start-1 col-end-3 row-start-1 row-end-3"
              :class="{ 'col-start-3 col-end-5': image.visible }">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src1"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src2"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src3"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src4"
                alt="" />
            </div>
          </div>
          <!-- <img :src="image.src" :alt="image.alt"> -->
          <!-- </div> -->
          <button
            @click="showMoreImages(dataimagePsc, imagePsc)"
            class="block mx-auto font-lato font-semibold text-base text-BrowColor py-4 px-10 outline outline-1 outline-BrowColor rounded">
            Xem thêm
          </button>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab">
          <div
            v-for="image in imageBaby"
            :key="image.id"
            class="mb-12 grid grid-cols-4 gap-8 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            data-te-lightbox-init>
            <div
              class="col-start-1 col-end-3 row-start-1 row-end-3"
              :key="image.id"
              :class="{ 'col-start-3 col-end-5': image.visible }">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src"
                alt="" />
            </div>

            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src1"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src2"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src3"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src4"
                alt="" />
            </div>
          </div>
          <!-- <img :src="image.src" :alt="image.alt"> -->
          <!-- </div> -->
          <button
            @click="showMoreImages(dataimageBaby, imageBaby)"
            class="block mx-auto font-lato font-semibold text-base text-BrowColor py-4 px-10 outline outline-1 outline-BrowColor rounded">
            Xem thêm
          </button>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab">
          <div
            v-for="image in imageCouple"
            :key="image.id"
            class="mb-12 grid grid-cols-4 gap-8 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            data-te-lightbox-init>
            <div
              class="col-start-1 col-end-3 row-start-1 row-end-3"
              :key="image.id"
              :class="{ 'col-start-3 col-end-5': image.visible }">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src"
                alt="" />
            </div>

            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src1"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src2"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src3"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src4"
                alt="" />
            </div>
          </div>
          <!-- <img :src="image.src" :alt="image.alt"> -->
          <!-- </div> -->
          <button
            @click="showMoreImages(dataimageCouple, imageCouple)"
            class="block mx-auto font-lato font-semibold text-base text-BrowColor py-4 px-10 outline outline-1 outline-BrowColor rounded">
            Xem thêm
          </button>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-contact"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab">
          <div
            v-for="image in imagePreWed"
            :key="image.id"
            class="mb-12 grid grid-cols-4 gap-8 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            data-te-lightbox-init>
            <div
              class="col-start-1 col-end-3 row-start-1 row-end-3"
              :class="{ 'col-start-3 col-end-5': image.visible }"
              :key="image.id">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src"
                alt="" />
            </div>

            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src1"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src2"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src3"
                alt="" />
            </div>
            <div class="">
              <img
                class="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto w-full rounded"
                :src="image.src4"
                alt="" />
            </div>
          </div>
          <!-- <img :src="image.src" :alt="image.alt"> -->
          <!-- </div> -->
          <button
            @click="showMoreImages(dataimagePreWed, imagePreWed)"
            class="block mx-auto font-lato font-semibold text-base text-BrowColor py-4 px-10 outline outline-1 outline-BrowColor rounded">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { Tab, Lightbox, initTE } from 'tw-elements';
  export default {
    data() {
      return {
        index: false,
        images: [
          {
            id: 1,
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
            alt: 'Mô tả ảnh đã load trước đó',
            visible: false,
          },
        ],
        imagePsc: [
          {
            id: 1,
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
            alt: 'Mô tả ảnh đã load trước đó',
            visible: false,
          },
        ],
        imageBaby: [
          {
            id: 1,
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
            alt: 'Mô tả ảnh đã load trước đó',
            visible: false,
          },
        ],
        imageCouple: [
          {
            id: 1,
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
            alt: 'Mô tả ảnh đã load trước đó',
            visible: false,
          },
        ],
        imagePreWed: [
          {
            id: 1,
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
            alt: 'Mô tả ảnh đã load trước đó',
            visible: false,
          },
        ],
        dataimagePsc: [
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
        ],
        dataimageBaby: [
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
        ],
        dataimageCouple: [
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
        ],
        dataimagePreWed: [
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
          {
            src: '/src/views/Client/home/images/imgalbum1.jpg',
            src1: '/src/views/Client/home/images/imgalbum2.png',
            src2: '/src/views/Client/home/images/imgalbum3.png',
            src3: '/src/views/Client/home/images/imgalbum4.png',
            src4: '/src/views/Client/home/images/imgalbum5.png',
          },
        ],
      };
    },
    methods: {
      async showMoreImages(data, img) {
        this.index = !this.index;
        // Mô phỏng việc tải thêm ảnh từ server
        // Thực tế, bạn có thể thực hiện một yêu cầu API để lấy danh sách ảnh mới
        // và sau đó thêm chúng vào mảng images với visible: false
        // Ví dụ thêm một ảnh mới (đã được tải từ server) vào mảng images
        const newImage = {
          id: img.length + 1,
          src: data[img.length - 1].src,
          src1: data[img.length - 1].src1,
          src2: data[img.length - 1].src2,
          src3: data[img.length - 1].src3,
          src4: data[img.length - 1].src4,
          alt: 'Mô tả ảnh mới',
          visible: this.index,
        };
        // Thêm ảnh mới vào mảng images
        img.push(newImage);
        // Hiển thị ảnh mới
        console.log(newImage);
      },
    },
    mounted() {
      initTE({ Tab, Lightbox });
    },
  };
</script>

<style scoped></style>
