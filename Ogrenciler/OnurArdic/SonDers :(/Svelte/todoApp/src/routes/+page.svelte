<script>
let todos = []
let newTodo;
const addTodo = (e) =>{
e.preventDefault();

newTodo = {
	id: todos.length + 1,
    title: input.value,
    completed: false,
}
	
}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<main>
	<input type="text" bind:value={newTodo}>
	<button on:click={addTodo}>Ekle</button>
	{#each todos as  todo, index}
		<div class="todo">
			<input type="checkbox" bind:checked={todo.completed}>
            <label for={todo.id}>{todo.title}</label>
            <button on:click={() => (todos = todos.filter(t => t.id!== todo.id))}>
                Delete
            </button>
		</div>
	{/each}
</main>

<style>
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
