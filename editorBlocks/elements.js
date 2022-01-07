var color = '#c72020';
Blockly.defineBlocksWithJsonArray([
  
  
{
  "type": "elements_delete_element",
  "message0": "Delete Element %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "Element",
      "variable": "Element"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Deletes the element.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"
},
{
  "type": "elements_create_element",
  "message0": "Create Element %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "elementID",
      "options": [
        [
          "Div (group)",
          "DIV"
        ],
        [
          "Image",
          "IMG"
        ],
        [
          "Button",
          "BUTTON"
        ],
        [
          "Text (Small)",
          "P"
        ],
        [
          "Text (Big)",
          "H1"
        ],
        [
          "Text Box",
          "TEXTAREA"
        ],
        [
          "Audio Player",
          "AUDIO"
        ],
        [
          "Clickable Link",
          "A"
        ],
        [
          "Separtor",
          "HR"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": color,
  "tooltip": "Creates Element Tags (Not All Elements Are Listed)",
  "helpUrl": ""
},
{
  "type": "elements_set_setting",
  "message0": "Setting On %1 Set %2 To %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "element",
      "variable": "Element"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Directory",
          "src"
        ],
        [
          "Value (Inner HTML)",
          "innerHTML"
        ],
        [
          "Input Element Value",
          "value"
        ],
        [
          "Id",
          "id"
        ],
        [
          "Element Color",
          "style.backgroundColor"
        ],
        [
          "Text Color",
          "style.color"
        ],
        [
          "Image Width",
          "width"
        ],
        [
          "Image Height",
          "height"
        ],
        [
          "Element Width",
          "style.width"
        ],
        [
          "Element Height",
          "style.height"
        ],
        [
          "Positioning type",
          "style.position"
        ],
        [
          "X position (Needs A Position type to work)",
          "style.left"
        ],
        [
          "Y position (Needs A Position type to work)",
          "style.top"
        ],
        [
          "CSS Image Filter (Effects)",
          "style.filter"
        ],
        [
          "Cursor When Hovered",
          "style.cursor"
        ],
		[
          "Can Be Resized?",
          "style.resize"
        ],
        [
          "Font",
          "style.fontFamily"
        ],
        [
          "Preserves Pitch",
          "preservesPitch"
        ],
        [
          "PlayBack Rate",
          "playbackRate"
        ],
        [
          "Has Visible Controls?",
          "controls"
        ],
        [
          "Loops?",
          "loop"
        ],
        [
          "Layer",
          "style.zIndex"
        ],
        [
          "Volume",
          "volume"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "setting_val"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Sets a setting on a element.",
  "helpUrl": ""
},
{
  "type": "elements_bg_color",
  "message0": "Set Background Color To %1",
  "args0": [
    {
      "type": "input_value",
      "name": "bg_color",
      "check": "Colour"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Sets The Color Of The Background",
  "helpUrl": ""
},
{
  "type": "elements_put_screen",
  "message0": "Put %1 On Screen",
  "args0": [
    {
      "type": "field_variable",
      "name": "Element",
      "variable": "Element"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Sets The Color Of The Background",
  "helpUrl": ""
},
{
  "type": "elements_get",
  "message0": "Get %1 Setting %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "Element",
      "variable": "Element"
    },
    {
      "type": "field_dropdown",
      "name": "Setting",
      "options": [
        [
          "Directory",
          "src"
        ],
        [
          "Value (Inner HTML)",
          "innerHTML"
        ],
        [
          "Input Element Value",
          "value"
        ],
        [
          "Id",
          "id"
        ],
        [
          "Element Color",
          "style.backgroundColor"
        ],
        [
          "Text Color",
          "style.color"
        ],
        [
          "Image Width",
          "width"
        ],
        [
          "Image Height",
          "height"
        ],
        [
          "Element Width",
          "style.width"
        ],
        [
          "Element Height",
          "style.height"
        ],
        [
          "Positioning type",
          "style.position"
        ],
        [
          "X position (Needs A Position type to work)",
          "style.left"
        ],
        [
          "Y position (Needs A Position type to work)",
          "style.top"
        ],
        [
          "CSS Image Filter (Effects)",
          "style.filter"
        ],
        [
          "Cursor When Hovered",
          "style.cursor"
        ],
        [
          "Can Be Resized?",
          "style.resize"
        ],
        [
          "Font",
          "style.fontFamily"
        ],
        [
          "Preserves Pitch",
          "preservesPitch"
        ],
        [
          "PlayBack Rate",
          "playbackRate"
        ],
        [
          "Paused?",
          "paused"
        ],
        [
          "Has Visible Controls?",
          "controls"
        ],
        [
          "Audio Loops?",
          "loop"
        ],
        [
          "Layer",
          "style.zIndex"
        ],
        [
          "Volume",
          "volume"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": color,
  "tooltip": "Outputs The Element's Setting.",
  "helpUrl": ""
},
{
  "type": "elements_all_elements",
  "message0": "Screen Element",
  "inputsInline": true,
  "output": null,
  "colour": color,
  "tooltip": "Gets The Main Screen",
  "helpUrl": ""
},
{
  "type": "elements_on_event",
  "message0": "When %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "Element",
      "variable": "Element"
    },
    {
      "type": "field_dropdown",
      "name": "event",
      "options": [
        [
          "Clicked",
          "onclick"
        ],
        [
          "The cursor go's over the element",
          "onmouseover"
        ],
        [
          "The cursor go's out the element",
          "onmouseout"
        ],
        [
          "Changed",
          "onchange"
        ],
        [
          "Edited (Changed But Has Focus)",
          "oninput"
        ],
        [
          "Resized",
          "onresize"
        ],
        [
          "Loaded",
          "onload"
        ]
      ]
    },
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
  "tooltip": "Tells Whenever The Element Has Done Something.",
  "helpUrl": ""
},
{
  "type": "element_append_child",
  "message0": "Put %1 In %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "targetElement",
      "variable": "Element"
    },
    {
      "type": "field_variable",
      "name": "targetGroupElement",
      "variable": "Group Element"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Puts a element into a different element.",
  "helpUrl": ""
},
{
  "type": "elments_play_pause",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "play/pause",
      "options": [
        [
          "Start Playing",
          "play();"
        ],
        [
          "Pause",
          "pause();"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "sound element",
      "variable": "Sound Element"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Plays Or Pauses The Sound.",
  "helpUrl": ""
},
{
  "type": "elements_delete_all_div",
  "message0": "Delete Elements In %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "keyvar",
      "variable": "Div Elmenet"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Deletes Elements Assigned To A Div.",
  "helpUrl": ""
},
{
  "type": "elements_rotate_element",
  "message0": "Rotate Element %1 To %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "Element",
      "variable": "Element"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Direction"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Rotates A Image",
  "helpUrl": ""
},
{
  "type": "elements_this",
  "message0": "this",
  "inputsInline": true,
  "output": null,
  "colour": color,
  "tooltip": "Gets The The Current Element That's It Been Put In.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
},
{
  "type": "elements_listener",
  "message0": "Add Listener %1 To %2 %3 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Listener",
      "options": [
        [
          "Clicked",
          "click"
        ],
        [
          "The cursor go's over the element",
          "mouseover"
        ],
        [
          "The cursor go's out the element",
          "mouseout"
        ],
        [
          "Changed",
          "change"
        ],
        [
          "Edited (Changed But Has Focus)",
          "input"
        ],
        [
          "Resized",
          "resize"
        ],
        [
          "Loaded/Created",
          "load"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "Element",
      "variable": "Element"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "function",
      "check": "Function"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Adds a listener to the element, like When clicked.",
  "helpUrl": "https://www.w3schools.com/js/js_htmldom_eventlistener.asp"
},
{
  "type": "elements_hide",
  "message0": "Hide %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "element",
      "variable": "Element"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Hide A Element.",
  "helpUrl": "https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp"
},
{
  "type": "elements_show",
  "message0": "Show %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "element",
      "variable": "Element"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Show A Element.",
  "helpUrl": "https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp"
},
{
  "type": "elements_set_cursor",
  "message0": "Set the default cursor to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Set the default cursor to the input.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"
}

]);
Blockly.JavaScript['elements_create_element'] = function(block) {
  var dropdown_elementid = block.getFieldValue('elementID');
  // TODO: Assemble JavaScript into code variable.
  var code = "document.createElement('" + dropdown_elementid + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['elements_set_setting'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('element'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('NAME');
  var value_setting_val = Blockly.JavaScript.valueToCode(block, 'setting_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.' + dropdown_name + ' = ' + value_setting_val + ';\n';
  return code;
};
Blockly.JavaScript['elements_bg_color'] = function(block) {
  var value_bg_color = Blockly.JavaScript.valueToCode(block, 'bg_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.body.style.backgroundColor = ' + value_bg_color + ';\n';
  return code;
};
Blockly.JavaScript['elements_put_screen'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Element'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.body.appendChild(' + variable_element + ');\n';
  return code;
};
Blockly.JavaScript['elements_get'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Element'), Blockly.Variables.NAME_TYPE);
  var dropdown_setting = block.getFieldValue('Setting');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.' + dropdown_setting;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['elements_all_elements'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.body';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['elements_on_event'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Element'), Blockly.Variables.NAME_TYPE);
  var dropdown_event = block.getFieldValue('event');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.' + dropdown_event +' = function () {\n ' + statements_code +' \n};\n';
  return code;
};
Blockly.JavaScript['element_append_child'] = function(block) {
  var variable_targetelement = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('targetElement'), Blockly.Variables.NAME_TYPE);
  var variable_targetgroupelement = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('targetGroupElement'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_targetgroupelement + '.appendChild(' + variable_targetelement + ');\n';
  return code;
};
Blockly.JavaScript['elments_play_pause'] = function(block) {
  var dropdown_play_pause = block.getFieldValue('play/pause');
  var variable_sound_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('sound element'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_sound_element + '.' + dropdown_play_pause + '\n';
  return code;
};
Blockly.JavaScript['elements_delete_all_div'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('keyvar'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.innerHTML = "";\n';
  return code;
};
Blockly.JavaScript['elements_rotate_element'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Element'), Blockly.Variables.NAME_TYPE);
  var value_direction = Blockly.JavaScript.valueToCode(block, 'Direction', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.style.transform = "rotate(" +' + value_direction + ' + "deg)";\n';
  return code;
};
Blockly.JavaScript['elements_this'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'this';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['elements_listener'] = function(block) {
  var dropdown_listener = block.getFieldValue('Listener');
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Element'), Blockly.Variables.NAME_TYPE);
  var value_function = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = (variable_element) + '.addEventListener("' + (dropdown_listener) + '", ' + value_function + ');;\n';
  return code;
};
Blockly.JavaScript['elements_hide'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('element'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.style.display = "none";\n';
  return code;
};
Blockly.JavaScript['elements_show'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('element'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.style.display = "block";\n';
  return code;
};
Blockly.JavaScript['elements_delete_element'] = function(block) {
  var variable_element = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Element'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_element + '.remove();\n';
  return code;
};
Blockly.JavaScript['elements_set_cursor'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.body.style.cursor = ' + value_name + ';\n';
  return code;
};