import '../style/modal.css';
import { iconClose, iconArrowLeft, iconArrowRight } from './icons.js';

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
    const images = document.querySelectorAll("[gsm-modal-image]")
    if (images) {
      this.addToDOM()
      images.forEach((image) => {
        image.addEventListener('click', (e) => {
          this.open()
          this.modalImage.src = e.target.getAttribute('gsm-modal-image')
        })
      })
      document.addEventListener('click', (e) => {
        if (!this.modal.classList.contains('_open') || this.modalContent.contains(e.target) || e.target.hasAttribute('gsm-modal-image')) return
        this.close()
      })

      this.arrowLeft.addEventListener('click', () => {
        for(var index = 0; index <= images.length; index++) {
          if (images[index].getAttribute('gsm-modal-image') === this.currentImage) {
            var prev = index - 1
            if (prev < 0) {
              prev = images.length - 1
            }
            this.modalImage.src = images[prev].getAttribute('gsm-modal-image')
            return
          }
        }
      })

      this.arrowRight.addEventListener('click', () => {
        for(var index = 0; index <= images.length; index++) {
          if (images[index].getAttribute('gsm-modal-image') === this.currentImage) {
            var next = index + 1
            if (next === images.length) {
              next = 0
            }
            this.modalImage.src = images[next].getAttribute('gsm-modal-image')
            return
          }
        }
      })
      this.btnClose.addEventListener('click', () => this.close())
    } else {
			console.warn('Element [gsm-modal-image] was not found. Please, make sure the attribute has been set.')
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

  get arrowLeft () {
    return document.querySelector('.gsm-modal__content__arrow._left')
  }

  get arrowRight () {
    return document.querySelector('.gsm-modal__content__arrow._right')
  }

  get modalImage () {
    return document.querySelector('.gsm-modal__content__img').getElementsByTagName('img')[0]
  }

  get currentImage () {
    const parts = this.modalImage.src.split('/')
    return parts[parts.length - 1]
  }

  get btnClose () {
    return document.querySelector('.gsm-modal__close')
  }
}

window.onload = new GSMModal()