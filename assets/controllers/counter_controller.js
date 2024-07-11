import { Controller } from "@hotwired/stimulus";


export default class extends Controller {
    static targets = ['counter']
    connect() {
        this.counter = 0
    }

    increment() {
        this.counter++;
        this.counterTarget.innerHTML = this.counter;
    }
}