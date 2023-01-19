<template>
    <div class="iframe">
        <h1>Another iFrame</h1>
        <p>scroll to get to the bottom.....</p>
        <div class="scrolling-container">
            <p>wow so cool you got to the bottom</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AnotherIFrameView'
};
</script>

<style>
.iframe {
    padding: 20px;
}
.scrolling-container {
    height: 1500px;
    display: flex;
    flex-direction: column-reverse;
}
</style>
