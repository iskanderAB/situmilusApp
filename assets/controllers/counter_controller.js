import { Controller } from "@hotwired/stimulus";


export default class extends Controller {
    connect() {
        this.element.innerHTML = 'You have clicked me 0 time 🥲'

        this.counter = 0

        this.element.addEventListener('click', ()=> {
            this.counter ++
            this.element.innerHTML = this.counter
        })

    }
}