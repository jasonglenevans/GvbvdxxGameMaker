var color = '#5d9642';
var gpScripts = [ 
    "let gamepadIsConnected = false;",
	'window.addEventListener("gamepadconnected", (event) => {',
	"    console.log('a gamepad was connected.'); if ( event.gamepad.index == 0) { gamepadIsConnected = true; };",
	"});",
	'window.addEventListener("gamepaddisconected", (event) => {',
	"    console.log('a gamepad was disconnected.'); if ( event.gamepad.index == 0) { gamepadIsConnected = false; };",
	"});"
];
Blockly.defineBlocksWithJsonArray([

{
  "type": "gamepad",
  "message0": "load gamepad scripts",
  "inputsInline": true,
  "colour": color,
  "tooltip": "this is required to do all the gamepad stuff",
  "helpUrl": "https://gamepad-tester.com/for-developers"
},
{
  "type": "gamepad_stickaxis",
  "message0": "Get Player  %1 Stick  %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "playerNumber",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ],
        [
          "3",
          "2"
        ],
        [
          "4",
          "3"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "stick",
      "options": [
        [
          "1 X",
          "0"
        ],
        [
          "1 Y",
          "1"
        ],
        [
          "2 X",
          "2"
        ],
        [
          "2 Y",
          "3"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": color,
  "tooltip": "gets the stick axis of a gamepad",
  "helpUrl": "https://gamepad-tester.com/for-developers"
},
{
  "type": "gamepad_isconnected",
  "message0": "Are there any gamepads connected?",
  "inputsInline": true,
  "output": "Boolean",
  "colour": color,
  "tooltip": "outputs if any gamepads are connected",
  "helpUrl": "https://gamepad-tester.com/for-developers"
},
{
  "type": "gamepad_button_pushed",
  "message0": "button %1 on controller %2 is pressed?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "A",
          "0"
        ],
        [
          "B",
          "1"
        ],
        [
          "X",
          "2"
        ],
        [
          "Y",
          "3"
        ],
        [
          "L",
          "4"
        ],
        [
          "R",
          "5"
        ],
        [
          "ZL",
          "6"
        ],
        [
          "LR",
          "7"
        ],
        [
          "BACK",
          "8"
        ],
        [
          "START",
          "9"
        ],
        [
          "LEFT",
          "14"
        ],
        [
          "RIGHT",
          "15"
        ],
        [
          "UP",
          "12"
        ],
        [
          "DOWN",
          "13"
        ],
        [
          "EXTRA1",
          "17"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "controller",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ],
        [
          "3",
          "2"
        ],
        [
          "4",
          "3"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": color,
  "tooltip": "Tells If A Certain Button Is Pressed",
  "helpUrl": "https://gamepad-tester.com/for-developers"
}

]);
// use navigator.getGamepads(); to get gamepad info
Blockly.JavaScript['gamepad'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '//gamepad scripts\n ' + gpScripts.join('\n') + '\n';
  return code;
};
Blockly.JavaScript['gamepad_stickaxis'] = function(block) {
  var dropdown_playernumber = block.getFieldValue('playerNumber');
  var dropdown_stick = block.getFieldValue('stick');
  // TODO: Assemble JavaScript into code variable.
  var code = 'navigator.getGamepads()[' + dropdown_playernumber + '].axes[' + dropdown_stick + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gamepad_isconnected'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'gamepadIsConnected';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gamepad_button_pushed'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  var dropdown_controller = block.getFieldValue('controller');
  // TODO: Assemble JavaScript into code variable.
  var code = 'navigator.getGamepads()[' + dropdown_controller + '].buttons[' + dropdown_button + '].pressed';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};