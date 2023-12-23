<template>
  <Navbar/>
  <!-- Hero -->
  <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent -mb-12">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">

      <!-- Title -->
      <div class="max-w-3xl text-center mx-auto">
        <h1 class="block font-medium text-gray-800 dark:text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl code">
          Docuxios
        </h1>
      </div>
      <!-- End Title -->

      <div class="max-w-3xl text-center mx-auto flex items-center justify-center space-x-2">
        <p class="text-lg text-black dark:text-gray-400"><span class="text-green-400 font-bold"> Nuxt3🚀</span>で作成されたオンラインドキュメントビューア</p>
      </div>

      <!-- Buttons -->
      <div class="mt-12 gap-3 flex justify-center">
        <button class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
          @click="section">
          Get started
          <svg class="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-600 to-zinc-600 hover:from-zinc-600 hover:to-gray-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/Crysta1221/docuxios" target="_blank"><Icon icon="mdi:github" width="20" height="20"/>Github</a>
      </div>
      <!-- End Buttons -->
    </div>
  </div>
  <!-- End Hero -->
  <!-- Icon Blocks -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <Icon class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" icon="tabler:brand-speedtest"/>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">高速で軽量</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">サーバーサイドレンダリングによる素早い表示が可能</p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <Icon class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" icon="tabler:list-search"/>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">高度な検索機能</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Algolia Searchによるインライン検索をサポート</p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <Icon class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" icon="tabler:adjustments"/>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">自由自在</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">あなた好みのDocsをいつでもどこでも好きなときに</p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <Icon class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" icon="tabler:download"/>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">オフライン対応</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">PWAやPDF形式でのダウンロードを正式にサポート</p>
        </div>
      </div>
      <!-- End Icon Block -->
    </div>
  </div>
  <!-- End Icon Blocks -->
  <a id="docs-select" class="flex justify-center text-3xl mt-24 text-gray-800 dark:text-white code">Docsを選びましょう</a>
  <!-- Card Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      <!-- Dynamic Cards -->
      <router-link v-for="card in cards" :key="card.name" :to="card.link"
        class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <Icon class="h-[2.2rem] w-[2.2rem]" :icon="card.icon"/>
              <div class="ms-3">
                <h3 class="code group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  {{ card.name }}
                </h3>
              </div>
            </div>
            <div class="ps-3">
              <Icon class="flex-shrink-0 w-4 h-4 dark:text-white" icon="ep:arrow-right-bold"/>
            </div>
          </div>
        </div>
      </router-link>
      <!-- End Dynamic Cards -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Section -->
</template>

<script setup>
import { Icon } from '@iconify/vue';
import menuItems from '~/assets/content/contents.json';

// Sort the menuItems array alphabetically by name
const cards = menuItems.sort((a, b) => a.name.localeCompare(b.name));

const section = () => {
      const Section = document.getElementById('docs-select');
      Section.scrollIntoView({ behavior: 'smooth' });
}
</script>