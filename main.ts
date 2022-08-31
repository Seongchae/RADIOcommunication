radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showNumber(4)
    }
    if (receivedNumber == 5) {
        basic.showNumber(5)
    }
    if (receivedNumber == 6) {
        basic.showNumber(6)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
