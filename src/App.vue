<script setup lang="ts">
const username = "Account"
</script>

<template>
  <body>
  <header>
    <div class="selection">
      <span class="brand">VueFlix</span>
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

  <footer>
    <p class="footer-text">© 2025 VueFlix &mdash; All rights reserved.</p>
  </footer>
  </body>
</template>

<style src="./Style/style.css" scoped></style>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  background-color: #0d0000;
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.brand {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ff4444;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-right: 16px;
  user-select: none;
}
.user-box {
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 4px 10px;
  border-radius: 4px;
}
.footer-text {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
}
</style>