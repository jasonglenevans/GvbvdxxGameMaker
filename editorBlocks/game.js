var color = '#07f02a';
Blockly.defineBlocksWithJsonArray([

{
  "type": "game_on_tick",
  "message0": "When The Game's Frame Updates %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "inputsInline": true,
  "colour": color,
  "tooltip": "Runs Every Time The Games Frame Changes.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"
},
{
  "type": "game_on_resize",
  "message0": "When The Game Screen Is Resized %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "inputsInline": true,
  "colour": color,
  "tooltip": "When The Game Gets Resized, Then This Will Be Ran.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event"
},
{
  "type": "game_width",
  "message0": "Width Of Game Screen",
  "inputsInline": true,
  "output": null,
  "colour": color,
  "tooltip": "Gets The Width Of The Screen.",
  "helpUrl": "https://www.w3schools.com/jsref/prop_win_innerheight.asp"
},
{
  "type": "game_height",
  "message0": "Height Of Game Screen",
  "inputsInline": true,
  "output": "Number",
  "colour": color,
  "tooltip": "Gets The Height Of The Screen",
  "helpUrl": ""
},
{
  "type": "game_wait",
  "message0": "Wait For %1 Second(s) Then Do %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "after wait"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": color,
  "tooltip": "Wait's for that many seconds then runs the code below",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
},
{
  "type": "game_mouse_x",
  "message0": "Get The Cursor X Position",
  "inputsInline": true,
  "output": "Number",
  "colour": color,
  "tooltip": "Gets the cursor's X Position.",
  "helpUrl": ""
},
{
  "type": "game_on_mouse_move",
  "message0": "When The Cursor Moves %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "Cursor X",
      "variable": "Cursor X"
    },
    {
      "type": "field_variable",
      "name": "Cursor Y",
      "variable": "Cursor Y"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statement"
    }
  ],
  "inputsInline": true,
  "colour": color,
  "tooltip": "It Runs When The Cursor Moves Around The Game Screen.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event"
},
{
  "type": "game_keydetector",
  "message0": "Add Key Detector %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "var",
      "variable": "Key ID"
    }
  ],
  "colour": color,
  "tooltip": "It Will Add Key Detection To Your Game, It Will Output A Number Trough The Variable.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown"
},
{
  "type": "game_open_page",
  "message0": "Open Page %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Opens A Page (In A New Tab) With The URL.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/open"
},
{
  "type": "game_open_popup",
  "message0": "Open Popup %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Opens A Popup Window With The URL.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/open"
},
{
  "type": "game_resize_to",
  "message0": "Resize To: %1 Width: %2 Height: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "width"
    },
    {
      "type": "input_value",
      "name": "height"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Resizes The Window. (Dangerous)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo"
},
{
  "type": "game_move_to",
  "message0": "Move To: %1 X: %2 Y: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x"
    },
    {
      "type": "input_value",
      "name": "y"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Moves The Window. (Dangerous)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/moveTo"
},
{
  "type": "game_key_pressed",
  "message0": "Key %1 Pressed? On %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "keycode",
      "options": [
        [
          "Up",
          "38"
        ],
        [
          "Down",
          "40"
        ],
        [
          "Left",
          "37"
        ],
        [
          "Right",
          "39"
        ],
		[
		  "Space",
		  "32"
		],
		[
		  "Enter",
		  "13"
		],
		[
		  "Shift",
		  "16"
		],
		[
		  "a",
		  "65"
		],
		[
		  "b",
		  "66"
		],
		[
		  "c",
		  "67"
		],
		[
		  "d",
		  "68"
		],
		[
		  "e",
		  "69"
		],
		[
		  "f",
		  "70"
		],
		[
		  "g",
		  "71"
		],
		[
		  "h",
		  "72"
		],
		[
		  "i",
		  "73"
		],
		[
		  "j",
		  "74"
		],
		[
		  "k",
		  "75"
		],
		[
		  "l",
		  "76"
		],
		[
		  "m",
		  "77"
		],
		[
		  "n",
		  "78"
		],
		[
		  "o",
		  "79"
		],
		[
		  "p",
		  "80"
		],
		[
		  "q",
		  "81"
		],
		[
		  "r",
		  "82"
		],
		[
		  "s",
		  "83"
		],
		[
		  "t",
		  "84"
		],
		[
		  "u",
		  "85"
		],
		[
		  "v",
		  "86"
		],
		[
		  "w",
		  "87"
		],
		[
		  "x",
		  "88"
		],
		[
		  "y",
		  "89"
		],
		[
		  "z",
		  "90"
		],
		[
		  "1",
		  "49"
		],
		[
		  "2",
		  "50"
		],
		[
		  "3",
		  "51"
		],
		[
		  "4",
		  "52"
		],
		[
		  "5",
		  "53"
		],
		[
		  "6",
		  "54"
		],
		[
		  "7",
		  "55"
		],
		[
		  "8",
		  "56"
		],
		[
		  "9",
		  "57"
		],
		[
		  "0",
		  "48"
		]
      ]
    },
    {
      "type": "field_variable",
      "name": "keyvar",
      "variable": "Key ID"
    }
  ],
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": color,
  "tooltip": "Gets The Key Pressed On The Key Array. (Requres The Key Detector)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown"
},
{
  "type": "game_add_mouse_detector",
  "message0": "Add Mouse Detector",
  "colour": color,
  "tooltip": "Adds A Mouse Detector So You Can Tell If The Mouse Is Down",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown"
},
{
  "type": "game_mouse_down",
  "message0": "Mouse Down?",
  "output": "Boolean",
  "colour": color,
  "tooltip": "(Needs Mouse Detector To Work) Gets If The Mouse Is Down",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown"
},
{
  "type": "game_full_screen",
  "message0": "Go Full Screen",
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Makes The Game Go Full Screen.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"
},
{
  "type": "game_add_lock",
  "message0": "Hide Mouse When Focused",
  "inputsInline": true,
  "colour": color,
  "tooltip": "It Will Remove The Mouse, But For Movement You Will Need To Use The Mouse Positions As For The Speed Of The Mouse",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API"
},
{
  "type": "game_focused",
  "message0": "Is The Document Focused?",
  "inputsInline": false,
  "output": null,
  "colour": color,
  "tooltip": "Outputs If The Game Is Focused.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus"
}
]);

