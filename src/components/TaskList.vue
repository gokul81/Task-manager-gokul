<template>
  <div>
    <edit-button-vue
      v-show="task_edit_model"
      @onEdit="tasks_update"
      :item="task"
    ></edit-button-vue>

    <task-form @onAdd="addTask"></task-form>
    <div v-if="tasks.length > 0">
      <preview-vue>
        <div
          v-show="toggle"
          class="border-2 backdrop-blur-lg rounded-lg bg-gray-800 text-white text-xl py-3 w-[40%] fixed top-[30%] right-[30%]"
        >
          <div>
            <div class="text-center">{{ task }}</div>
          </div>
          <div class="flex justify-end mx-3">
            <button
              @click="toggle = !toggle"
              class="bg-slate-900 text-white px-2 py-1 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      </preview-vue>

      <task-item-vue
        :key="task.id"
        v-for="task in tasks"
        :item="task"
        @onShow="showTask"
        class="cursor-pointer"
      >
        <div class="flex flex-row gap-1">
          <div class="flex justify-end">
            <button
              @click="toggle = !toggle"
              class="text-base px-3 text-white py-1 rounded-xl"
            >
              <img
                src="../assets/show.png"
                alt="show"
                class="w-[30px] h-[30px]"
              />
            </button>
          </div>
          <div>
            <button
              @click="task_edit(task.id)"
              class="text-base px-4 text-white py-1 rounded-xl"
            >
              <img
                src="../assets/edit.png"
                alt="edit"
                class="w-[25px] h-[25px]"
              />
            </button>
          </div>
          <div>
            <button
              @click="tasks_remove(task.id)"
              class="text-base px-2 text-white py-1 rounded-xl"
            >
              <img
                src="../assets/delete2.png"
                alt="delete"
                class="w-[25px] h-[25px]"
              />
            </button>
          </div>
        </div>
      </task-item-vue>
    </div>
    <div class="w-full h-full text-center text-5xl text-white" v-else>
      No tasks!
    </div>
  </div>
</template>

<script>
import TaskItemVue from "./TaskItem.vue";
import PreviewVue from "./Preview.vue";
import EditButtonVue from "./EditButton.vue";
import TaskForm from "./TaskForm.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      // task: [],
      editValue: null,
      toggle: false,
      task_preview_model: false,
      task_edit_model: false,
      // id: Math.floor(Math.random() * 1000),
      // userId: Math.floor(Math.random() * 10000),
      title: "",
    };
  },
  // watch: {
  //   tasks(old_tasks, new_tasks) {
  //     console.log(old_tasks.length);
  //     console.log(new_tasks.length);
  //   },
  // },
  methods: {
    addTask(e) {
      const data = new FormData(e.target);
      const user = Object.fromEntries(data.entries());
      user.id = Math.floor(Math.random() * 1000);
      user.completed = false;
      this.$store.dispatch("task/add_Task", user);
    },

    task_edit(id) {
      this.task_edit_model = !this.task_edit_model;
    },
    tasks_update(e, id, newTitle) {
      this.tasks.forEach((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
      });
      const value = {
        title: newTitle,
      };
      this.task_edit_model = false;
      this.$store.dispatch("task/task_update", { value, id });
    },
    ...mapActions("task", ["getTaskList", "tasks_remove", "showTask"]),
  },
  components: {
    TaskItemVue,
    EditButtonVue,
    PreviewVue,
    TaskForm,
  },
  mounted() {
    this.getTaskList();
  },
  computed: {
    ...mapState("task", {
      tasks(state) {
        return state.tasks;
      },
      task(state) {
        return state.task;
      },
    }),
  },
};
</script>

<style></style>
