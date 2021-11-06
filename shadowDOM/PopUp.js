const template = document.createElement('template')

template.innerHTML = `
    <link rel="stylesheet" href="./css/popup.css">
    <div class="popup-container">
    <div class="popup-button">
    <div class="avatar-container">
    <img class="avatar" alt="avatar"/>
    <div class="name"></div>
    </div>
    </div>
        <div class="popup-content">
        <div class="popup-header">
        <img class="header-img" alt="avatar"/>
        <div class="close">
        <div class="line1"></div>
        <div class="line2"></div>
        </div>
        </div>
        <a class="social-link instagram"  rel="noreferrer noopener" target="_blank">
        <div class="row">
        <img class="instagram-img" src="./images/instagram.svg" alt="instagram"/>
        <div class="social-id social-id-instagram"><slot name="instagram"/></div>
        </div>
        </a>
        <a class="social-link twitter"  rel="noreferrer" target="_blank">
        <div class="row">
        <img class="twitter-img" src="./images/twitter.svg" alt="twitter"/>
        <div class="social-id social-id-twitter"><slot name="twitter"/></div>
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
        const instagram = this.getAttribute('instagram')
        const twitter = this.getAttribute('twitter')
        this.shadowRoot.querySelector('.avatar').src =
            this.getAttribute('avatar')
        this.shadowRoot.querySelector('.header-img').src =
            this.getAttribute('avatar')
        if (instagram) {
            this.shadowRoot.querySelector('.instagram').href =
                this.getAttribute('instagram')
        } else {
            this.shadowRoot.querySelector('.instagram').onClick =
                'return false;'
            this.shadowRoot.querySelector(
                '.social-id-instagram'
            ).innerHTML = `No Instagram account found`
        }
        if (twitter) {
            this.shadowRoot.querySelector('.twitter').href =
                this.getAttribute('twitter')
        } else {
            this.shadowRoot.querySelector('.twitter').onClick = 'return false;'
            this.shadowRoot.querySelector(
                '.social-id-twitter'
            ).innerHTML = `No Twitter account found`
        }

        this.shadowRoot.querySelector('.name').innerHTML =
            this.getAttribute('name')
        this.shadowRoot.querySelector('.popup-button').style.width =
            this.getAttribute('buttonWidth')
        console.log(this.getAttribute('modalWidth'))
        this.shadowRoot.querySelector('.popup-content').style.width =
            this.getAttribute('modalWidth')
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
