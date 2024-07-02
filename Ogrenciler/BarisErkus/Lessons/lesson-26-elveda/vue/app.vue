<template>
  <div class="">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <div class="field">
        <div class="control">
          <input
            v-model="todo"
            type="text"
            placeholder="ToDo Gir"
            class="input"
          />
        </div>
        <button type="submit">Ekle</button>
      </div>
    </form>
    <div
      class="card-content cursor"
      :class="{ done: todo.done }"
      @click="done(todo)"
    >
      {{ todo.content }} - {{ todo.done }}
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const todo = ref("");
    const todos = ref([]);
    function addTodo() {
      todos.values.push({ content: todo.value, done: false, id: Date.now() });
      todo.value = "";
    }

    function done(todo) {
      todo.done = !todo.done;
    }
    return { todo, todos, addTodo, done };
  },
};
</script>

<style lang="scss"></style>
