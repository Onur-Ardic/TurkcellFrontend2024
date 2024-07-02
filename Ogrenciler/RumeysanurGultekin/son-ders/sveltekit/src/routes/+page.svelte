<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	let todos = [];
	let newTodo;
	const addTodo = () => {
		todos = [...todos, newTodo];
		newTodo = '';
	};
	const removeTodo = (index) => {
		todos = todos.filter(()=> todos.indexOf(f) !== index);
		
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

	</h1>


	<Counter />
</section>

<main>
	<input type="text" bind:value={newTodo} />
	<button on:click={addTodo}>Ekle</button> 
	{#each todos as todo, index}
		<div>
			<div class="title">{todo}</div>
			<div class="remove" on:click={()=> removeTodo(index)}>x</div>
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
