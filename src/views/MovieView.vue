<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import { useMovieStore } from "../stores/movie";
import { storeToRefs } from "pinia";
import MovieItem from "@/components/MovieItem.vue";

const store = useMovieStore();

const { movieSelected } = storeToRefs(store);

const route = useRoute();

const getContent = async () => {
  store.getMovie(Number(route.params.id), <string>route.query.type);
};

onMounted(async () => {
  await getContent();
  console.log(movieSelected);
});
</script>
<template>
  <MovieItem :movie="movieSelected" type="poster" :title="store.movieTitle" />
</template>
