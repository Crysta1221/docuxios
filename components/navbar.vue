<template>
  <!-- ========== HEADER ========== -->
  <header class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#1b1b1f] text-sm py-3 sm:py-0 text-white">
    <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex items-center text-xl font-semibold text-white" href="/" aria-label="Brand">
          <img src="/favicon.png" width="32" height="32" class="mr-2" alt="Docuxios">
          <span class="text-white code">Docuxios</span>
        </a>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
          <router-link class="font-medium text-white/[.8] hover:text-white sm:py-6 code" to="/" exact-active-class="active">Home</router-link>
          <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
            <button type="button" class="flex items-center w-full text-white/[.8] hover:text-white font-medium code">
              Docs
              <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
              <a v-for="item in sortedMenuItems" :key="item.name" class="code flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" :href="item.link">
                <Icon :icon="item.icon" :width="item.width" :height="item.height" />
                {{ item.name }}
              </a>
            </div>
          </div>
          <router-link class="font-medium text-white/[.8] hover:text-white sm:py-6 code" to="/about" exact-active-class="active">About</router-link>
          <div class="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.4] sm:my-6 sm:ps-6" style="height:30px;">
            <div class="mt-8 flex items-center w-full -mr-6 justify-center sm:hidden bg-[#1b1b1f]  border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:border-gray-700 dark:text-gray-400 ">
              <a class="code">Appearance</a>
              <div class="hs-dropdown" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
                <button type="button" class="hs-dropdown-toggle hs-dark-mode group flex items-center text-white/[.8] hover:text-white font-medium ml-4 md:-ml-1 md:-mr-2 border border-gray-200 dark:border-gray-700 shadow-sm p-2 rounded-md">
                  <Icon class="block" :icon="$colorMode.preference === 'system' ? 'tabler:device-desktop' : ($colorMode.preference === 'light' ? 'tabler:sun-filled' : 'tabler:moon-filled')" width="20" height="20"/>
                </button>
                <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
                  <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" @click="$colorMode.preference = 'system'">
                    <Icon class="block w-4 h-4" icon="tabler:device-desktop" width="28" height="28"/>
                    System
                  </button>
                  <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" @click="$colorMode.preference = 'light'">
                    <Icon class="block w-4 h-4" icon="tabler:sun-filled" width="28" height="28"/>
                    Light
                  </button>
                  <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" @click="$colorMode.preference = 'dark'">
                    <Icon class="w-4 h-4" icon="tabler:moon-filled" width="24" height="24"/>
                    Dark
                  </button>
                </div>
              </div>
            </div>
            <div class="hs-dropdown invisible sm:visible" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
              <button type="button" class="hs-dropdown-toggle hs-dark-mode group flex items-center text-white/[.8] hover:text-white font-medium  md:-ml-1 md:-mr-2">
                <Icon class="block" :icon="$colorMode.preference === 'system' ? 'tabler:device-desktop' : ($colorMode.preference === 'light' ? 'tabler:sun-filled' : 'tabler:moon-filled')" width="20" height="20"/>
              </button>
              <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
                <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" @click="$colorMode.preference = 'system'">
                  <Icon class="block w-4 h-4" icon="tabler:device-desktop" width="28" height="28"/>
                  System
                </button>
                <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" @click="$colorMode.preference = 'light'">
                  <Icon class="block w-4 h-4" icon="tabler:sun-filled" width="28" height="28"/>
                  Light
                </button>
                <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" @click="$colorMode.preference = 'dark'">
                  <Icon class="w-4 h-4" icon="tabler:moon-filled" width="24" height="24"/>
                  Dark
                </button>
              </div>
            </div>
          </div>
          <div class="sm:hidden mt-4"></div>
          <div class="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.4] sm:my-6 sm:ps-6" style="height:30px;">
            <a  href="https://github.com/Crysta1221" target="_blank" class="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:my-6 sm:ps-6 sm:-ml-7">
              <Icon icon="bi:github" height="20" width="20"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->
</template>

<script setup>
import { Icon } from '@iconify/vue';
import menuItems from '~/assets/content/contents.json';

// Sort the menuItems array alphabetically by name
const sortedMenuItems = menuItems.sort((a, b) => a.name.localeCompare(b.name));

</script>