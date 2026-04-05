import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import films from './routers/films.vue'
import detail from './routers/detail.vue'
import serials from './routers/serials.vue'




const routes = [
    { path: '/films', component: films },
    { path: '/serials', component: serials },
    { path: '/detail/:id', component: detail },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
1