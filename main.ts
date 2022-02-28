input.onPinPressed(TouchPin.P2, function () {
    if (led.brightness() == 0) {
        led.setBrightness(255)
    } else {
        led.setBrightness(0)
    }
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    5
    ))
})
