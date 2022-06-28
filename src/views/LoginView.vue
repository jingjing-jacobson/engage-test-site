<template>
  <div class="login">
    <h1>This is the login page</h1>
    <v-btn elevation="2">Default User</v-btn>
    <v-btn v-on:click="login('jane-doe1', 'janedoe1@test.com', 'Jane Doe', 'HR', 'TEST', 'TestCompany')" elevation="2">Jane Doe</v-btn>
    <v-btn elevation="2">John Smith</v-btn>
  </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        methods: {
            login(id, email, name, role, acc_id, acc_name) {
                console.warn('succesfully logged in!');
                const userData = {
                        visitor: {
                            id: id,
                            email: email,
                            full_name: name,
                            role: role
                        },
                        account: {
                            id: acc_id,
                            name: acc_name
                        }
                };
                console.warn('userData:', userData);
            }
        }
    }
</script>