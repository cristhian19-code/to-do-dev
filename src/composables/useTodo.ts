import { computed, ref } from "vue"

import { Todo, TypeFilter } from "../interfaces/todo.interface"

// type filter todo

export const useTodo = () => {
    const todos = ref<Todo[]>([])
    const type_list = ref<TypeFilter>("all")

    const addTodo = (todo: Todo) => {
        todos.value.push(todo)
    }

    const removeAll = () => {
        const result = confirm("Are you sure you want to delete all todos?")

        if (!result) return

        todos.value = todos.value.filter(todo => !todo.done)
    }

    const removeTodo = (id: number) => {
        const result = confirm("Are you sure you want to delete this todo?")
        console.log(result);
        if (!result) return

        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const getTodoByType = computed(() => {
        switch (type_list.value) {
            case "active":
                return todos.value.filter(todo => !todo.done)
            case "completed":
                return todos.value.filter(todo => todo.done)
            default:
                return todos.value
        }
    })

    const todoDone = (id: number) => {
        const todo = todos.value.find(todo => todo.id === id)
        if (todo) {
            todo.done = !todo.done
        }
    }

    const changeType = (type: TypeFilter) => type_list.value = type

    return {
        // data
        todos,
        type_list,

        // methods
        changeType,
        addTodo,
        removeTodo,
        todoDone,
        removeAll,
        
        // computed
        getTodoByType,
    }
}