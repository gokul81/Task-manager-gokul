<template>
  <to-do-body>
    <task-list></task-list>
  </to-do-body>
</template>

<script>
import TaskList from "../components/TaskList.vue";
import ToDoBody from "../components/ToDoBody.vue";

export default {
  components: {
    TaskList,
    ToDoBody,
  },
};
</script>
