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
            <h2>3-Level Nested Shadow DOM Playground</h2>
            <p>This section contains a 3-level deep nested Shadow DOM structure. Each level has buttons with custom "name" attributes and other interactive elements. Perfect for testing Shadow DOM penetration and element targeting.</p>
            <shadow-playground></shadow-playground>
        </div>
    </div>
</template>

<script>
// Level 1 Shadow DOM
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
                border: 2px solid #4CAF50;
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
            .shadow-title {
                color: #4CAF50;
                font-weight: bold;
                margin-bottom: 10px;
            }
        `;
        
        const title = document.createElement('h3');
        title.setAttribute('class', 'shadow-title');
        title.textContent = 'Level 1 Shadow DOM';
        
        const button1 = document.createElement('button');
        button1.setAttribute('class', 'shadow-button');
        button1.setAttribute('name', 'level1-primary');
        button1.textContent = 'Level 1 Primary Button';
        button1.addEventListener('click', () => {
            alert('Clicked Level 1 Primary Button (name: level1-primary)');
        });
        
        const button2 = document.createElement('button');
        button2.setAttribute('class', 'shadow-button');
        button2.setAttribute('name', 'level1-secondary');
        button2.textContent = 'Level 1 Secondary Button';
        button2.addEventListener('click', () => {
            alert('Clicked Level 1 Secondary Button (name: level1-secondary)');
        });
        
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'shadow-input');
        input.setAttribute('name', 'level1-input');
        input.setAttribute('placeholder', 'Level 1 input (name: level1-input)');
        
        const text = document.createElement('p');
        text.setAttribute('class', 'shadow-text');
        text.setAttribute('name', 'level1-text');
        text.textContent = 'This text is inside Level 1 Shadow DOM (name: level1-text)';
        
        // Create Level 2 Shadow DOM element
        const level2Element = document.createElement('shadow-level2');
        
        container.appendChild(title);
        container.appendChild(button1);
        container.appendChild(button2);
        container.appendChild(input);
        container.appendChild(text);
        container.appendChild(level2Element);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

// Level 2 Shadow DOM
class ShadowLevel2 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        const container = document.createElement('div');
        container.setAttribute('class', 'shadow-container-l2');
        
        const style = document.createElement('style');
        style.textContent = `
            .shadow-container-l2 {
                padding: 15px;
                background: #e8f5e8;
                border-radius: 6px;
                margin: 15px 0;
                border: 2px solid #2196F3;
            }
            .shadow-button-l2 {
                padding: 8px 16px;
                margin: 4px;
                border: none;
                border-radius: 3px;
                background: #2196F3;
                color: white;
                cursor: pointer;
            }
            .shadow-input-l2 {
                padding: 6px;
                margin: 4px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .shadow-text-l2 {
                margin: 8px 0;
                color: #444;
                font-size: 14px;
            }
            .shadow-title-l2 {
                color: #2196F3;
                font-weight: bold;
                margin-bottom: 8px;
                font-size: 16px;
            }
        `;
        
        const title = document.createElement('h4');
        title.setAttribute('class', 'shadow-title-l2');
        title.textContent = 'Level 2 Shadow DOM';
        
        const button1 = document.createElement('button');
        button1.setAttribute('class', 'shadow-button-l2');
        button1.setAttribute('name', 'level2-action');
        button1.textContent = 'Level 2 Action Button';
        button1.addEventListener('click', () => {
            alert('Clicked Level 2 Action Button (name: level2-action)');
        });
        
        const button2 = document.createElement('button');
        button2.setAttribute('class', 'shadow-button-l2');
        button2.setAttribute('name', 'level2-submit');
        button2.textContent = 'Level 2 Submit Button';
        button2.addEventListener('click', () => {
            alert('Clicked Level 2 Submit Button (name: level2-submit)');
        });
        
        const input = document.createElement('input');
        input.setAttribute('type', 'email');
        input.setAttribute('class', 'shadow-input-l2');
        input.setAttribute('name', 'level2-email');
        input.setAttribute('placeholder', 'Level 2 email (name: level2-email)');
        
        const text = document.createElement('p');
        text.setAttribute('class', 'shadow-text-l2');
        text.setAttribute('name', 'level2-description');
        text.textContent = 'Nested inside Level 2 Shadow DOM (name: level2-description)';
        
        // Create Level 3 Shadow DOM element
        const level3Element = document.createElement('shadow-level3');
        
        container.appendChild(title);
        container.appendChild(button1);
        container.appendChild(button2);
        container.appendChild(input);
        container.appendChild(text);
        container.appendChild(level3Element);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

// Level 3 Shadow DOM
class ShadowLevel3 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        const container = document.createElement('div');
        container.setAttribute('class', 'shadow-container-l3');
        
        const style = document.createElement('style');
        style.textContent = `
            .shadow-container-l3 {
                padding: 10px;
                background: #ffe8e8;
                border-radius: 4px;
                margin: 10px 0;
                border: 2px solid #FF5722;
            }
            .shadow-button-l3 {
                padding: 6px 12px;
                margin: 3px;
                border: none;
                border-radius: 2px;
                background: #FF5722;
                color: white;
                cursor: pointer;
                font-size: 12px;
            }
            .shadow-input-l3 {
                padding: 4px;
                margin: 3px;
                border: 1px solid #bbb;
                border-radius: 2px;
                font-size: 12px;
            }
            .shadow-text-l3 {
                margin: 6px 0;
                color: #555;
                font-size: 12px;
            }
            .shadow-title-l3 {
                color: #FF5722;
                font-weight: bold;
                margin-bottom: 6px;
                font-size: 14px;
            }
            .shadow-checkbox-l3 {
                margin: 3px;
            }
        `;
        
        const title = document.createElement('h5');
        title.setAttribute('class', 'shadow-title-l3');
        title.textContent = 'Level 3 Shadow DOM (Deepest)';
        
        const button1 = document.createElement('button');
        button1.setAttribute('class', 'shadow-button-l3');
        button1.setAttribute('name', 'level3-final');
        button1.textContent = 'Level 3 Final Button';
        button1.addEventListener('click', () => {
            alert('Clicked Level 3 Final Button (name: level3-final)');
        });
        
        const button2 = document.createElement('button');
        button2.setAttribute('class', 'shadow-button-l3');
        button2.setAttribute('name', 'level3-deep');
        button2.textContent = 'Level 3 Deep Button';
        button2.addEventListener('click', () => {
            alert('Clicked Level 3 Deep Button (name: level3-deep)');
        });
        
        const button3 = document.createElement('button');
        button3.setAttribute('class', 'shadow-button-l3');
        button3.setAttribute('name', 'level3-nested');
        button3.textContent = 'Level 3 Nested Button';
        button3.addEventListener('click', () => {
            alert('Clicked Level 3 Nested Button (name: level3-nested)');
        });
        
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'shadow-input-l3');
        input.setAttribute('name', 'level3-data');
        input.setAttribute('placeholder', 'Deepest input (name: level3-data)');
        
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'shadow-checkbox-l3');
        checkbox.setAttribute('name', 'level3-check');
        
        const checkboxLabel = document.createElement('label');
        checkboxLabel.setAttribute('name', 'level3-label');
        checkboxLabel.textContent = 'Deep nested checkbox (name: level3-check)';
        
        const text = document.createElement('p');
        text.setAttribute('class', 'shadow-text-l3');
        text.setAttribute('name', 'level3-info');
        text.textContent = 'This is the deepest Shadow DOM level (name: level3-info)';
        
        container.appendChild(title);
        container.appendChild(button1);
        container.appendChild(button2);
        container.appendChild(button3);
        container.appendChild(input);
        container.appendChild(checkbox);
        container.appendChild(checkboxLabel);
        container.appendChild(text);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('shadow-playground', ShadowPlayground);
customElements.define('shadow-level2', ShadowLevel2);
customElements.define('shadow-level3', ShadowLevel3);

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
