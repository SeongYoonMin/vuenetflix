<script setup lang="ts">
import MovieDesignVue from '@/components/MovieDesign.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useTmdbStore } from '@/stores/tmdb';

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
const useTMDB = useTmdbStore();
const API_URL = useTMDB.API_URL;
const API_KEY = useTMDB.API_KEY;
const Access_Token = useTMDB.Access_Token;
const image_path = useTMDB.Image_Path;
const getMovieList = async () => {
  const { data } = await axios.get<TheMovieDB>(
    `${API_URL}movie/popular?language=ko-KR`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Access_Token}`,
      },
    },
  );
  movieList.value = data;
};

getMovieList();
</script>

<template>
  <section>
    <div v-if="movieList">
      <MovieDesignVue
        :result="items"
        :image_path="image_path"
        v-for="(items, index) in movieList.results"
        :key="index"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
