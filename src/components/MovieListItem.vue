<script setup lang="ts">
import Movies from "@/services/Movies";
import type { Movie } from "@/types/Movie";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const url = Movies.imageURL;

interface Props {
  movie: Movie;
  type: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "wide",
});

const image = computed<string | undefined>(() => {
  if (props.type === "poster") {
    return props.movie.poster_path;
  }
  if (props.type === "person") {
    return props.movie.profile_path;
  }
  return props.movie.backdrop_path;
});
</script>
<template>
  <RouterLink
    :to="`/movies/${movie.id}?type=${movie.media_type}`"
    class="movie-item"
    v-if="movie !== undefined"
  >
    <img
      :src="`${url}/${image}`"
      :alt="movie.title ? movie.title : movie.name ? movie.name : ''"
    />
  </RouterLink>
</template>
<style scoped>
.swiper-slide {
  @apply max-w-xs;
}
</style>
