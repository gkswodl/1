let 온도 = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 100000)
    pins.analogWritePin(AnalogPin.P2, 1023)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
})
basic.forever(function () {
    온도 = input.temperature()
    if (온도 >= 25) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.showNumber(온도)
})
