import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTmdbStore = defineStore('TMDB', () => {
  //   url = https://api.themoviedb.org/3/account/{account_id}
  const API_URL = ref<string>("https://api.themoviedb.org/3/")
  const API_KEY = ref<string>("5b5058e3a8882b920a5ea0867959d218");
  const Access_Token = ref<string>("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjUwNThlM2E4ODgyYjkyMGE1ZWEwODY3OTU5ZDIxOCIsInN1YiI6IjY0ODFjZjc4ZTI3MjYwMDE0N2I4ODhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2pzWceAYYTgqYx1ia3EyOutHohdcBhDQQ0hsCcs-Bc")
  const Image_Path = ref<string>("https://image.tmdb.org/t/p/w500/");
  return { API_KEY, API_URL, Access_Token, Image_Path }
})