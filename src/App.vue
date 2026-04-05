<script setup lang="ts">


import { ref, onMounted } from 'vue'
import { supabase } from '../utils /supabase'


const todos = ref([])

async function getTodos() {
  const { data } = await supabase.from('todos').select()
  todos.value = data
}

onMounted(() => {
  getTodos()
})

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

