<template>
    <div class="playground">
        <h1 class="playground-h1">Playground</h1>
        <p>Here's a playground, go and click on a bunch of things.</p>
        <div class="flex-container">
            <v-btn elevation="2" v-on:click="showAlert('You clicked me!')">Click me!</v-btn>
            <v-btn elevation="2" id="some-id-rs12341234abcdabcd">dynamic id</v-btn>
            <!-- <v-btn class="a-class-rs9999aaaa9999aaaa">dynamic class</v-btn> -->
            <v-btn elevation="2" id="rs12341234abcdabcd">invalid</v-btn>
            <v-btn elevation="2" data-meta-id="335dfe1c1f324c479a24bd8b5e1cb454">data-meta-id</v-btn>
        </div>
        <br/>
        <div class="a-class-rs9999aaaa9999aaaa" style="background-color: red; height: 30px; width: 30px;"></div>
        <br/>
        <v-select
          :items="items"
          class="dropdown"
          id="dropdown-id"
          label="Outlined style"
          outlined
        ></v-select>
    </div>
</template>

<script>
export default {
    name: 'PlaygroundView',
    data() {
        return {
            items: ['foo', 'bar', 'fizz', 'buzz']
        }
    },
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
.dropdown {
    width: 250px;
}
/* .a-class-rs9999aaaa9999aaaa {
    background-color: red;
    height: 30px;
    width: 30px;
} */
</style>
