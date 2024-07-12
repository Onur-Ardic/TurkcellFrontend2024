<template>
  <div class="">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <div class="field">
        <div class="control"><input type="text" /></div>
      </div>
    </form>
  </div>
</template>
