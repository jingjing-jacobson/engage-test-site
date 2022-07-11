<template>
    <v-card class="overflow-hidden">
        <v-app-bar color="#6A76AB" dark dense>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Pendo Engage Test Site</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn id="magnifying-button" icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn id="heart-button" icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn id="dots-button" icon color="green" v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title><a href="https://github.com/" target="_blank">Github</a></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title
                            ><a href="https://mail.google.com" target="_blank">Gmail</a></v-list-item-title
                        >
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title
                            ><a href="https://calendar.google.com" target="_blank">Calendar</a></v-list-item-title
                        >
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title
                            ><a href="https://stackoverflow.com/" target="_blank">Stackoverflow</a></v-list-item-title
                        >
                    </v-list-item>
                </v-list>
            </v-menu>

            <template v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab v-on:click="linkTo('/')">Home</v-tab>
                    <v-tab v-on:click="linkTo('/about')" id="5748932759208f2">About</v-tab>
                    <v-tab v-on:click="linkTo('/playground')">Playground</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    </v-card>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        linkTo(url) {
            this.$router.push(url);
        }
    }
};
</script>
