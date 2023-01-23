<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  console.log(route.params.id);
  console.log(route.query.type);
});
</script>
<template>
  <div>Movie View</div>
</template>
