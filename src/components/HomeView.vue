<script setup lang="ts">
import axios from 'axios'

const getMovieList = async () => {
  const data = await axios.get('https://api.themoviedb.org/3/movie/popular?language=ko-KR', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjUwNThlM2E4ODgyYjkyMGE1ZWEwODY3OTU5ZDIxOCIsInN1YiI6IjY0ODFjZjc4ZTI3MjYwMDE0N2I4ODhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2pzWceAYYTgqYx1ia3EyOutHohdcBhDQQ0hsCcs-Bc'
    }
  })
  return data
}
console.log(getMovieList())
</script>

<template>
  <section>{{ getMovieList }}</section>
</template>

<style lang="scss" scoped></style>
