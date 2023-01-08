#!/usr/bin/python3
# Copyright 2022 Marcus Müller
# SPDX-License-Identifier: BSD-3-Clause
# Find the license text under https://spdx.org/licenses/BSD-3-Clause.html

from evdev import InputDevice, ecodes
from subprocess import run

# /dev/input/event8 is my keyboard. you can easily figure that one
# out using `ls -lh /dev/input/by-id`
dev = InputDevice("/dev/input/event0")

# we know that right now, "Windows Key is not pressed"
ctrl_pressed = False
# suspending once per keypress is enough
suspend_ongoing = False

# read_loop is cool: it tells Linux to put this process to rest
# and only resume it, when there's something to read, i.e. a key
# has been pressed, released
for event in dev.read_loop():

  # only care about keyboard keys
  if event.type == ecodes.EV_KEY:

    # check whether this is left (27) or right (97) CTRL key
    if event.code in (29, 97):
      # now check whether we're releasing the key (val=00)
      # or pressing (1) or holding it for a while (2)
      if event.value == 0:
        ctrl_pressed = False
        # clear the suspend_ongoing (if set)
        suspend_ongoing = False
      if event.value in (1, 2):
        ctrl_pressed = True
    # We only check whether the end key is *held* for a while
    # (to avoid accidental suspend)
    # key code for m is 50
    elif not suspend_ongoing and ctrl_pressed and event.code == 50 and event.value == 2:
      # Check if monitor is on or off
      active_monitors = run(["/home/elien/hdmi-info.sh"], capture_output=True, text=True)
      if(active_monitors.stdout.splitlines()[0].endswith('0')):
        # Monitor is off -> turn on
        run(["/home/elien/hdmi-on.sh"])
      else:
        # Monitor is on -> turn off
        run(["/home/elien/hdmi-off.sh"])
      # disable until win key is released
      suspend_ongoing = True
