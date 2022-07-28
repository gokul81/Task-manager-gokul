<template>
  <div class="mt-4" >
    <buttton
      @click="toggle = !toggle"
      class="px-3 py-3  text-white bg-sky-600 w-20 mx-auto mb-6 cursor-pointer font-bold rounded-lg"
      >Add Task</buttton
    >
    <form
      v-show="toggle"
      @submit.prevent="onSubmit"
      class="flex flex-col gap-5 border-2 p-2 mb-5 bg-slate-900 mt-4 rounded-lg"
    >
      <div class="flex flex-col">
        <label for="" class="mr-2 text-xl px-2 font-bold text-white">New Task</label>
        <input
          v-model="name"
          type="text"
          name="title"
          class="border px-2 py-1 w-1/2 rounded-lg"
        />
      </div>
      <button
        class= "bg-slate-600 text-white text-xl  rounded ml-80"
        style="width: 100px"
        @click="toggle = !toggle"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      name: "",
    };
  },
  methods: {
    onSubmit(e) {
      this.$emit("onAdd", e);
    },
  },
};
</script>

<style></style>

