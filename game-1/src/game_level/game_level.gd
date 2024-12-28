extends Node

@onready var pause_menu = $CanvasLayer/PauseMenu
@onready var state_2 = $CanvasLayer/state_2
@onready var timer = $CanvasLayer/Timer

var is_on = 0

var is_paused = false
	
func _process(delta):
	if Input.is_action_just_pressed("pause"):
		handlePause()

func handlePause():
	if is_paused:
		Utils.pause_music()
		pause_menu.hide()
		Engine.time_scale = 1
	else:
		Utils.play_music()
		pause_menu.show()
		Engine.time_scale = 0
	is_paused = !is_paused

func inc_state():
	is_on = (is_on + 1) % 2

func _on_timer_timeout():
	if is_on == 0:
		state_2.hide()
	else:
		state_2.show()
	inc_state()
	timer.start()
	
