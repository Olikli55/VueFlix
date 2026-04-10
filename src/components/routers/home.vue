<script setup lang="ts">

</script>

<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to <span class="brand-highlight">VueFlix</span></h1>
      <p class="hero-sub">Discover your next favourite film or serial.</p>
      <div class="hero-actions">
        <RouterLink class="SelectButton hero-btn primary" to="/films">Browse Films</RouterLink>
        <RouterLink class="SelectButton hero-btn" to="/serials">Browse Serials</RouterLink>
        <RouterLink class="SelectButton hero-btn" to="/login">Login</RouterLink>
        <RouterLink class="SelectButton hero-btn" to="/register">Register</RouterLink>
      </div>
    </div>
  </div>
</template>

<style src="@/Style/style.css" scoped></style>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55vh;
  text-align: center;
  padding: 40px 20px;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px;
  line-height: 1.15;
}

.brand-highlight {
  color: #ff4444;
}

.hero-sub {
  font-size: 1.15rem;
  color: #c0a0a0;
  margin: 0 0 32px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.hero-btn {
  padding: 10px 22px;
  font-size: 0.95rem;
}

.hero-btn.primary {
  background: crimson;
  color: #fff;
}

.hero-btn.primary:hover {
  background: #b30000;
}
</style>