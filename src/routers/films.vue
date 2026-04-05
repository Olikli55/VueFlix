<script setup lang="ts">

import {computed} from "vue"
import {getData} from "../data/films.ts"
import {ref} from "vue";

const data = ref(getData())
console.log(data.value)

</script>


<template>

  <div class="films-container">
   <div
       class="film"
       v-for="film in data">
     {{ film.name}} <br> id: {{film.id}}
     <RouterLink class="SelectButton" :to="'/detail/' + film.id"></RouterLink>
   </div>
 </div>
</template>

<style src="../Style/style.css" scoped>

</style>
