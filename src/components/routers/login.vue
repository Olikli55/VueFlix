<script setup lang="ts">
import {reactive, ref} from 'vue'
import {chekUserFromDB} from '@/database.ts'
import { useRouter } from 'vue-router'
import bcrypt from 'bcryptjs'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',})
const isLoading = ref(false);
async function handleSubmit() {
  if(isLoading.value) {return}
  isLoading.value = true

  try {
    let password:string = await chekUserFromDB(form.username);
    let password2:string = await bcrypt.hash(form.password, 10);

    console.log(bcrypt.compare(form.password, password));
    if (!password) {
      throw new Error("no hash ")
    }
    if(bcrypt.compareSync(form.password, password)) {
      console.log("logged in ")
      localStorage.setItem('token', JSON.stringify({username: form.username}))
      await router.push("/account");

    }else {
      console.log("wrong password")

    }
  }finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="box">
    <h2>Login:</h2>
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
      <input type="reset" value="Reset" @click="Object.assign(form, { username: '', password: '', passwordAgain: '' })" />
      <input type="submit" :value="isLoading ? 'Loading...' : 'Login'" :disabled="isLoading" />
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