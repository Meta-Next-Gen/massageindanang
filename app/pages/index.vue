<template>
  <header class="absolute w-full z-50 bg-transparent py-4">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="block">
        <img src="/images/logo-black.png" alt="Massage Đà Nẵng Logo" class="h-12">
      </a>
      <!-- Nút thay đổi ngôn ngữ với biểu tượng lá cờ -->
      <div class="relative">
        <button @click="state.show = !state.show">
          <img :src="flag?.icon" :alt="flag?.code" class="inline">
        </button>
        <div class="absolute right-0 bg-white rounded-lg shadow-lg flex space-x-2 px-2" :class="{ 'hidden': !state.show }">
          <template v-for="flag in flags">
            <NuxtLink :to="flag.code" class=" w-8 h-8 ">
              <img :src="flag.icon" :alt="flag.code" class="inline">
            </NuxtLink>
          </template>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <!-- Hero Section -->
    <!-- Phần Hero đã được cập nhật thành bố cục 2 cột -->
    <section id="hero" class="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <!-- Đã loại bỏ lớp phủ gradient nền, nền giờ là màu trắng -->
      <div class="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Cột trái: Tiêu đề, giới thiệu và nút đặt lịch -->
        <div class="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h1 class="text-4xl md:text-9xl font-extrabold leading-tight mb-6 text-primary">
            Massage<br /> Tại Nhà
          </h1>
          <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-700">
            Trải nghiệm sự thư giãn tuyệt đối với dịch vụ massage chuyên nghiệp ngay tại ngôi nhà của bạn.
          </p>
          <a href="#footer"
            class="bg-primary text-white font-bold py-5 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Đặt Lịch Ngay
          </a>
        </div>
        <!-- Cột phải: Hình ảnh -->
        <div class="md:w-1/2 flex justify-center md:justify-end animate-fade-in-up delay-200">
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
                <span class="font-semibold text-primary">370K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>90 phút</span>
                <span class="font-semibold text-primary">500K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>120 phút</span>
                <span class="font-semibold text-primary">650K</span>
              </li>
            </ul>
          </div>
          <!-- Cạo gió/Giác hơi Pricing -->
          <div class="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <h3 class="text-3xl font-bold text-primary mb-6 text-center">Cạo gió/Giác hơi</h3>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>60 phút</span>
                <span class="font-semibold text-primary">450K</span>
              </li>
              <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span>90 phút</span>
                <span class="font-semibold text-primary">550K</span>
              </li>
            </ul>
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
  <footer id="footer" class="bg-gray-800 text-white py-10">
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
        <div class="text-center md:text-right md:w-1/2">
          <p class="text-lg font-semibold mb-4">Kết nối với chúng tôi</p>
          <div class="flex justify-center md:justify-end space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
                <path
                  d="M12.315 2.417a.75.75 0 00-1.03 0L1.716 11.47a.75.75 0 00.515 1.283h1.967A6.75 6.75 0 0012 18.75a6.75 6.75 0 007.792-7.057h1.967a.75.75 0 00.515-1.283L12.315 2.417zM12 21.75a9.75 9.75 0 110-19.5 9.75 9.75 0 010 19.5z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- Copyright text (original position, now removed or hidden by the above change) -->
      <!-- <p class="text-center mt-4 pt-4 border-t border-gray-700">&copy; 2024 Massage Tại Nhà Đà Nẵng. Mọi quyền được bảo lưu.</p> -->
    </div>
  </footer>

  <!-- Floating Action Button (FAB) -->
  <div class="fixed bottom-8 right-8 z-50">
    <!-- Main FAB -->
    <button id="main-fab"
      class="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-110">
      <!-- Icon for main FAB, e.g., a plus sign or a chat icon -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.455 3.62 2.895 7.5 2.895s7.5-1.44 7.5-2.895m-9.75-3h9m-9 3H12m-9.75-1.51c0 1.455 3.62 2.895 7.5 2.895s7.5-1.44 7.5-2.895" />
      </svg>
    </button>

    <!-- Child buttons container with transition effects -->
    <div id="fab-child-buttons" class="absolute bottom-full right-0 mb-4 space-y-3 
                    hidden transform scale-0 opacity-0 transition-all duration-300 ease-in-out origin-bottom-right">
      <!-- Social Media Button 1 (e.g., Facebook) -->
      <a href="https://facebook.com/yourpage" target="_blank"
        class="block bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110">
        <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd" />
        </svg>
      </a>
      <!-- Social Media Button 2 (e.g., Zalo - using a generic chat icon as Zalo doesn't have a standard SVG in common libraries) -->
      <a href="https://zalo.me/yourid" target="_blank"
        class="block bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H16.5m3.75 7.375V9.375c0-.621-.504-1.125-1.125-1.125h-4.125V6.75a9.75 9.75 0 0 0-9.75 9.75v1.562c0 .288.234.522.522.522H6.75a.75.75 0 0 0 .75-.75V18a6 6 0 0 1 6-6h.375A1.125 1.125 0 0 1 19.5 13.125v4.125c0 .621.504 1.125 1.125 1.125h1.372c.516 0 .966-.351 1.091-.852l1.106-4.423a2.25 2.25 0 0 0-.828-1.92L19.5 8.25Z" />
        </svg>
      </a>
      <!-- Social Media Button 3 (e.g., Phone Call) -->
      <a href="tel:+84905xxxxxx"
        class="block bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a2.25 2.25 0 0 1-1.92-.828l-1.747-1.747a1.5 1.5 0 0 0-1.06-.44H9.75a1.5 1.5 0 0 1-1.06-.44L6.92 10.74A2.25 2.25 0 0 1 6.09 8.817L5 4.5a2.25 2.25 0 0 0-2.25-2.25Z" />
        </svg>
      </a>
    </div>
  </div>

</template>

<script lang="ts" setup>

const state = reactive({
  show: false
})

const { path } = useRoute()
const router = useRouter()

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
