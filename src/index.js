import '../style/modal.css';
import { iconClose, iconArrowLeft, iconArrowRight } from './icons.js';

let ModalInstance = null

export default class GSMModal {
  constructor() {
    this.images = []
    this.selectedIndex = null
    if (!ModalInstance) {
      ModalInstance = this
    }
    this.init()
    return ModalInstance
  }

  static getInstance () {
    if (!ModalInstance) {
      ModalInstance = new GSMModal()
    }
    return ModalInstance
  }

  init () {
    this.images = document.querySelectorAll("[gsm-modal-image]")
    if (this.images) {
      this.addToDOM()
      this.images.forEach((image, index) => {
        image.addEventListener('click', (e) => {
          this.open()
          this.modalImage.src = e.target.getAttribute('gsm-modal-image')
          this.selectedIndex = index
        })
      })

      document.addEventListener('click', (e) => {
        if (!this.modal.classList.contains('_open') || (this.arrowLeft.contains(e.target) || this.arrowRight.contains(e.target) || this.modalImage.contains(e.target)) || e.target.hasAttribute('gsm-modal-image')) return
        this.close()
        this.selectedIndex = null
      })

      document.addEventListener('keydown', e => {
        if (this.modal.classList.contains('_open')) {
          // key left = 37
          // key right = 39
          if (e.keyCode == 37) {
            e.preventDefault()
            this.goPrevious()
          } else if (e.keyCode == 39) {
            e.preventDefault()
            this.goNext()
          }
        }
      })

      this.arrowLeft.addEventListener('click', () => {
        this.goPrevious()
        return
      })

      this.arrowRight.addEventListener('click', () => {
        this.goNext()
        return
      })

      this.btnClose.addEventListener('click', () => this.close())
    } else {
      console.warn('Element [gsm-modal-image] was not found. Please, make sure the attribute has been set.')
    }
  }

  goNext () {
    var next = this.selectedIndex + 1
    if (next === this.images.length) {
      next = 0
    }
    this.selectedIndex = next
    this.modalImage.src = this.images[next].getAttribute('gsm-modal-image')
  }

  goPrevious () {
    var prev = this.selectedIndex - 1
    if (prev < 0) {
      prev = this.images.length - 1
    }
    this.selectedIndex = prev
    this.modalImage.src = this.images[prev].getAttribute('gsm-modal-image')
  }

  addToDOM () {
    const modalWrapperElement = document.createElement('div')
    const modal = '<div class="gsm-modal"><div class="gsm-modal__close">' + iconClose + '</div><div class="gsm-modal__content"><div class="gsm-modal__content__arrow _left">' + iconArrowLeft + '</div><div class="gsm-modal__content__img"><img alt="" /></div><div class="gsm-modal__content__arrow _right">' + iconArrowRight + '</div></div></div>'
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

  fileName (str) {
    const parts = str.split('/')
    return parts[parts.length - 1]
  }

  get btnClose () {
    return document.querySelector('.gsm-modal__close')
  }
}

window.onload = new GSMModal()