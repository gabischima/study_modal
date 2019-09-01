import '../style/modal.css';
import { iconClose, iconArrowLeft, iconArrowRight } from './icons.js';

let ModalInstance = null

export default class GSMModal {
	constructor() {

		this.init()

		if (!ModalInstance) {
			ModalInstance = this
    }

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

    if (triggers) {
      this.addToDOM()

      triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault()
          this.open()
        })
      })

      document.addEventListener('click', (e) => {
        if (!this.modal.classList.contains('_open')) return
        if (e.target.hasAttribute('gsm-modal-trigger')) return
        if (this.modalContent.contains(e.target)) return
        this.close()
      }, false);

      this.btnClose.addEventListener('click', (e) => this.close())

    } else {
			console.warn('Element [gsm-modal-trigger] was not found. Please, make sure the attribute has been set.')
    }
  }

  addToDOM () {
    const modalWrapperElement = document.createElement('div')

    const modal = '<div class="gsm-modal"><div class="gsm-modal__close">' + iconClose + '</div><div class="gsm-modal__content"><div class="gsm-modal__content__arrow _left">' + iconArrowLeft + '</div><div class="gsm-modal__content__img"><img /></div><div class="gsm-modal__content__arrow _right">' + iconArrowRight + '</div></div></div>'

    modalWrapperElement.innerHTML = modal

    document.body.appendChild(modalWrapperElement)
  }

  open () {
    this.modal.classList.add('_open')
  }

  close () {
    this.modal.classList.remove('_open')
  }

  get modal () {
    return document.querySelector('.gsm-modal')
  }

  get modalContent () {
    return document.querySelector('.gsm-modal__content')
  }

  get modalImage () {
    return document.querySelector('.gsm-modal__content__img').getElementsByTagName('img')
  }

  get btnClose () {
    return document.querySelector('.gsm-modal__close')
  }
}

window.onload = new GSMModal()