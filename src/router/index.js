import { createWebHistory, createRouter } from "vue-router";
import TasksPage from "../views/TasksPage.vue";
import UsersPage from "../views/UsersPage.vue";

const routes = [
  { path: "/", name: "Tasks", component: TasksPage },
  { path: "/users", name: "Users", component: UsersPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
