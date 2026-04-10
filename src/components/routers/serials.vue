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
  <div class="section-header">
    <h2 class="section-title">Serials</h2>
    <span class="section-count">{{ data.length }} title{{ data.length !== 1 ? 's' : '' }}</span>
  </div>
  <item-list-component :data="data" :videoType="'serials'" />
</template>

<style src="../../Style/style.css" scoped></style>

<style>
.section-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(220, 20, 60, 0.4);
  padding-bottom: 10px;
}

.section-title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
}

.section-count {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
}
</style>