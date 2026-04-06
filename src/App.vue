<script setup lang="ts">


import { ref, onMounted } from 'vue'
import { supabase } from './database.ts'
import type { videoDB } from './types.ts'

</script>


<template>
  <header>
    <div class="selection">
      <RouterLink class="SelectButton" to="/films">Films</RouterLink>
      <RouterLink class="SelectButton" to="/serials">Serials</RouterLink>
    </div>
  </header>
  <nav>

  </nav>
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
</template>

<style src="./Style/style.css" scoped>

</style>

