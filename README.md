# Light switches

1. Make the button work for each room to switch lights on or off. When the light is switched on or off, the corresponding `.on` or `.off` class should be added to the `div` with the class `room`.
2. The code for the individual rooms is redundant. Refactor the code to have one generic Room component that can be used for all rooms.
3. Make a button that will switch all lights on or off in all rooms at once, or turn them all on at once.
4. Add an input to allow the user to add a new Room to the existing rooms. The new room should also be possible to switch on and off.
5. Add routing so that you can enter each room. The URL should be `/room/:roomName`. The room name should be displayed in the header of the page, and you should have a link back to the main House page.
6. Add a feature that allows the user to set a timer for each light in each room. The timer should be set in minutes, and when the timer is up, the light should be switched off. The timer should be displayed in the room, and should be reset when the light is switched off or on.
