<template>
  <nuxt-link class="user" :to="`/users/${user.id}`">
    <div
      class="user--avatar"
      :style="{ backgroundImage: `url(${user.avatar})` }"
    ></div>
    <div class="user--info">
      <div class="user--name">{{ user.first_name }} {{ user.last_name }}</div>
    </div>
  </nuxt-link>
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

<style scoped>
.user {
  display: flex;
  text-decoration: none;
  color: #121212;
  align-items: center;
}

.user--avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 16px;
}
</style>
