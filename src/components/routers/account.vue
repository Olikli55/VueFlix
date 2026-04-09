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
  <h1></h1>
  <div class="container">

    <h2>Hi! {{token?.username}}</h2>

    <button  class="SelectButton"  @click="logout">Logout</button>
  </div>
</template>
<style src="../../Style/style.css" scoped></style>


<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.SelectButton{
  background: darkred;
}
</style>