import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import films from './films.vue'
import detail from './detail.vue'
import serials from './serials.vue'




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