<template>
  <div class="playground">
    <h1>Playground</h1>
    <p>
      Here's a playground, go and click on a bunch of things.
    </p>
    <v-btn elevation="2" v-on:click="showAlert('You clicked me!')">Click me!</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'PlaygroundView',
    methods: {
      showAlert(msg) {
        alert(msg);
      }
    }
  }
</script>

<style>
.playground {
  padding: 20px;
}
</style>
