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
onMounted(async () => { //makes the function onMounted asynchronous
  data.value = await fetchById(videoType, Number(id))  //wait to get the data
})



</script>

<template>
  <header>
    <RouterLink class="SelectButton" :to=" '/' + videoType ">Back</RouterLink>

  </header>
    <div v-if="data" class="detail-page">

      <div class="detail-card">
        <div class="detail-header">
          <span class="badge">ID: {{ data.id }}</span>
          <h1 class="detail-title">{{ data.name }}</h1>
        </div>

        <div class="detail-body">
          <p>imagine a piece of text here about {{data.name}}</p>
        </div>
      </div>

      <section class="comments-section">
        <h2>Comments</h2>

        <div v-if="data.comments && data.comments.length > 0" class="comments-list">
          <div
              v-for="(comment, index) in data.comments"
              :key="index"
              class="comment-box">

          </div>
        </div>

      </section>

    </div>


</template>

<style src="../../Style/style.css" scoped>

</style>
<style >
/* =========================================
Detail Page Layout
========================================= */
.detail-page {
max-width: 800px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 30px;
padding: 20px;
}

/* =========================================
Main Detail Card
========================================= */
.detail-card {
background: linear-gradient(145deg, #260909 0%, #140202 100%);
border: 1px solid crimson;
border-radius: 1rem;
padding: 30px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
color: #ffffff;
}

.detail-header {
border-bottom: 1px solid rgba(220, 20, 60, 0.3);
padding-bottom: 15px;
margin-bottom: 20px;
}

.badge {
display: inline-block;
background: #ab2409;
color: #ffffff;
padding: 4px 12px;
border-radius: 20px;
font-size: 0.85rem;
font-weight: bold;
margin-bottom: 10px;
letter-spacing: 1px;
}

.detail-title {
margin: 0;
font-size: 2.5rem;
color: #ffffff;
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.detail-body p {
font-size: 1.1rem;
line-height: 1.6;
color: #e0e0e0;
}

.comments-section {
background: rgba(0, 0, 0, 0.4);
border-radius: 1rem;
padding: 25px;
border: 1px solid rgba(255, 255, 255, 0.05);
}

.comments-section h2 {
margin-top: 0;
color: #ff6b4a;
border-bottom: 2px solid #ab2409;
padding-bottom: 10px;
display: inline-block;
}

/* Individual Comment Box */
.comment-box {
background: #260909;
border-left: 4px solid #ab2409;
padding: 15px 20px;
margin-bottom: 15px;
border-radius: 0 8px 8px 0;
color: #e0e0e0;
box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.comment-box p {
margin: 0;
line-height: 1.5;
}


</style>