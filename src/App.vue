<script setup lang="ts">
const username = "Account"
</script>

<template>
  <body>
  <header>
    <div class="selection">
      <RouterLink class="SelectButton" to="/films">Films</RouterLink>
      <RouterLink class="SelectButton" to="/serials">Serials</RouterLink>
      <RouterLink class="SelectButtonHome" to="/home">Home</RouterLink>
      <div class="spacer"></div>
      <RouterLink class="SelectButton user-box" to="/account">{{ username }}</RouterLink>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
  </body>
</template>

<style src="./Style/style.css" scoped></style>

<style>
body {
  background-color: red;
  margin: 0;
  padding: 0;
}
.user-box {
  border: 1px solid white;
  padding: 4px 10px;
  border-radius: 4px;
}
</style>