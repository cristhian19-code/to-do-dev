<script setup lang="ts">
const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button
    @click="handleClick"
    class="bg-blue-500 text-white px-8 py-4 rounded-xl text-xs transition-all active:scale-95"
  >
    Add
  </button>
</template>