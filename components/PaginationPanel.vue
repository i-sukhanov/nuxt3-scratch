<template>
  <div class="pagination_panel">
    <button
      v-for="page in pages"
      :key="page"
      class="pagination_panel--button"
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

<style scoped>
.pagination_panel {
  display: flex;
  gap: 8px;
  margin-top: 32px;
}

.pagination_panel--button {
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
}
.pagination_panel--button:disabled {
  cursor: default;
}
</style>
