<script>
export default {
  props: ["item"],
  emits: ["onDelete", "onShow", "onEdit"],
};
</script>

<template>
  <div
    class="p-1 rounded-lg mb-1 bg-teal-600 flex justify-between border-slate-900 shadow-2xl mt-4 text-xl"
  >
    <div class="flex gap-5">
      <input class="check text-black line-through" type="checkbox" />
      <label>
        {{ item.title }}
      </label>
    </div>

    <div class="flex row-reverse" style="gap: 1rem">
      <div @click="this.$emit('onShow', item.id)" class="text-blue-700 text-xl">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="checkbox"]:checked + label {
  color: black;
  text-decoration: line-through;
}
input.check {
  width: 20px;
  height: 20px;
  margin: auto;
  cursor: pointer;
}
</style>
