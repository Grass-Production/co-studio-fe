<template>
  <main>
    <div
      class="absolute -z-10 w-full top-0 h-[100vh] bg-[url('src/views/Client/Album/images/bgbanner.jpg')] bg-no-repeat bg-center bg-cover"></div>
    <div class="px-28">
      <div class="pt-4 grid grid-cols-3 h-[40vh]">
        <div
          class="w-full bg-[url('src/views/Client/Album/images/imgbanner.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div class="flex justify-center items-center bg-white">
          <div class=" ">
            <h2 class="mb-1 font-lato text-base font-medium text-BrowColor tracking-[0.64em]">WEDDING</h2>
            <h1 class="mb-9 font-lato text-4xl font-semibold text-DBrowColor">Save the date</h1>
            <p class="font-lato text-base font-light text-BrowColor">
              Đám cưới là khoảnh khắc đẹp <br />
              đánh dấu sự bắt đầu một hành <br />
              trình giữa chúng ta.
            </p>
          </div>
        </div>
        <div
          class="w-full bg-[url('src/views/Client/Album/images/imgbanner2.jpg')] bg-no-repeat bg-center bg-cover"></div>
      </div>
      <div class="mb-[23vh] flex justify-between items-center bg-GutterColor px-12 py-10">
        <div class="">
          <h1 class="font-spectral text-[2rem] font-semibold text-DBrowColor">ALBUM HÌNH ẢNH</h1>
          <h4 class="font-lato text-xl font-light text-DBrowColor">By Cỏ Studio Team</h4>
        </div>
        <div class="">
          <router-link to="/#contact">
            <button
              class="rounded font-lato text-xl font-semibold text-lightpinkColor px-14 py-[0.875rem] bg-DBrowColor">
              Liên hệ
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script></script>

<style scoped></style>
