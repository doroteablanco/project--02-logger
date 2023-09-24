input.onButtonPressed(Button.A, function () {
    radio.sendValue(log_control, 1)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue(log_control, 0)
    basic.showIcon(IconNames.No)
})
let log_control = ""
radio.setGroup(100)
basic.forever(function () {
	
})
