<template>
  <main class="bg">
    <div class="flex px-28 justify-between items-center pt-24 pb-14">
      <div class="w-1/2">
        <div class="w-[70%] mx-auto">
          <h1 class="mb-11 font-spectral text-[2rem] font-bold text-DBrowColor">LIÊN HỆ</h1>
          <h2 class="mb-2 font-lato text-xl font-bold text-DBrowColor">Địa chỉ</h2>
          <p class="mb-2 font-lato text-xl font-light text-DBrowColor">
            217/24/12 Ngô Quyền, <br />Phường 6, Tp Đà Lạt
          </p>
          <div class="mb-8 flex gap-5">
            <email />
            <h4 class="font-lato text-xl font-light text-DBrowColor">tamproduction102@gmail.com</h4>
          </div>
          <div class="mb-[52px] flex gap-5">
            <phone />
            <h4 class="text-xl font-light text-DBrowColor">0908747742 (Mr Tâm)</h4>
          </div>
          <div class="mb-8 w-[10.5rem] h-[0.5px] bg-BrowColor"></div>
          <h3 class="mb-2 font-lato text-xl font-bold text-DBrowColor">Theo dõi</h3>
          <div class="flex gap-6 items-center">
            <fb :width="32" :height="32" />
            <ig :width="32" :height="32" />
            <mess :width="32" :height="32" />
            <zalo />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div
          class="mx-auto w-[70%] pt-[2.625rem] px-[4rem] pb-[2.875rem] flex justify-center flex-col items-center bg-GutterColor">
          <div class="text-center mb-6">
            <h1 class="font-spectral text-[2rem] font-bold text-DBrowColor">TƯ VẤN</h1>
            <h4 class="font-lato text-xl font-light text-BrowColor">Để lại lời nhắn cho chúng mình tại đây!</h4>
          </div>
          <form novalidate class="flex flex-col w-full" onsubmit="return false;">
            <div class="w-full">
              <input
                pattern="^[^*#&]+$"
                v-model="inputFullName.value"
                class="peer px-5 w-full py-3 bg-lightpinkColor"
                type="text"
                placeholder="Họ Tên" />
              <p class="invisible peer-invalid:visible text-pink-600 Caption pl-3">Vui lòng cung cấp họ tên hợp lệ</p>
            </div>
            <div class="w-full">
              <input
                pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|gmail\.com\.vn)$"
                v-model="inputEmail.value"
                class="peer px-5 w-full py-3 bg-lightpinkColor"
                type="email"
                placeholder="Email" />
              <p class="invisible peer-invalid:visible text-pink-600 Caption pl-3">
                Vui lòng cung cấp một địa chỉ email hợp lệ
              </p>
            </div>
            <textarea
              class="resize-none mb-6 px-5 py-3 bg-lightpinkColor"
              name=""
              placeholder="Lời nhắn"
              id=""
              cols="5"
              rows="4"></textarea>
            <button
              type="submit"
              class="w-2/5 rounded mx-auto font-lato text-xl font-semibold text-WhiteColor py-[0.875rem] bg-DBrowColor">
              Liên hệ
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import email from '@public/icon/email.svg.vue';
  import phone from '@public/icon/phone.svg.vue';
  import fb from '@public/icon/fb.svg.vue';
  import ig from '@public/icon/ig.svg.vue';
  import mess from '@public/icon/mess.svg.vue';
  import zalo from '@public/icon/zalo.svg.vue';

  export default {
    components: { email, phone, fb, ig, mess, zalo },
    data() {
      return {
        inputFullName: {
          value: '',
        },
        inputEmail: {
          value: '',
          error: false,
        },
      };
    },
    methods: {
      CheckInputEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|gmail\.com\.vn)$/;
        if (!emailPattern.test(this.inputEmail.value)) {
          this.inputEmail.error = true;
          this.inputEmail.value = '';
        } else {
          this.inputEmail.error = false;
        }
      },
      CheckinputFullName() {
        const usernamePattern = /^[^*#&]+$/;
        if (!usernamePattern.test(this.inputFullName.value)) {
          this.inputFullName.error = true;
          this.inputFullName.value = '';
        } else {
          this.inputFullName.error = false;
        }
      },
    },
  };
</script>

<style scoped>
  .bg {
    background:
      linear-gradient(180deg, #fff 12.36%, rgba(250, 249, 247, 0) 158.99%),
      url(../images/imgbgcontact.jpg) no-repeat center/cover;
  }
</style>
