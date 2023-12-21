<template>
  <div class="markdown" ref="link">
    <a class="icon" @click="copy">
      <slot/>
    </a> 
  </div>
</template>

<script setup>
const copy = (event) => {
  event.preventDefault();
  let anchorText = event.target.textContent;
  anchorText = anchorText.replace(/\s|%20/g, '-'); // Replace spaces or %20 with hyphens
  if (/[A-Z]/.test(anchorText)) {
    anchorText = anchorText.toLowerCase();
  }
  const baseUrl = window.location.href.split('#')[0];
  const fullURL = `${baseUrl}#${anchorText}`;
  window.history.pushState({}, '', fullURL); // Change the current URL
  scrollToElementWithOffset(anchorText, -100);
}

function scrollToElementWithOffset(id, offset) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition + offset, behavior: 'smooth' });
  }
}

onMounted(() => {
  if (window.location.hash) {
    const id = window.location.hash.replace('#', '');
    scrollToElementWithOffset(id, -100);
  }
});
</script>

<style scoped lang="css">
.markdown {
  margin-top: 24px;
  margin-bottom: 16px;
  line-height: 1.25;
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1.25em;
}
.markdown a.icon {
  @apply relative cursor-pointer;
}

.markdown a.icon::before {
  content: '';
  @apply absolute opacity-0 h-4 -ml-5 w-10 bg-no-repeat;
  background-image: url('~/assets/icons/link.svg');
  margin-top: 6px;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer; /* Make the background image clickable */
}

/* Refactored code to change SVG color to white in dark mode */
.dark .markdown a.icon::before {
  background-image: url('~/assets/icons/link light.svg');
}

.markdown:hover a.icon::before {
  @apply opacity-100;
}

</style>
