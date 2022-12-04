<template>
  <div>
    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { TUserCollectionItem, TUserRequest } from '~~/types/user';

const config = useAppConfig();

const users = useState<TUserCollectionItem[]>('users', () => []);
const page = useState('page', () => 1);

const { data } = await useFetch<TUserRequest>(
  () => `users?page=${page.value}`,
  {
    baseURL: config.API_URL,
  }
);

users.value = data.value.data;
</script>
