import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import films from '@/components/routers/films.vue'
import detail from '@/components/routers/detail.vue'
import serials from '@/components/routers/serials.vue'
import home from '@/components/routers/home.vue'
import login from '@/components/routers/login.vue'
import register from '@/components/routers/register.vue'
import account from  '@/components/routers/account.vue'



const routes = [
    { path: '/films', component: films },
    { path: '/serials', component: serials },
    { path: '/home', component: home },
    { path: '/register', component: register  },
    { path: '/login', component: login },
    { path: '/account', component: account },
    { path: '/films/detail/:id', component: detail, meta:{videoType:"films"}},
    { path: '/serials/detail/:id', component: detail , meta: {videoType:"serials"}},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
1