<template>
  <div>
    <h1>Todo app</h1>
    <form @submit.prevent="addTodo">
      <div class="field">
        <div class="control">
          <input v-model="todo" placeholder="Todo gir" type="text" class="input"/>
          <button type="submit">ekle</button>
        </div>
      </div>
    </form>
    <div v-for="todo in todos" :key="todo.id">
      <div class="card-content cursor"
      :class="{done:todo.done}"
      @click="done(todo)">
        {{ todo.content }} - {{ todo.done }}
      </div>
    </div>
  </div>
</template>

<script>
export default{
  setup(){
    const todo = ref("")
    const todos = ref([])

    function addTodo(){
      todos.value.push({
        done:false,
        content:todo.value,
        id:Date.now()
      })
      todo.value = ""
    }
    function done(todo){
      todo.done = !todo.done
    }
    return{
      todo,
      todos,
      addTodo,
      done
    }
  }
}
</script>