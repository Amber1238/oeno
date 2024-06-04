input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(90)
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("draa1 m3 >")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(6)
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
    basic.showString("a")
})
basic.showString("Hall0 pr0833r schudd3n")
