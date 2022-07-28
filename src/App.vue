<template>
<task-head-vue></task-head-vue>
<ToDobodyVue>

  <task-list-vue></task-list-vue>
</ToDobodyVue>

</template>
<script>
import TaskHeadVue from './components/TaskHead.vue';
import ToDobodyVue from './components/ToDobody.vue';
import TaskListVue from './components/TaskList.vue';
export default{
components:{
  TaskHeadVue,
  ToDobodyVue,
  TaskListVue
}
}
</script>



