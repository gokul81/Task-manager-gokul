import { createWebHistory, createRouter } from "vue-router";
import TasksPage from "../views/TasksPage.vue";
import UsersPage from "../views/UsersPage.vue";

const routes = [
  { path: "/tasks", name: "tasks", component: TasksPage },
  { path: "/users", name: "users", component: UsersPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
