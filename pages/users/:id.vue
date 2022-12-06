<template>
  <div class="user_page">
    <img :src="userInfo.data.avatar" :alt="userInfo.data.first_name" />
    <div class="user_page--info">
      <h1 class="user_page--name">
        {{ userInfo.data.first_name }} {{ userInfo.data.last_name }}
      </h1>

      <p class="user_page--email">{{ userInfo.data.email }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TUserRequest } from '~~/types/user';

const route = useRoute();
const config = useAppConfig();

const { data: userInfo } = await useFetch<TUserRequest>(
  () => `users/${route.params.id}`,
  {
    baseURL: config.API_URL,
  }
);
</script>

<style scoped>
.user_page {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}
</style>
