<template>
  <Navbar />
  <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
    <div class="text-center py-10 px-4 sm:px-6 lg:px-8 mt-12">
      <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
      <h1 class="block text-2xl font-bold text-white"></h1>
      <p class="mt-3 text-gray-600 dark:text-gray-400">お探しのページが見つかりませんでした。</p>
      <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
          <Icon icon="tabler:home" width="18" height="18"/>
          ホームに戻る
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>