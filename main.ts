let x = 0
let y = 0
let xCoche = 0
let yCoche = 0
let velocidadI = 0
let velocidadD = 0
basic.forever(function () {
    basic.clearScreen()
    x = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ))
    y = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    4
    ))
    xCoche = x - 2
    yCoche = (y - 1) * -1
    if (xCoche == 2) {
        velocidadI = -20
        velocidadD = 0
    } else if (xCoche == 1) {
        velocidadI = -10
        velocidadD = 0
    } else if (xCoche == 0) {
        velocidadI = 0
        velocidadD = 0
    } else if (xCoche == -1) {
        velocidadI = 0
        velocidadD = -10
    } else {
        velocidadI = 0
        velocidadD = -20
    }
    velocidadI = velocidadI + yCoche * 10
    velocidadD = velocidadD + yCoche * 10
    if (velocidadD == 0) {
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (velocidadD >= 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidadD)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(velocidadD))
    }
    if (velocidadI == 0) {
        maqueen.motorStop(maqueen.Motors.M1)
    } else if (velocidadI >= 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidadI)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(velocidadI))
    }
})
