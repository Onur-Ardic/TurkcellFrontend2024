<script>
  let todos = [];
  let newTodo;
  const addTodo = () => {
    todos = [...todos, newTodo];
    newTodo = "";
  };
  const removeTodo = (index) => {
    todos = todos.filter((f) => todos.indexOf(f) !== index);
  };
</script>

<main>
  <input type="text" bind:value={newTodo} />
  <button on:click={addTodo}>Ekle</button>
  {#each todos as todo, index}
    <div class="todo">
      <div class="title">{todo}</div>
      <div class="remove" on:click={() => removeTodo(index)}>X</div>
    </div>
  {/each}
</main>

<style>
  :global(body) {
    display: flex;
    place-items: center;
    place-content: center;
  }
  .todo {
    background-color: #333;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: antiquewhite;
  }
  .todo .remove {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: firebrick;
    border-radius: 5px;
    cursor: pointer;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
  h1 {
    width: 100%;
  }
  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }
  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
