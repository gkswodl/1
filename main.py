def on_button_pressed_a():
    pins.analog_write_pin(AnalogPin.P1, 1023)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    pins.analog_write_pin(AnalogPin.P1, 0)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P2, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

pins.analog_write_pin(AnalogPin.P1, 0)