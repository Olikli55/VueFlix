<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();

import {computed, ref} from "vue";

const token = ref(JSON.parse(localStorage.getItem("token") ?? "null"))
if (!token.value) {router.push('/login')}

function logout(){
  localStorage.removeItem('token')
  console.log("logged out")
  token.value = null
  router.push("/login");
}
// token? ==> handle undefined safely

</script>
<template>
  <div class="account-page">
    <div class="account-card">
      <div class="account-avatar">{{ token?.username?.charAt(0)?.toUpperCase() ?? '?' }}</div>
      <h2 class="account-name">{{ token?.username }}</h2>
      <p class="account-label">Logged in</p>
      <button class="logout-btn" @click="logout">Logout</button>
    </div>
  </div>
</template>
<style src="../../Style/style.css" scoped></style>

<style scoped>
.account-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 40px 20px;
}

.account-card {
  background: linear-gradient(145deg, #1c0505 0%, #0d0000 100%);
  border: 1px solid rgba(220, 20, 60, 0.5);
  border-radius: 1rem;
  padding: 40px 50px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  min-width: 260px;
}

.account-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: crimson;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.account-name {
  margin: 0 0 6px;
  font-size: 1.5rem;
  color: #ffffff;
}

.account-label {
  margin: 0 0 28px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
}

.logout-btn {
  background: linear-gradient(#cc0000, #880000);
  color: #fff;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}

.logout-btn:hover {
  background: linear-gradient(#ff2222, #aa0000);
}
</style>