<script setup lang="ts">
import { useVModel } from "../composables/useModel";

interface Props {
  modelValue: string;
}

const props = defineProps<Props>();

const model = useVModel(props);
</script>

<template>
  <input
    v-model="model"
    class="border-2 rounded-xl px-3 py-3 placeholder:text-sm outline-none w-full"
    type="text"
    placeholder="add details"
  />
</template>