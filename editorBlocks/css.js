Blockly.defineBlocksWithJsonArray([


{
  "type": "css_filter",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "css_filter_filter_type",
      "options": [
        [
          "Brightness",
          "brightness"
        ],
        [
          "Contrast",
          "contrast"
        ],
        [
          "Grayscale",
          "grayscale"
        ],
        [
          "Invert",
          "invert"
        ],
        [
          "Saturate",
          "saturate"
        ],
        [
          "Sepia",
          "sepia"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "css_filter_value_present",
      "check": null
    }
  ],
  "output": "css_image_filter",
  "colour": 20,
  "tooltip": "Outputs a CSS brightness filter for image type elements.",
  "helpUrl": ""
},
{
  "type": "css_px",
  "message0": "%1 Pixels",
  "args0": [
    {
      "type": "input_value",
      "name": "pixels",
      "check": "Number",
      "align": "CENTRE"
    }
  ],
  "inputsInline": true,
  "output": "css_px",
  "colour": 20,
  "tooltip": "Outputs a css px for positions. (by pixels)",
  "helpUrl": ""
},
{
  "type": "css_font_famliy",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "font",
      "options": [
        [
          "Arial",
          "Arial"
        ],
        [
          "Helvetica",
          "Helvetica"
        ],
        [
          "Verdana",
          "Verdana"
        ],
        [
          "Calibri",
          "Calibri"
        ],
        [
          "Geneva",
          "Geneva"
        ],
        [
          "Optima",
          "Optima"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "string",
  "colour": 20,
  "tooltip": "A font.",
  "helpUrl": ""
},
{
  "type": "css_percent",
  "message0": "%1 %%",
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 50,
      "min": 0,
      "max": 1000
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 20,
  "tooltip": "A percent value.",
  "helpUrl": ""
},
{
  "type": "css_positioning",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Positioning type",
      "options": [
        [
          "Relative",
          "relative"
        ],
        [
          "Absolute",
          "absolute"
        ],
        [
          "Fixed",
          "fixed"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 20,
  "tooltip": "Outputs a positioning type.",
  "helpUrl": ""
},
{
  "type": "css_cursor",
  "message0": "Cursor %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "cursor",
      "options": [
        [
          "Depends on the element",
          "auto"
        ],
        [
          "No Cursor",
          "none"
        ],
        [
          "Default Cursor",
          "default"
        ],
        [
          "Context Menu",
          "context-menu\t"
        ],
        [
          "Help",
          "help"
        ],
        [
          "Clickable",
          "pointer"
        ],
        [
          "Loading With Cursor",
          "progress"
        ],
        [
          "Loading",
          "wait"
        ],
        [
          "Cell",
          "cell"
        ],
        [
          "Crosshair",
          "crosshair"
        ],
        [
          "Text Selection",
          "text"
        ],
        [
          "Text Sideways Selection",
          "vertical-text"
        ],
        [
          "Shortcut",
          "alias"
        ],
        [
          "Copy",
          "copy"
        ],
        [
          "Move",
          "move"
        ],
        [
          "No Drag And Drop",
          "no-drop"
        ],
        [
          "Not Allowed",
          "not-allowed"
        ],
        [
          "Grab",
          "grab"
        ],
        [
          "Grabbing",
          "grabbing"
        ],
        [
          "Scroll In Any Direction",
          "all-scroll"
        ],
        [
          "Colum Resize",
          "col-resize"
        ],
        [
          "Row Resize",
          "row-resize\t"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": 20,
  "tooltip": "The cursor for a element",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"
},
{
  "type": "css_url",
  "message0": "File %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 20,
  "tooltip": "A CSS file.",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/url()"
}

]);

Blockly.JavaScript['css_filter'] = function(block) {
  var dropdown_css_filter_filter_type = block.getFieldValue('css_filter_filter_type');
  var value_css_filter_value_present = Blockly.JavaScript.valueToCode(block, 'css_filter_value_present', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "'" + dropdown_css_filter_filter_type + "(' + " + value_css_filter_value_present + " + ')'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['css_px'] = function(block) {
  var value_pixels = Blockly.JavaScript.valueToCode(block, 'pixels', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_pixels + " + 'px;'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['css_font_famliy'] = function(block) {
  var dropdown_font = block.getFieldValue('font');
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + dropdown_font + ';"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['css_percent'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = number_name + ' + "%;"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['css_positioning'] = function(block) {
  var dropdown_positioning_type = block.getFieldValue('Positioning type');
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + dropdown_positioning_type + ';"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['css_cursor'] = function(block) {
  var dropdown_cursor = block.getFieldValue('cursor');
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + dropdown_cursor + ';"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['css_url'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '"link(" + ' + value_name + ' + ");"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};