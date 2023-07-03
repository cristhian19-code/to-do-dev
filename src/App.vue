<script setup lang="ts">
import { useTodo } from "./composables/useTodo";
import { ref } from "vue";

// components
import BaseInput from "./components/BaseInput.vue";
import BaseButton from "./components/BaseButton.vue";
import ListTabs from './components/tabs/ListTabs.vue'

// interface
import { TypeFilter } from "./interfaces/todo.interface";

// vars
const input = ref("");

const {
  getTodoByType,
  addTodo,
  changeType,
  type_list,
  todoDone,
  removeAll,
  removeTodo
} = useTodo();

// methods
const onSaveTodo = () => {
  if (input.value.trim().length === 0) return alert("No empty todo allowed");

  addTodo({
    id: Math.random(),
    description: input.value,
    done: false,
  });

  input.value = "";
};

const onChangeTab = (type: TypeFilter) => {
  input.value = "";
  changeType(type);
}
</script>

<template>
  <h1 class="text-2xl text-center font-semibold mt-4">#todo</h1>

  <div class="mx-auto w-[500px] mt-10 font-serif h-full">
    <list-tabs :type="type_list" @change="onChangeTab" />

    <div>
      <div v-if="type_list !== 'completed'" class="flex mt-4 gap-5">
        <base-input v-model="input" />
        <base-button @click="onSaveTodo" />
      </div>
      <div class="mt-4">
        <ul>
          <li v-for="todo in getTodoByType" :key="todo.id" class="flex justify-between mb-3 items-center">
            <div class="flex gap-2">
              <div class="pl-1">
                <input @change="todoDone(todo.id)" type="checkbox" class="scale-150 accent-blue-500"
                  :checked="todo.done" />
              </div>
              <p class="font-medium" :class="todo.done && 'line-through'">{{ todo.description }}</p>
            </div>
            <button @click="removeTodo(todo.id)" v-if="type_list === 'completed'"
              class="text-gray-400 text-xl h-[20px] w-[20px]">
              <i class="ri-delete-bin-6-line"></i>
            </button>
          </li>
        </ul>

        <div class="flex justify-end mt-5">
          <button :disabled="getTodoByType.length === 0" @click="removeAll()" v-if="type_list === 'completed'"
            class="bg-red-500 rounded-md text-white px-7 py-3 text-xs font-medium disabled:bg-red-300">
            <i class="ri-delete-bin-7-line text-md"></i>
            delete all
          </button>
        </div>
      </div>
    </div>
  </div>

  <footer class="text-center pt-16 pb-6 font-semibold text-gray-400">
    created by cristhian19-code - devChallenges.io
  </footer>
</template>