<script>
export default {};
</script>

<template>
  <header class="pt-1">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between w-full rounded-lg bg-slate-700 p-4">
        <h1 class="text-3xl text-white">Task List</h1>
        <router-link to="/users">
          <button class="text-2xl px-2 text-white py-1 bg-sky-600 rounded-xl">
            Users
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>
