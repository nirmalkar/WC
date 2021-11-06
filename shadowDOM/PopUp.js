const template = document.createElement('template')

template.innerHTML = `
    <link rel="stylesheet" href="./css/popup.css">
    <div class="popup-container">
    <div class="popup-button">
    <div class="avatar-container">
    <img class="avatar" alt="avatar"/>
    <div class="name">Hemant Nirmalkar</div>
    </div>
    </div>
        <div class="popup-content">
        <div class="popup-header">
        <img class="header-img" src="https://avatars.githubusercontent.com/u/50173564?v=4" alt="avatar"/>
        <div class="close">
        <div class="line1"></div>
        <div class="line2"></div>
        </div>
        </div>
        <a class="social-link instagram" href="https://www.instagram.com/monty_davinci/" rel="noreferrer noopener" target="_blank">
        <div class="row">
        <img class="instagram-img" src="./images/instagram.svg" alt="instagram"/>
        <div class="social-id">@montydavinci</div>
        </div>
        </a>
        <a class="social-link twitter" href="https://twitter.com/nirmalkar_" rel="noreferrer" target="_blank">
        <div class="row">
        <img class="twitter-img" src="./images/twitter.svg" alt="twitter"/>
        <div class="social-id">@nirmalkar_</div>
        </div>
        </div>
        </a>
    </div>

`

class PopUp extends HTMLElement {
    constructor() {
        super()
        this.showModal = false
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('.avatar').src =
            this.getAttribute('avatar')
    }

    toggleModalVisible() {
        let modalDisplay =
            this.shadowRoot.querySelector('.popup-content').style.display
        const isModalHidden = modalDisplay === '' || modalDisplay === 'none'
        if (isModalHidden) {
            this.shadowRoot.querySelector('.popup-content').style.display =
                'block'
        } else {
            this.shadowRoot.querySelector('.popup-content').style.display =
                'none'
        }
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('.close')
            .addEventListener('click', this.toggleModalVisible.bind(this))
        this.shadowRoot
            .querySelector('.popup-button')
            .addEventListener('click', this.toggleModalVisible.bind(this))
    }
}

window.customElements.define('pop-up', PopUp)
