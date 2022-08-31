/**
 * -receivedNumber로 변수를 선언해야 함
 * 
 * -좌측: 송신부(버튼입력) / 우측:수신부(출력)
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(1)
        basic.showString("수신받은 라디오 전송 수는 1입니다.")
    }
    if (receivedNumber == 2) {
        basic.showNumber(2)
        basic.showString("수신받은 라디오 전송 수는 2입니다.")
    }
    if (receivedNumber == 3) {
        basic.showNumber(3)
        basic.showString("수신받은 라디오 전송 수는 3입니다.")
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
