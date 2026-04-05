<script setup lang="ts">

import {computed} from "vue"
import {getData} from "../data/serials.ts"
import {ref} from "vue";

const data = ref(getData())
console.log(data.value)

</script>


<template>
 <div class="serial-container">
   <div
       class="serial"
       v-for="film in data">
     {{ film.name}} <br> id: {{film.id}}
   </div>
 </div>
</template>

<style src="../Style/style.css" scoped>

</style>