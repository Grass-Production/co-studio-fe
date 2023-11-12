<template>
  <main>
    <div class="bg-GutterColor px-28 pt-8 pb-16">
      <div class="text-center mb-9">
        <h1 class="font-spectral text-4xl font-bold text-DBrowColor">DỊCH VỤ</h1>
        <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
      </div>
      <div class="flex justify-between" style="height: 65vh">
        <div class="h-full backgroundimg">
          <div class="px-10 pt-14 pb-10 flex flex-col justify-between h-full">
            <div class="">
              <div class="flex justify-between mb-5">
                <h4 class="font-lato text-xl font-bold text-DBrowColor">01</h4>
                <button
                  class="font-lato text-base font-semibold text-DBrowColor px-5 py-2 border border-DBrowColor rounded-2xl">
                  Đăt ngay
                </button>
              </div>
              <h1 class="font-lato text-3xl font-bold text-DBrowColor">
                Chụp ảnh & <br />
                phóng sự
              </h1>
            </div>
            <arrowright class="mx-auto" />
          </div>
        </div>
        <div class="h-full backgroundimg2">
          <div class="px-10 pt-14 pb-10 flex flex-col justify-between h-full">
            <div class="">
              <div class="flex justify-between mb-5">
                <h4 class="font-lato text-xl font-bold text-DBrowColor">02</h4>
                <button
                  class="font-lato text-base font-semibold text-DBrowColor px-5 py-2 border border-DBrowColor rounded-2xl">
                  Đăt ngay
                </button>
              </div>
              <h1 class="font-lato text-3xl font-bold text-DBrowColor">
                Trang điểm <br />
                cô dâu
              </h1>
            </div>
            <arrowright class="mx-auto" />
          </div>
        </div>
        <div class="h-full backgroundimg3">
          <div class="px-10 pt-14 pb-10 flex flex-col justify-between h-full">
            <div class="">
              <div class="flex justify-between mb-5">
                <h4 class="font-lato text-xl font-bold text-DBrowColor">01</h4>
                <button
                  class="font-lato text-base font-semibold text-DBrowColor px-5 py-2 border border-DBrowColor rounded-2xl">
                  Đăt ngay
                </button>
              </div>
              <h1 class="font-lato text-3xl font-bold text-DBrowColor">
                Concept <br />
                chụp
              </h1>
            </div>
            <arrowright class="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import arrowright from '@public/icon/arrowright.svg.vue';
  export default {
    components: { arrowright },
  };
</script>

<style scoped>
  .backgroundimg {
    background: url(../images/imgservice.jpg) center/cover no-repeat;
    border-radius: 80px;
    /* height: 65vh; */
    width: 30%;
    /* width: 384px;
    height: 484px; */
  }

  .backgroundimg2 {
    background: url(../images/imgservice2.jpg) center/cover no-repeat;
    border-radius: 80px;
    /* height: 65vh; */
    width: 30%;
    /* width: 384px;
    height: 484px; */
  }

  .backgroundimg3 {
    background: url(../images/imgservice3.jpg) center/cover no-repeat;
    border-radius: 80px;
    /* height: 65vh; */
    width: 30%;
    /* width: 384px;
    height: 484px; */
  }
</style>
