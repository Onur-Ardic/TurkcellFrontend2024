<template>
  <div>
    <h1>Todo App</h1>

    <form @submit.prevent="addTodo">
      <div class="field">
        <input type="text" v-model="todo" />
        <button type="submit">Ekle</button>
      </div>
    </form>

    <div v-for="todo in todos" : key="todo.id">
      <div class="card-content cursor">
        {{ todo.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default class{
  setup(){
    const todo = ref('');
    const todos = ref([]);

  }

  function addTodo() {
    todos.values.push({
      done : false,
      content : todo.value,
      id : Date.now()
    })
    todo.value = '';

  }

  function done(todo){
    todo.done =!todo.done;
  }
  return{
    todo,
    todos,
    addTodo,
    done
  }
}
</script>
