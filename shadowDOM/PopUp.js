const template = document.createElement('template')

template.innerHTML = `
    <link rel="stylesheet" href="./css/popup.css">
    <div class="popup-container">
    <div class="avatar-container">
    <img class="avatar" src="https://avatars.githubusercontent.com/u/50173564?v=4" alt="avatar"/>
    <div class="name">Hemant Nirmalkar</div>
    </div>
        <div class="popup-content">
        <div class="popup-header">
        <img class="header-img" src="https://avatars.githubusercontent.com/u/50173564?v=4" alt="avatar"/>
        <div class="close">
        <div class="line1"></div>
        <div class="line2"></div>
        </div>
        </div>
        <div class"row instagram"></div>
        <div class="row twitter"></div>
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
