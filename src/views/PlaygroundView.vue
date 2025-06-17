<template>
    <div class="playground">
        <h1 class="playground-h1">Playground</h1>
        <p>Here's a playground, go and click on a bunch of things.</p>
        <div class="flex-container">
            <v-btn elevation="2" title="some-buton" @click="showAlert('You clicked me!')">Click me!</v-btn>
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
        <div class="shadow-dom-section">
            <h2>Shadow DOM Playground</h2>
            <p>This section contains elements within Shadow DOM that you can use to test Pendo integration.</p>
            <shadow-playground></shadow-playground>
        </div>
    </div>
</template>

<script>
class ShadowPlayground extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        const container = document.createElement('div');
        container.setAttribute('class', 'shadow-container');
        
        const style = document.createElement('style');
        style.textContent = `
            .shadow-container {
                padding: 20px;
                background: #f5f5f5;
                border-radius: 8px;
                margin: 20px 0;
            }
            .shadow-button {
                padding: 10px 20px;
                margin: 5px;
                border: none;
                border-radius: 4px;
                background: #4CAF50;
                color: white;
                cursor: pointer;
            }
            .shadow-input {
                padding: 8px;
                margin: 5px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            .shadow-text {
                margin: 10px 0;
                color: #333;
            }
        `;
        
        const button = document.createElement('button');
        button.setAttribute('class', 'shadow-button');
        button.setAttribute('data-pendo-id', 'shadow-button');
        button.textContent = 'Shadow DOM Button';
        button.addEventListener('click', () => {
            alert('Clicked Shadow DOM button!');
        });
        
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'shadow-input');
        input.setAttribute('data-pendo-id', 'shadow-input');
        input.setAttribute('placeholder', 'Type something...');
        
        const text = document.createElement('p');
        text.setAttribute('class', 'shadow-text');
        text.setAttribute('data-pendo-id', 'shadow-text');
        text.textContent = 'This text is inside Shadow DOM';
        
        container.appendChild(button);
        container.appendChild(input);
        container.appendChild(text);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('shadow-playground', ShadowPlayground);

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
.shadow-dom-section {
    margin-top: 40px;
    padding: 20px;
    border-top: 2px solid #eee;
};
</style>
