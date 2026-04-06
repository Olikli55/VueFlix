<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import {onMounted, ref} from "vue";
import type {videoDB} from "@/types.ts";
import {fetchAll, fetchById} from "@/database.ts";


const route = useRoute()
const id = route.params.id
const videoType = route.meta.videoType as string

const data = ref<videoDB>()
onMounted(async () => { //makes the onMounted asynchronous
  data.value = await fetchById(videoType, Number(id))  //wait to get the data
})



</script>

<template>

  <div v-if="data">
    <div>id: {{ data.id }} name: {{ data.name }}</div>
  </div>

</template>

<style src="../../Style/style.css" scoped>

</style>