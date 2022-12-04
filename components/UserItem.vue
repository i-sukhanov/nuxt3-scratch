<template>
  {{ user.first_name }}
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TUserCollectionItem } from '~~/types/user';

defineProps({
  user: {
    type: Object as PropType<TUserCollectionItem>,
    required: true,
  },
});
</script>