Blockly.JavaScript['game_on_tick'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function ongametick() {\n' + statements_code + '\n window.requestAnimationFrame(ongametick);\n};\n ongametick();\n';
  return code;
};
Blockly.JavaScript['game_on_resize'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.onresize = function () {\n ' + statements_code + ' \n};\n';
  return code;
};
Blockly.JavaScript['game_width'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.innerWidth';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['game_height'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.innerHeight';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['game_wait'] = function(block) {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_after_wait = Blockly.JavaScript.statementToCode(block, 'after wait');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setTimeout(() => {\n' + statements_after_wait + '\n}, ' + (value_seconds * 1000) + ');\n';
  return code;
};
Blockly.JavaScript['game_on_mouse_move'] = function(block) {
  var variable_cursor_x = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Cursor X'), Blockly.Variables.NAME_TYPE);
  var variable_cursor_y = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Cursor Y'), Blockly.Variables.NAME_TYPE);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.onmousemove = function () {\n' + variable_cursor_x + ' = window.event.x;\n' + variable_cursor_y + ' = window.event.y;\n ' + statements_statement + '};\n';
  return code;
};
Blockly.JavaScript['game_keydetector'] = function(block) {
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable + ' = [];\n function checkKey(e) {\n var event = window.event ? window.event : e;\n if (' + variable + '.indexOf(event.keyCode) + 1 == 0) {\n' + variable + '.unshift(event.keyCode);\n };\n};\n document.onkeydown = function (e) { checkKey(e); };\n document.onkeyup = function (e) {\nvar event = window.event ? window.event : e;\ndelete ' + variable + '[' + variable + '.indexOf(event.keyCode)];\n};\n';
  return code;
};
Blockly.JavaScript['game_open_page'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['game_open_popup'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open(' + value_name + ',"","",200,200);\n';
  return code;
};
Blockly.JavaScript['game_resize_to'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.resizeTo(' + value_width + ',' + value_height + ');\n';
  return code;
};
Blockly.JavaScript['game_move_to'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.moveTo(' + value_x + ',' + value_y + ');\n';
  return code;
};
Blockly.JavaScript['game_key_pressed'] = function(block) {
  var dropdown_keycode = block.getFieldValue('keycode');
  var variable_keyvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('keyvar'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '!(' + variable_keyvar + '.indexOf(' + dropdown_keycode + ') + 1 == 0)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['game_add_mouse_detector'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'var isMouseDown = false;\ndocument.body.onmousedown = function() {\nisMouseDown = true;\n};\ndocument.body.onmouseup = function() {\nisMouseDown = false;\n};\n';
  return code;
};
Blockly.JavaScript['game_mouse_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'isMouseDown';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['game_full_screen'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'try {\ndocument.documentElement.requestFullscreen();\n} catch(e) {\nwindow.alert("Your Browser Does Not Support The Full Screen Method Used, Or Needs To Be Focused.");\n};\n';
  return code;
};
Blockly.JavaScript['game_add_lock'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.addEventListener("click", function () {\n    document.body.requestPointerLock();\n});\n';
  return code;
};
Blockly.JavaScript['game_focused'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.hasFocus()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};