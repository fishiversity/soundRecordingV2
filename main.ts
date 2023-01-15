let data: number[] = []
// Record about 1.3 seconds of sound
input.onButtonPressed(Button.A, function () {
    data = []
    for (let index = 0; index < 20000; index++) {
        data.push(pins.analogReadPin(AnalogPin.P6))
        basic.pause(80)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= data.length; index++) {
        let list: number[] = []
        pins.analogSetPeriod(AnalogPin.P0, list[index])
    }
})
