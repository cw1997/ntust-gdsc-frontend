const {add} = require("./math")
const {xor} = require("./logic")

module.exports = {
    MyCls: class MyCls {
        #dom_app = undefined
        constructor() {
            this.#dom_app = document.getElementById("app")
            this.#my_private_method()
            this.my_public_method()
        }
        #my_private_method() {
            const sum = add(a, b)
            this.#dom_app.innerHTML += `a + b = ${sum}<br />`
        }
        my_public_method() {
            const result = xor(a, b)
            this.#dom_app.innerHTML += `a xor b = ${result}<br />`
        }
    }
}