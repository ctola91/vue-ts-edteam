<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { reactive, computed, ref, onMounted } from 'vue';

const movie: Movie = reactive({
  id: 1,
  title: "First Movie",
  overview: "Hola EDteam",
  media_type: "movie",
  vote_average: 3.5,
});

const all = ref<Movie[]>([]);

onMounted(() => {
  getTrendingMovies();
  console.log(all);
})

const getTrendingMovies = async () => {
  const { results } = await Movies.getTrendingMovies();
  all.value = results;
};

const id = computed(() => movie.id + "");
</script>
<template>
  <div :id="id">
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.overview }}</p>
    <p>{{ movie.media_type }}</p>
    <p>Votes: {{ movie.vote_average }}</p>
  </div>
</template>
