<template>
  <div class="markdown">
    <h3 class="icon" @click="addHashToUrlAndScroll">
      <slot/>
    </h3>
  </div>
</template>

<script setup>
const addHashToUrlAndScroll = (event) => {
  const hash = event.target.textContent.trim().toLowerCase().replace(/\s+/g, '-');
  const newUrl = `${window.location.pathname}#${hash}`;
  window.history.pushState({}, '', newUrl);
  scrollToElementWithOffset(hash, -100); // Adjust the scroll position slightly upwards
};

onMounted(() => {
  const { hash } = window.location;
  if (hash) {
    scrollToElementWithOffset(hash.slice(1), -100); // Adjust the scroll position slightly upwards
  }
});

function scrollToElementWithOffset(id, offset) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition + offset, behavior: 'smooth' });
  }
}
</script>

<style scoped lang="css">
.markdown h3.icon {
  @apply relative cursor-pointer;
}

.markdown h3.icon::before {
  content: '';
  @apply absolute opacity-0 h-4 -ml-5 w-10 bg-no-repeat;
  background-image: url('~/assets/icons/link.svg');
  margin-top: 6px;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer; /* Make the background image clickable */
}

/* Refactored code to change SVG color to white in dark mode */
.dark .markdown h3.icon::before {
  background-image: url('~/assets/icons/link light.svg');
}

.markdown:hover h3.icon::before {
  @apply opacity-100;
}

</style>