<script setup lang="ts">


import { ref, onMounted } from 'vue'
import { supabase } from './database.ts'
import type { videoDB } from './types.ts'

</script>


<template>
  <body>
  <header>
    <div class="selection">
      <RouterLink class="SelectButton" to="/films">Films</RouterLink>
      <RouterLink class="SelectButton" to="/serials">Serials</RouterLink>
      <RouterLink class="SelectButtonHome" to="/home">Home</RouterLink>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>

  </footer>
  </body>
</template>

<style src="./Style/style.css" scoped></style>

<style>
body {
  background-color: red;
  margin: 0;
  padding: 0;
}
.SelectButtonHome{

}
</style>

