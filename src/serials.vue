<script setup lang="ts">

import {computed} from "vue"
import {getData} from "./serials.ts"
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

<style scoped>
.serial-container{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
  align-items: start;}

.serial{
  border: crimson 1px solid;
  border-radius: 1rem;
  background: #9e3e3e;
  background: radial-gradient(circle, rgba(158, 62, 62, 1) 0%, rgba(0, 0, 0, 1) 100%);
  height: 100px;
  width: 150px;
  text-align: center;


}
</style>