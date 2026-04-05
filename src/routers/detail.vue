<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
<h1>DETAIL {{id}}</h1>
</template>

<style src="../Style/style.css" scoped>

</style>