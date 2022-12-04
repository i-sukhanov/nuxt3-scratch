<template>
  <div class="users">
    <div class="users--list">
      <user-item v-for="user in usersInfo.data" :key="user.id" :user="user" />
    </div>
    <PaginationPanel
      class="users--pagination"
      :pages="usersInfo.total_pages"
      :currentPage="usersInfo.page"
      @paginate="paginate"
    />
  </div>
</template>

<script setup lang="ts">
import { TUserRequest } from '~~/types/user';

const config = useAppConfig();
const page = useState('page', () => 1);

const { data: usersInfo, refresh } = await useFetch<TUserRequest>(
  () => `users?page=${page.value}`,
  {
    baseURL: config.API_URL,
  }
);

console.log(usersInfo.value);

const paginate = (pageNum: number) => {
  page.value = pageNum;
  refresh();
};
</script>
