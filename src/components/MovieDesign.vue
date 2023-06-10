<script lang="ts" setup>
defineProps<{
  result: { // 영화 정보
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
  };
  image_path: string; // 영화 이미지 Path
}>();
</script>

<template>
  <section>
    <p>{{ result.title }}</p>
    <img :src="image_path + result.poster_path" :alt="result.title">
  </section>
</template>

<style lang="scss" scoped></style>
