<script lang="ts" setup>
defineProps<{
  result: {
    // 영화 정보
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
  <section class="movie">
    <picture class="thumb">
      <img :src="image_path + result.poster_path" :alt="result.title" />
    </picture>
    <div class="info">
      <h1 class="title">{{ result.title }}</h1>
      <p class="desc">{{ result.overview }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.movie {
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 20px;
  color: white;
  .thumb {
    display: block;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    img {
      max-width: 100%;
      display: block;
    }
  }
}
</style>
