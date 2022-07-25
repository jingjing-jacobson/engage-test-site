<template>
    <div class="playground">
        <h1>Playground</h1>
        <p>Here's a playground, go and click on a bunch of things.</p>
        <div class="flex-container">
            <v-btn elevation="2" v-on:click="showAlert('You clicked me!')">Click me!</v-btn>
            <v-btn elevation="2" id="some-id-rs12341234abcdabcd">dynamic id</v-btn>
            <!-- <v-btn class="a-class-rs9999aaaa9999aaaa">dynamic class</v-btn> -->
            <v-btn elevation="2" id="rs123412345678abcd">invalid</v-btn>
        </div>
        <h5 class="a-class-rs9999aaaa9999aaaa">sam's club dynamic class</h5>
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
};
</script>

<style>
.playground {
    padding: 20px;
}
.flex-container {
    display: flex;
    gap: 20px;
}
</style>
