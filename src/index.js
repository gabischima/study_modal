import '../style/index.css';

let ModalInstance = null

export default class GSMModal {
	constructor() {
		if (!ModalInstance) {
			ModalInstance = this
		}
		this.init()
		return ModalInstance
	}

	static getInstance() {
		if (!ModalInstance) {
			ModalInstance = new GSMModal()
		}
		return ModalInstance
  }

  init () {
    const triggers = document.querySelectorAll("[gsm-modal-trigger]")
    const modal = document.querySelector("[gsm-modal]")

    if (triggers) {
      triggers.addEventListener('click', (e) => {
        console.log(triggers)
      })
    } else {
			console.warn('Element [gsm-modal-trigger] was not found. Please, make sure the attribute has been set.')
    }
  }

  open () {

  }

  close () {

  }
}