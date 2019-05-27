class Tooltip extends HTMLElement {
    constructor() {
        console.log('it is working');
    }
}


customElements.define('uc-tooltip', Tooltip);