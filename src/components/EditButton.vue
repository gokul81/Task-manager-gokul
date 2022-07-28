<template>
  <div class="flex justify-center">
    <form
      @submit.prevent="onSubmit($event, item.id)"
      class="mb-2 bg-slate-900  p-5 fixed top-[30%] w-1/2 rounded-lg border-white border-2"
    >
      <div class="mb-2 flex flex-col">
        <label class="text-white text-2xl">Task</label>
        <input type="text" name="name" v-model="item.title" class="w-[600px] py-2" />
      </div>
      <div class="flex justify-center">
        <button @click="toggle = !toggle" class="rounded-md bg-slate-400 px-2">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["show", "item"],
 
  methods: {
    onSubmit(e, id) {
      console.log(e, this.item.title);
      this.$emit("onEdit", e, id, this.item.title);
    },
  },
 
};
</script>

<style></style>
