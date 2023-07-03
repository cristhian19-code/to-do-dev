<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
    text: string;
    type: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["change"]);

const { text, type } = toRefs(props);

const change = () => {
    emit("change", text.value.toLowerCase());
};
</script>
<template>
    <div @click="change" class="cursor-pointer relative"
        :class="type === text.toLowerCase() && 'before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:absolute before:bg-blue-500 before:w-20 pb-3 before:h-[4px] before:rounded-t-xl before:rounded-b-sm'">
        <p>{{ text }}</p>
    </div>
</template>