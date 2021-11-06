const template = document.createElement('template')

template.innerHTML = `
    <style>
    </style>
    <div id="popup-container">
        <div id="popup-content">
            Modal
        </div>
    </div>

`

class PopUp extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('pop-up', PopUp)
