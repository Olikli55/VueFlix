import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import films from '@/components/routers/films.vue'
import detail from '@/components/routers/detail.vue'
import serials from '@/components/routers/serials.vue'




const routes = [
    { path: '/films', component: films },
    { path: '/serials', component: serials },
    { path: '/films/detail/:id', component: detail, meta:{videoType:"Films"}},
    { path: '/serials/detail/:id', component: detail , meta: {videoType:"Serials"}},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
1