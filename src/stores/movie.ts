import { defineStore } from "pinia";
import type { Movie } from "@/types/Movie";
import { ref, computed } from "vue";
import Movies from "@/services/Movies";

export const useMovieStore = defineStore("movies", () => {
  // data
  const movies = ref<Movie[]>([]);
  const movieSelected = ref<Movie>();
  // getters
  const trendingMovies = computed(() => movies.value);
  const tvShows = computed(() =>
    movies.value.filter((m) => m.media_type === "tv")
  );
  const onlyMovies = computed(() =>
    movies.value.filter((m) => m.media_type === "movie")
  );

  const movieTitle = computed(() =>
    movieSelected.value?.title
      ? movieSelected.value.title
      : movieSelected.value?.name
      ? movieSelected.value.name
      : ""
  );
  // actions
  const getMovie = async (id: number, type: string) => {
    movieSelected.value = await Movies.getSingleMovie(id, type);
  };

  const getMovies = async () => {
    movies.value = await Movies.getTrendingMovies();
  };

  return {
    movies,
    movieSelected,
    trendingMovies,
    tvShows,
    onlyMovies,
    movieTitle,
    getMovie,
    getMovies,
  };
});
