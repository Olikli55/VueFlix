<script lang="ts" setup>
import { defineProps } from "vue";
import type {videoDB} from "@/types.ts";



defineProps<{
  data: videoDB[]; //list declared as type video
}>();

</script>

<template>
  <div class="items-container">
    <div class="item"
        v-for="item in data"
        :key="item.id">
      {{ item.name }} <br> id: {{ item.id }}
      <RouterLink class="SelectButton" :to="'/detail/' + item.id"></RouterLink>
    </div>
  </div>
</template>

<style src="../Style/style.css" scoped>

</style>

