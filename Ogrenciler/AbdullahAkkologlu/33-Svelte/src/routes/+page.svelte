<script>
	let todos = [];
	let newTodo;
	const addTodo = () => {
		todos = [...todos, newTodo];
		newTodo= "";
	}
	const removeTodo = (index) => {
		todos = todos.filter((f) => todos.indexOf(f) !== index)
	}
</script>
<section>
	<input type="text" bind:value={newTodo}>
	<button on:click={addTodo}>Ekle</button>
	{#each todos as todo, index}
		<div class="todo">
			<div class="title">{todo}</div>
			<button class="remove" on:click={()=> removeTodo(index)}>Sil</button>
		</div>
	{/each}
</section>
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
