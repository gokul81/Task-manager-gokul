<template>
  <main-header></main-header>
  <router-view></router-view>
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue';
import ToDoBody from './components/ToDoBody.vue';
import TaskList from './components/TaskList.vue';
import MainHeader from './components/layout/MainHeader.vue';

export default {
  components: {
    MainHeader,
    ToDoBody,
    TaskList
  }
}
</script>