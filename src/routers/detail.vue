<script setup lang="ts">
import { useRoute } from 'vue-router'
import {onMounted, ref} from "vue";
import type {videoDB} from "@/types.ts";
import {fetchAll, fetchById} from "@/database.ts";


const route = useRoute()
const id = route.params.id

const data = ref<videoDB>()
onMounted(async () => { //makes the onMounted asynchronous
  data.value = await fetchById(id)  //wait to get the data
})



</script>

<template>

</template>

<style src="../Style/style.css" scoped>

</style>