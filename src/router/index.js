import {createWebHistory,createRouter} from "vue-router";
import  UsersPage from "../views/UsersPage.vue";
const routes=[
    {path:'/',
     name:'Users',
     component:UsersPage,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;