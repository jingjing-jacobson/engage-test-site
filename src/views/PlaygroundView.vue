<template>
    <div class="playground">
        <h1 class="playground-h1">Playground</h1>
        <p>Here's a playground, go and click on a bunch of things.</p>
        <div class="flex-container">
            <v-btn elevation="2" v-on:click="showAlert('You clicked me!')">Click me!</v-btn>
            <v-btn elevation="2" id="1646428942dd324">dynamic id</v-btn>
            <v-btn elevation="2" data-meta-id="335dfe1c1f324c479a24bd8b5e1cb454">data-meta-id</v-btn>
        </div>
        <div class="iframe-label">Here's an iframe!</div>
        <div class="iframe-container">
            <iframe width="560" height="315" src="https://pendo-engage-jlj-test.netlify.app/iframe" title="iframe page" frameborder="2" allowfullscreen></iframe>
        </div>
        <div class="iframe-label">Here's an another iframe!</div>
        <div class="iframe-container">
            <iframe width="560" height="315" src="https://pendo-engage-jlj-test.netlify.app/another-iframe" title="iframe page" frameborder="2" allowfullscreen></iframe>
        </div>
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
.iframe-container {
    padding-top: 5px;
}
.iframe-label {
    padding-top: 20px;
    font-weight: bold;
};
</style>
