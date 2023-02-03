import API from "@/api/api";

const imageURL = "https://image.tmdb.org/t/p/w500";

const getTrendingMovies = async (
  type: string = "all",
  time: string = "week"
) => {
  const response = await API.get(`/trending/${type}/${time}`);
  return response.data;
};

const getSingleMovie = async (id: number, type: string) => {
  const response = await API.get(`/${type}/${id}`);
  return response.data;
};

export default {
  getTrendingMovies,
  getSingleMovie,
  imageURL,
};
