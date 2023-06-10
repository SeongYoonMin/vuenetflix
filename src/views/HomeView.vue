<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
interface TheMovieDB {
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}
const movieList = ref<TheMovieDB>();
const getMovieList = async () => {
  const { data } = await axios.get<TheMovieDB>('https://api.themoviedb.org/3/movie/popular?language=ko-KR', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjUwNThlM2E4ODgyYjkyMGE1ZWEwODY3OTU5ZDIxOCIsInN1YiI6IjY0ODFjZjc4ZTI3MjYwMDE0N2I4ODhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2pzWceAYYTgqYx1ia3EyOutHohdcBhDQQ0hsCcs-Bc'
    }
  })
  console.log(data.results);
  movieList.value = data
}
getMovieList();
</script>

<template>
  <section>{{ movieList?.results }}</section>
</template>

<style lang="scss" scoped></style>
