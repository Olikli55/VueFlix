<script setup lang="ts">

import {onMounted} from "vue"
import {ref} from "vue";
import type {videoDB} from "@/types.ts";
import {fetchAll} from "@/database.ts";
import ItemListComponent from "@/components/itemListComponent.vue";

const data = ref<videoDB[]>([])
onMounted(async () => { //makes the onMounted asynchronous
  data.value = await fetchAll('serials')  //wait to get the data
})

</script>


<template>
  <h3 class="badge">Serials</h3>
  <item-list-component :data="data" :videoType="'serials'" />
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
}</style>