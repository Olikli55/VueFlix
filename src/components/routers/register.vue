<script setup lang="ts">
import {reactive, ref} from 'vue'
import {addUserToDB} from "@/database.ts"
import { useRouter } from 'vue-router'
import bcrypt from 'bcryptjs'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  passwordAgain: ''
})
const isLoading = ref(false);

async function handleSubmit() {
  if(form.password !== form.passwordAgain){
    console.log("password not the same");
    return;}
  if(form.username == form.password){
    console.log("password cant be the same as username");
    return;}

  if (isLoading.value){return}
  isLoading.value = true;
  console.log("loading...");
  try {
    const hashPassword = await bcrypt.hash(form.password, 10)
    await addUserToDB(form.username, hashPassword);
  }finally {
    isLoading.value = false;
    console.log("success")
    await router.push("/login");
  }
}

// your logic here

</script>

<template>
  <div class="box">
    <h2>Register:</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Username: </label>
        <br>
        <input v-model="form.username" type="text" required maxlength="12"  />
      </div>
      <br>
      <div>
        <label>Password: </label>
        <br>
        <input v-model="form.password" type="password" required maxlength="12"  />
      </div>
      <br>
      <div>
        <label>Password again: </label><br>
        <input v-model="form.passwordAgain" type="password" required maxlength="12"  minlength="5" />
      </div>
      <br>
      <input type="reset" value="Reset" @click="Object.assign(form, { username: '', password: '', passwordAgain: '' })" />
      <input type="submit" value="Register" :disabled="isLoading"  />
    </form>
  </div>
</template>

<style scoped>

.box {
  width: 320px;
  margin: 60px auto;
  padding: 20px;
  background: linear-gradient(180deg, #1a0000, #2e0000);
  border: 2px solid #880000;
  border-radius: 8px;
  color: #ffcccc;
  font-family: arial, sans-serif;
}

h2 {
  color: #ff3333;
  margin-bottom: 15px;
}

label {
  color: #ffaaaa;
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  width: 94%;
  padding: 8px;
  margin-top: 4px;
  background: #0d0000;
  border: 1px solid #cc0000;
  color: white;
  border-radius: 4px;
  font-size: 14px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #ff4444;
}

input[type="submit"] {
  background: linear-gradient(#cc0000, #880000);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 8px;
}

input[type="reset"] {
  background: #1a0000;
  color: #ffaaaa;
  border: 1px solid #880000;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: linear-gradient(#ff2222, #aa0000);
}
</style>