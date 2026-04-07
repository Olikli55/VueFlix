<script lang="ts" setup>
import { defineProps } from "vue";
import type {videoDB} from "@/types.ts";



defineProps<{
  data: videoDB[]; //list declared as type video
  videoType: string;
}>();

</script>

<template>
  <div class="items-container">
    <div class="item"
         v-for="item in data"
         :key="item.id">

      <span class="item-name">{{ item.name }}</span>

      <RouterLink class="SelectButton" :to=" videoType +'/detail/' + item.id">View</RouterLink>

    </div>
  </div>
</template>

<style src="../Style/style.css" scoped>

</style>

