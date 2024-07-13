"use strict";

Vue.component("counter", {
    template: `
    <div>
    <p>{{ counter }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    </div>
    `,
    data() {
        return {
            counter: 0,
        };
    }
})

new Vue({
    el: "#app",
    data: {},
})

