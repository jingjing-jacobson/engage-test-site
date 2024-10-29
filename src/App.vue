<template>
    <v-app>
        <NavBar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    name: 'App',

    components: {
        NavBar
    },

    data: () => ({
        //
    })
};
</script>

<style>
#pendo-designer-container {
    height: 800px !important;
    max-height: 800px !important;
}
</style>
