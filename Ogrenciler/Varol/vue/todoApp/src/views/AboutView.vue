<template>
  <div class="about content mx-5">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <div class="field">
        <div class="control">
          <input v-model="todo" placeholder="Todo Gir" class="input" type="text" />
        </div>
      </div>
      <button type="submit" class="button is-warning">Ekle</button>
    </form>
    <div v-for="todo in todos" :key="todo.id" class="card my-5 mx-5">
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content cursor" :class="{ done: todo.done }" @click="done(todo)">
            <span class="title cursor">
              {{ todo.content }}
            </span>
            <span> - Yapıldı: {{ todo.done }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const todo = ref('')
    const todos = ref([])
    function addTodo() {
      todos.value.push({
        done: false,
        content: todo.value,
        id: Date.now()
      })
      todo.value = ''
    }
    function done(todo) {
      todo.done = !todo.done
    }
    return {
      todo,
      todos,
      addTodo,
      done
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    min-width: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.done {
  text-decoration: line-through;
}
.cursor {
  cursor: pointer;
}
</style>
