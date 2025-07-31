<template>
  <header class="py-4">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="block">
        <img src="/images/logo-black.png" alt="Massage Đà Nẵng Logo" class="h-12">
      </a>
      <!-- Nút thay đổi ngôn ngữ với biểu tượng lá cờ -->
      <div class="relative">
        <button @click="state.showLanguage = !state.showLanguage">
          <img :src="flag?.icon" :alt="flag?.code" class="inline">
        </button>
        <Transition enter-active-class="animate-fade-left" leave-active-class="animate-fade-left animate-reverse">
          <div v-if="state.showLanguage" class="absolute right-0 bg-white rounded-lg shadow-lg flex space-x-2 px-2">
            <template v-for="flag in flags">
              <NuxtLink :to="flag.code" class=" w-8 h-8 ">
                <img :src="flag.icon" :alt="flag.code" class="inline">
              </NuxtLink>
            </template>
          </div>
        </Transition>
      </div>
    </nav>
  </header>

  <main>
    <!-- Hero Section -->
    <!-- Phần Hero đã được cập nhật thành bố cục 2 cột -->
    <section id="hero" class="md:h-screen flex items-center justify-center ">
      <!-- Đã loại bỏ lớp phủ gradient nền, nền giờ là màu trắng -->
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Cột trái: Tiêu đề, giới thiệu và nút đặt lịch -->
        <div class="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h1 class="text-4xl md:text-9xl font-extrabold leading-tight mb-6 text-primary">
            Massage <span class="inline md:block">Tại Nhà</span>
          </h1>
          <p class="text-lg md:text-xl mb-16 max-w-2xl mx-auto md:mx-0 text-gray-700">
            Trải nghiệm sự thư giãn tuyệt đối với dịch vụ massage chuyên nghiệp ngay tại ngôi nhà của bạn.
          </p>
          <a href="#footer"
            class="bg-primary text-white font-bold py-5 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Đặt Lịch Ngay
          </a>
        </div>
        <!-- Cột phải: Hình ảnh -->
        <div class="md:w-1/2 order-first md:order-last flex justify-center md:justify-end animate-fade-in-up delay-200">
          <img src="/images/banner.png" alt="Hình ảnh Massage"
            class="rounded-3xl shadow-2xl max-w-full h-auto object-cover">
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary mb-12">Dịch Vụ Của Chúng Tôi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div class="text-primary mb-4 text-5xl text-center">
              <!-- Placeholder SVG Icon for Massage -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Massage Thư Giãn Toàn Thân
            </h3>
            <p class="text-gray-700 text-center">Giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại
              cảm giác thư thái sâu sắc.</p>
          </div>
          <!-- Service Card 2 -->
          <div
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div class="text-primary mb-4 text-5xl text-center">
              <!-- Placeholder SVG Icon for Hot Stone -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M15 6l-3-3-3 3M15 18l-3 3-3-3" />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Massage Đá Nóng</h3>
            <p class="text-gray-700 text-center">Sử dụng đá nóng giúp làm dịu cơ bắp, giảm đau nhức và tăng
              cường năng lượng.</p>
          </div>
          <!-- Service Card 3 -->
          <div
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div class="text-primary mb-4 text-5xl text-center">
              <!-- Placeholder SVG Icon for Foot Massage -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Massage Chân & Cổ Vai Gáy</h3>
            <p class="text-gray-700 text-center">Tập trung vào các huyệt đạo giúp giảm mệt mỏi, cải thiện
              giấc ngủ.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Price List Section -->
    <section id="prices" class="py-16 bg-white">
      <div class="container mx-auto px-4 my-16">
        <h2 class="text-4xl font-bold text-center text-primary mb-12">Bảng Giá Dịch Vụ</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <!-- Massage Pricing -->
          <div class="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <h3 class="text-3xl font-bold text-primary mb-6 text-center">Massage</h3>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>60 phút</span>
                <span class="font-semibold text-primary">350K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>90 phút</span>
                <span class="font-semibold text-primary">450K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>120 phút</span>
                <span class="font-semibold text-primary">550K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>Đá nóng</span>
                <span class="font-semibold text-primary">+50K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>Giác hơi</span>
                <span class="font-semibold text-primary">+50K</span>
              </li>
            </ul>
          </div>
          <!-- Cạo gió/Giác hơi Pricing -->
          <div class="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <h3 class="text-3xl font-bold text-primary mb-6 text-center">VIP Massage</h3>            
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>90 phút</span>
                <span class="font-semibold text-primary">600K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>120 phút</span>
                <span class="font-semibold text-primary">700K</span>
              </li>
            </ul>
            <p class="text-gray-500 italic">* Trị liệu, thư giãn sâu kết hợp với đá nóng và giác hơi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <img src="/images/about-us.jpg" alt="Về Chúng Tôi" class="rounded-xl shadow-lg w-full h-auto object-cover">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold text-primary mb-6">Về Chúng Tôi</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Massage Tại Nhà Đà Nẵng tự hào là đơn vị cung cấp dịch vụ massage chuyên nghiệp, uy tín hàng đầu
            tại Đà Nẵng. Với đội ngũ kỹ thuật viên giàu kinh nghiệm, được đào tạo bài bản, chúng tôi cam kết
            mang đến cho quý khách những trải nghiệm thư giãn tuyệt vời nhất, ngay tại không gian riêng tư
            và thoải mái của bạn.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Sứ mệnh của chúng tôi là giúp bạn tái tạo năng lượng, giảm căng thẳng và cải thiện sức khỏe toàn
            diện sau những giờ làm việc mệt mỏi. Hãy để chúng tôi chăm sóc bạn!
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary mb-12">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial Card 1 -->
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <p class="text-gray-700 italic mb-6">"Dịch vụ rất chuyên nghiệp và tiện lợi. Kỹ thuật viên rất
              tận tâm và tay nghề cao. Tôi cảm thấy khỏe khoắn hơn rất nhiều sau buổi massage."</p>
            <div class="flex items-center">
              <img src="https://avatar.iran.liara.run/public/1" alt="Khách Hàng 1"
                class="w-16 h-16 rounded-full mr-4 object-cover">
              <div>
                <p class="font-semibold text-gray-900">Hải Nguyễn</p>
                <p class="text-gray-600 text-sm">TP Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          <!-- Testimonial Card 2 -->
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <p class="text-gray-700 italic mb-6">"Tôi rất hài lòng với chất lượng dịch vụ. Không gian tại
              nhà thật sự thoải mái, giúp tôi thư giãn hoàn toàn. Chắc chắn sẽ sử dụng lại."</p>
            <div class="flex items-center">
              <img src="https://avatar.iran.liara.run/public/85" alt="Khách Hàng 2"
                class="w-16 h-16 rounded-full mr-4 object-cover">
              <div>
                <p class="font-semibold text-gray-900">Vân Trần</p>
                <p class="text-gray-600 text-sm">Đà Nẵng</p>
              </div>
            </div>
          </div>
          <!-- Testimonial Card 3 -->
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <p class="text-gray-700 italic mb-6">"Thật tuyệt vời khi có thể massage ngay tại nhà mà không
              cần đi đâu xa. Dịch vụ nhanh chóng, tiện lợi và rất hiệu quả. Rất khuyến khích!"</p>
            <div class="flex items-center">
              <img src="https://avatar.iran.liara.run/public/3" alt="Khách Hàng 3"
                class="w-16 h-16 rounded-full mr-4 object-cover">
              <div>
                <p class="font-semibold text-gray-900">Khánh Lê</p>
                <p class="text-gray-600 text-sm">Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer id="footer" class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <!-- Footer content wrapper for two columns -->
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
        <!-- Left Column: Logo, Contact Info and Copyright -->
        <div class="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <!-- Logo added here -->
          <a href="#" class="block mb-4">
            <img src="/images/logo-white.png" alt="Massage Đà Nẵng Logo" class="mx-auto md:mx-0 h-12">
          </a>
          <!-- Copyright text moved here -->
          <p class="text-center md:text-left mt-4 pt-4 border-t border-gray-700 md:border-t-0 md:pt-0">&copy; 2024
            Massage Tại Nhà Đà Nẵng. Mọi quyền được bảo lưu.</p>
        </div>

        <!-- Right Column: Social Media -->
        <div class="text-center md:text-right md:w-1/2 order-first md:order-last mb-10">
          <p class="text-lg font-semibold mb-4">Kết nối với chúng tôi</p>
          <div class="flex justify-center md:justify-end space-x-6">
            <a href="tel:0789489459" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/phone.svg" alt="Phone" class="h-6 w-6">
            </a>
            <a href="https://www.facebook.com/lien.phan.413325#"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/facebook.svg" alt="Facebook" class="h-6 w-6">
            </a>
            <a href="http://qr.kakao.com/talk/RKGLmzR6kDq4.b17wlsO.ClBFiw-"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/kakaotalk.svg" alt="KakaoTalk" class="h-6 w-6">
            </a>
            <a href="https://zaloapp.com/qr/p/140qbin8a5e2d?src=qr"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/zalo.svg" alt="Zalo" class="h-6 w-6">
            </a>
            <a href="https://wa.me/qr/WJTF2BIQME3EB1" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/whatsapp.svg" alt="WhatsApp" class="h-6 w-6">
            </a>
            <a href="https://u.wechat.com/kKScc93Ie77PvEZe-8hpzYI?s=2"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/wechat.svg" alt="WeChat" class="h-6 w-6">
            </a>
            <a href="https://vt.tiktok.com/ZSS8nQFrv/" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/tiktok.svg" alt="TikTok" class="h-6 w-6">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="fixed bottom-8 right-8 z-50">
    <button
      class="bg-primary text-white p-1 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-110"
      @click="state.showHelp = !state.showHelp">
      <img src="/logos/help.svg" alt="Help" class="h-12 w-12">
    </button>

    <Transition enter-active-class="animate-fade-up" leave-active-class="animate-fade-up animate-reverse">
      <div v-if="state.showHelp"
        class="absolute bottom-full right-1/2 translate-x-1/2 rounded-xl grid gap-3 mb-4 bg-white shadow-lg">
        <a href="tel:0789489459" target="_blank">
          <img src="/logos/phone.svg" alt="Phone" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://www.facebook.com/lien.phan.413325#" target="_blank">
          <img src="/logos/facebook.svg" alt="Facebook" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="http://qr.kakao.com/talk/RKGLmzR6kDq4.b17wlsO.ClBFiw-" target="_blank">
          <img src="/logos/kakaotalk.svg" alt="KakaoTalk" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://zaloapp.com/qr/p/140qbin8a5e2d?src=qr" target="_blank">
          <img src="/logos/zalo.svg" alt="Zalo" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://wa.me/qr/WJTF2BIQME3EB1" target="_blank">
          <img src="/logos/whatsapp.svg" alt="WhatsApp" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://u.wechat.com/kKScc93Ie77PvEZe-8hpzYI?s=2" target="_blank">
          <img src="/logos/wechat.svg" alt="WeChat" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://vt.tiktok.com/ZSS8nQFrv/" target="_blank">
          <img src="/logos/tiktok.svg" alt="TikTok" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
      </div>
    </Transition>
  </div>

</template>

<script lang="ts" setup>

const state = reactive({
  showLanguage: false,
  showHelp: false
})

const { path } = useRoute()

const flags = [
  { code: '', icon: '/flags/vi.svg' },
  { code: 'en', icon: '/flags/en.svg' },
  { code: 'ja', icon: '/flags/ja.svg' },
  { code: 'cn', icon: '/flags/cn.svg' },
  { code: 'kr', icon: '/flags/kr.svg' }
]

const flag = computed(() => {
  return flags.find(flag => flag.code === path) || flags[0]
})

</script>
