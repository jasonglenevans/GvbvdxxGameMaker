Blockly.defineBlocksWithJsonArray([



{
  "type": "canvas_create",
  "message0": "%1 Create Canvas Element",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 30,
  "tooltip": "Create Canvas Element To Use For Reasons.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
},
{
  "type": "canvas_clear",
  "message0": "%1 Clear Canvas %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "Canvas"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Clears The Canvas.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_change_fill_style",
  "message0": "%1 On Canvas %2 Change Fill Style To %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "2DCanvas"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "color",
      "check": "Colour"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Change The Fill Color.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_draw_rectangle",
  "message0": "%1 On Canvas %2 Draw Rectangle:  %3 X: %4 Y: %5 Width: %6 Height: %7",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "2DCanvas"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Draws A Rectangle On The Canvas",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_begin_path",
  "message0": "%1 On Canvas %2 Begin Path",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "2DCanvas"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Begin A Path On The Canvas.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_move_to",
  "message0": "%1 On Canvas %2 Move Pen To: %3 X: %4 Y: %5",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "2DCanvas"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Moves The Pen.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_line_to",
  "message0": "%1 On Canvas %2 Line To: %3 X: %4 Y: %5",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "2DCanvas"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Make A Line.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_stroke",
  "message0": "%1 %2 Stroke",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "2DCanvas"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "The stroke block method actually draws the path you have defined with all those paths.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_make_2d_content",
  "message0": "%1 Make 2D Content For %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "Canvas"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 30,
  "tooltip": "The stroke block method actually draws the path you have defined with all those paths.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_change_stroke_style",
  "message0": "%1 On Canvas %2 Change Stroke Style To %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "Canvas"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "color",
      "check": "Colour"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Change The Stroke Color.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
},
{
  "type": "canvas_change_stroke_width",
  "message0": "%1 On Canvas %2 Change Line Width To %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://icons.iconarchive.com/icons/designcontest/outline/256/Canvas-icon.png",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "canvas",
      "variable": "Canvas"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Change The Line Width.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
}



]);

Blockly.JavaScript['canvas_create'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.createElement("canvas")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['canvas_clear'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'const context = ' + variable_canvas + '.getContext("2d");\ncontext.clearRect(0, 0, ' + variable_canvas + '.width, ' + variable_canvas + '.height);\n';
  return code;
};
Blockly.JavaScript['canvas_change_fill_style'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.fillStyle = ' + value_color + ';\n';
  return code;
};
Blockly.JavaScript['canvas_draw_rectangle'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas  + '.rect(' + value_x + ', ' + value_x + ', ' + value_width + ', ' + value_width + ');\n';
  return code;
};
Blockly.JavaScript['canvas_begin_path'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas  + '.beginPath();\n';
  return code;
};
Blockly.JavaScript['canvas_move_to'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.moveTo(' + value_x +  ',' + value_y + ');\n';
  return code;
};
Blockly.JavaScript['canvas_line_to'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.lineTo(' + value_x + ',' + value_y + ');\n';
  return code;
};
Blockly.JavaScript['canvas_stroke'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.stroke();\n';
  return code;
};
Blockly.JavaScript['canvas_make_2d_content'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.getContext("2d")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['canvas_change_stroke_style'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.strokeStyle = ' + value_color + ';\n';
  return code;
};
Blockly.JavaScript['canvas_change_stroke_width'] = function(block) {
  var variable_canvas = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('canvas'), Blockly.Variables.NAME_TYPE);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_canvas + '.lineWidth = ' + value_width + ';\n';
  return code;
};