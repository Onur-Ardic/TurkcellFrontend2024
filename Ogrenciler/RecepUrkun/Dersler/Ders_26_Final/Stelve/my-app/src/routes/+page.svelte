<script>
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  let todos = [];
  let newTodo;
  const addTodo = () => {
    todos = [...todos, newTodo];
    newTodo = "";
  };
  const removeTodo = (index) => {
    todos = todos.filter((f) => todos.indexOf(f) != index);
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
  <input type="text" bind:value={newTodo} />
  <button on:click={addTodo}>Ekle</button>
  {#each todos as todo, index}
    <div class="todo">
      <div class="title">
        {todo}
      </div>
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
</style>
