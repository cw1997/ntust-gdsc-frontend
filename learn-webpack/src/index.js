const {MyCls} = require("./cls.js")

window.onload = function () {
    const cls = new MyCls()
    // cls.#my_private_method()
    cls.my_public_method()
}