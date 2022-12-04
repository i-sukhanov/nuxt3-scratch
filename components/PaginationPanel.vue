<template>
  <div>
    <button
      v-for="page in pages"
      :key="page"
      :disabled="page === currentPage"
      @click="emit('paginate', page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const emit = defineEmits(['paginate']);

defineProps({
  pages: {
    type: Number as PropType<number>,
  },
  currentPage: {
    type: Number as PropType<number>,
  },
});
</script>
