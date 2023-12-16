<template>
  <Navbar/>
  <!-- Hero -->
  <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent -mb-12">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">

      <!-- Title -->
      <div class="max-w-3xl text-center mx-auto">
        <h1 class="block font-medium text-gray-800 dark:text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Create your own documentation
        </h1>
      </div>
      <!-- End Title -->

      <div class="max-w-3xl text-center mx-auto flex items-center justify-center space-x-2">
        <p class="text-lg text-black dark:text-gray-400">Modern and highly functional documentation generator using <span class="text-green-400 font-bold">Nuxt3</span></p>
        <Icon icon="tabler:rocket" width="20" height="20" class="text-green-400"/>
      </div>

      <!-- Buttons -->
      <div class="mt-12 gap-3 flex justify-center">
        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg class="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-600 to-zinc-600 hover:from-zinc-600 hover:to-gray-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="#"><Icon icon="mdi:github" width="20" height="20"/>Github</a>
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
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">High speed</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Faster Docs with static HTML generation using Nuxt3</p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <svg class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <svg class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div>
        <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
          <svg class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
        </div>
        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
      <!-- End Icon Block -->
    </div>
  </div>
  <!-- End Icon Blocks -->
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>