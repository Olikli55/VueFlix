<script setup lang="ts">
import { ref } from 'vue'


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

<style scoped>
.selection {
  background: #ab2409;
  padding: 8px;
  display: flex;
  justify-content: center;
}

.SelectButton {
  text-decoration: none;
  background: #260909;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  margin: 0 6px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
}

main {
  background: #751a0c;
  background: linear-gradient(156deg, rgba(117, 26, 12, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(125, 10, 10, 1) 100%);
  min-height: 60vh;
  padding: 16px;
  color: #fff;
}

footer {
  background: #751a0c;
  background: linear-gradient(360deg, rgba(117, 26, 12, 1) 0%, rgba(32, 5, 3, 1) 44%, rgba(20, 2, 2, 1) 100%, rgba(125, 10, 10, 1) 100%);
  padding: 10px;
  text-align: center;
}
</style>


