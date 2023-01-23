<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { onMounted, ref } from "vue";
import MovieSlider from "./MovieSlider.vue";

const all = ref<Movie[]>([]);
const movies = ref<Movie[]>([]);
const tvShows = ref<Movie[]>([]);

onMounted(() => {
  getTrendingAll();
  getTrendingMovies();
  getTrendingTVShows();
});

const getTrendingAll = async () => {
  const { results } = await Movies.getTrendingMovies();
  all.value = results;
};

const getTrendingMovies = async () => {
  const { results } = await Movies.getTrendingMovies("movie");
  movies.value = results;
};

const getTrendingTVShows = async () => {
  const { results } = await Movies.getTrendingMovies("tv");
  tvShows.value = results;
};
</script>
<template>
  <div>
    <MovieSlider :movies="all" type="poster" title="Trending" />
    <MovieSlider :movies="movies" type="wide" title="Movies" />
    <MovieSlider :movies="tvShows" type="wide" title="TV Shows" />
  </div>
</template>
