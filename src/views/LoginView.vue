<template>
  <div class="login">
    <h1>This is the login page</h1>
    <v-btn v-on:click="login('Jane Doe')" elevation="2">Default User</v-btn>
    <v-btn elevation="2">Jane Doe</v-btn>
    <v-btn elevation="2">John Smith</v-btn>
  </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        methods: {
            login(user) {
                console.warn('succesfully logged in!'),
                console.warn(user);
            }
        }
    }
</script>