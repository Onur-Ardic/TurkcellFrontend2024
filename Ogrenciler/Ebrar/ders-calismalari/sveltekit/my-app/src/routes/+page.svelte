<script>
    let todos = [];
    let newTodo = '';

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            todos = [...todos, newTodo];
            newTodo = '';
        }
    };

    const removeTodo = (index) => {
        todos = todos.filter((i) => i !== index);
    };
</script>

<main>
    <input type="text" bind:value={newTodo}>
    <button on:click={addTodo}>Add</button>
    {#each todos as todo, index}
    <div class="todo">
        <div class="title">{todo}</div>
        <div class="remove" on:click={() => removeTodo(index)}>X</div>
    </div>
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    input {
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #0056b3;
    }

    .todo {
        display: flex;
        justify-content: space-between;
        width: 200px;
        margin: 5px 0;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .title {
        flex-grow: 1;
    }

    .remove {
        cursor: pointer;
        color: red;
    }
</style>

