export default {
  namespaced: true,
  state: {
    tasks: [],
    task: [],
  },
  mutations: {
    GET_TASKS_LIST(state, tasks) {
      state.tasks = tasks;
    },
    TASK_DELETE(state, payload) {
      const mutateData = state.tasks.filter((task) => task.id !== payload);
      state.tasks = mutateData;
    },
    TASK_SHOW(state, task) {
      state.task = task;
    },
    TASK_ADD(state, payload) {
      const newTask = [...state.tasks, { ...payload }];
      console.log(newTask);
      state.tasks = newTask;
      // console.log(payload);
    },
  },
  actions: {
    getTaskList: async (context) => {
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      context.commit("GET_TASKS_LIST", data);
    },

    tasks_remove: async (context, payload) => {
      context.commit("TASK_DELETE", payload);
      await fetch("http://localhost:3000/tasks/" + payload, {
        method: "DELETE",
      });
    },
    showTask: async (context, payload) => {
      const res = await fetch("http://localhost:3000/tasks/" + payload);
      const data = await res.json();
      context.commit("TASK_SHOW", data);
    },
    addTask: async (context, payload) => {
      context.commit("TASK_ADD", payload);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
      await fetch("http://localhost:3000/tasks", requestOptions);
    },
    taskUpdate: async (context, payload) => {
      const requestOptions = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload.value),
      };
      await fetch("http://localhost:3000/tasks/" + payload.id, requestOptions);
    },
  },
  getters: [],
};
