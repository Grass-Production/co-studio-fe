<template>
  <div class="px-28 pt-24 pb-[120px] bg-GutterColor">
    <div class="text-center mb-9">
      <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">PHẢN HỒI TỪ KHÁCH HÀNG</h1>
      <h4 class="font-lato text-xl font-light text-BrowColor">100% thực hiện bởi Cỏ Studio</h4>
    </div>

    <div class="parent bg-WhiteColor py-[3.75rem]">
      <div class="div1 h-full">
        <div class="flex relative gap-8 items-end ml-auto mr-auto w-[75%]">
          <div class="absolute top-[5%] left-[-10%] w-[55%]">
            <h1 class="font-spectral text-[2rem] font-semibold text-pinkColor">Mọi người nói gì về chúng tôi</h1>
            <p class="font-lato text-base font-light text-BrowColor">
              Đám cưới là khoảnh khắc đẹp, đánh dấu sự bắt đầu một hành trình. Cỏ Studio tập trung vào cảm xúc, sự tự
              nhiên và cất giữ lại những khoảng khắc đẹp.
            </p>
          </div>
          <div
            class="hover:outline-8 hover:outline hover:rounded-[10px] hover:outline-pinkColor"
            @mouseenter="FeedBack('“ Chụp hình có tâm “')">
            <img class="rounded-[10px]" src="../images/imgbannerleft.jpg" alt="" />
          </div>
          <div
            class="hover:outline-8 hover:outline hover:rounded-[10px] hover:outline-pinkColor mb-[8%]"
            @mouseenter="FeedBack('“ Chụp hình hình đẹp quá “')">
            <img class="rounded-[10px]" src="../images/imgbannerleft.jpg" alt="" />
          </div>
          <div
            class="hover:outline-8 hover:outline hover:rounded-[10px] hover:outline-pinkColor mb-[16%]"
            @mouseenter="FeedBack('“ Nhân viên dễ thương “')">
            <img class="rounded-[10px]" src="../images/imgbannerleft.jpg" alt="" />
          </div>
          <div
            class="hover:outline-8 hover:outline hover:rounded-[10px] hover:outline-pinkColor mb-[24%]"
            @mouseenter="FeedBack('“ Chụp hình có tâm, make-up rất đẹp,\nđội ngũ nhân viên chu đáo. “')">
            <img class="rounded-[10px]" src="../images/imgbannerleft.jpg" alt="" />
          </div>
          <div v-if="show" class="toast bg-lightpinkColor bottom-[0%] right-[-10%] absolute w-2/4 rounded-2xl">
            <div class="flex gap-3 items-center pl-6 pt-6 pb-3">
              <div class="w-16 h-16 imgcard">
                <img class="" src="../images/imgbannerleft.jpg" alt="" />
              </div>
              <div class="w-4/5">
                <h1 class="font-lato text-[1.25rem] font-light text-DBrowColor">{{ text }}</h1>
              </div>
            </div>
            <div class="h-2 w-full rounded-2xl bg-pinkColor"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        text: '',
      };
    },
    methods: {
      FeedBack(text) {
        this.text = text;
        this.show = true;
      },
    },
  };
</script>

<style scoped>
  .toast {
    box-shadow: 0px 20px 60px 0px rgba(0, 0, 0, 0.12);
  }

  .imgcard {
    clip-path: circle(50% at 50% 50%);
  }
</style>
