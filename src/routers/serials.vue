<script setup lang="ts">

import {computed, onMounted} from "vue"
import {getData} from "../data/serials.ts"
import {ref} from "vue";
import type {videoDB} from "@/types.ts";
import {fetchAll} from "@/database.ts";
import ItemListComponent from "@/components/itemListComponent.vue";

const data = ref<videoDB[]>([])
onMounted(async () => { //makes the onMounted asynchronous
  data.value = await fetchAll('Serials')  //wait to get the data
})

</script>


<template>
  <item-list-component :data="data" />
</template>

<style src="../Style/style.css" scoped>

</style>