<script setup lang="ts">
// components
import { toRefs } from 'vue';
import Tab from './Tab.vue'

interface Props {
    type: string
}

const props = defineProps<Props>()

const { type } = toRefs(props)

// vars
const tabs = ['All', 'Active', 'Completed']

const emit = defineEmits(['change'])

// methods
const onChangeTab = (type: string) => {
    emit('change', type)
}

</script>

<template>
    <div class="border-b-2 grid grid-cols-3 text-center text-xs text-black font-semibold">
        <tab v-for="tab in tabs" :type="type" :key="tab" :text="tab" @change="onChangeTab" />
    </div>
</template>