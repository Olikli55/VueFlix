<script setup lang="ts">

import {computed, onMounted} from "vue"
import {getData} from "../../data/films.ts"
import {ref} from "vue";
import type {videoDB, videoUI} from "@/types.ts";
import ItemListComponent from "@/components/itemListComponent.vue";
import {fetchAll} from "@/database.ts";

const data = ref<videoDB[]>([])
onMounted(async () => { //makes the onMounted asynchronous
  data.value = await fetchAll('Films')  //wait to get the data
})


</script>


<template>
  <item-list-component :data="data" :videoType="'films'" />
</template>

<style src="../../Style/style.css" scoped>

</style>
