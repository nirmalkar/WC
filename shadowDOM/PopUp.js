const template = document.createElement('template')

template.innerHTML = `
    <link rel="stylesheet" href="./css/popup.css">
    <div class="popup-container">
    <div class="avatar-container">
    <img class="avatar" src="https://avatars2.githubusercontent.com/u/12097?s=460&v=4" alt="avatar"/>
    <div class="name">Hemant Nirmalkar</div>
    </div>
        <div class="popup-content">
        </div>
    </div>

`

class PopUp extends HTMLElement {
    constructor() {
        super()
        this.showModal = false
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('pop-up', PopUp)
