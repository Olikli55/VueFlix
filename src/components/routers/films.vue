<script setup lang="ts">

import {computed, onMounted} from "vue"
import {ref} from "vue";
import type {videoDB, videoUI} from "@/types.ts";
import ItemListComponent from "@/components/itemListComponent.vue";
import {fetchAll} from "@/database.ts";

const data = ref<videoDB[]>([])
onMounted(async () => { //makes the onMounted asynchronous
  data.value = await fetchAll('films')  //wait to get the data
})


</script>


<template>
  <h3 class="badge">Films</h3>
  <item-list-component :data="data" :videoType="'films'" />
</template>

<style src="../../Style/style.css" scoped></style>

<style>
.badge {
  display: inline-block;
  background: #000000;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
</style>