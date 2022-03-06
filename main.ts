function flash () {
    basic.showLeds(`
        # . # . #
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        `)
    for (let index = 0; index < 25; index++) {
        qkfrrl += 10
        basic.pause(50)
        led.setBrightness(qkfrrl)
    }
    for (let index = 0; index < 25; index++) {
        qkfrrl += -10
        basic.pause(50)
        led.setBrightness(qkfrrl)
    }
}
let qkfrrl = 0
qkfrrl = 3
basic.forever(function () {
    while (true) {
        flash()
    }
})
