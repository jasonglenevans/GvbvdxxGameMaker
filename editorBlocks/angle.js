Blockly.defineBlocksWithJsonArray([


{
  "type": "math_angle_angle",
  "message0": "%1",
  "args0": [
    {
      "type": "field_angle",
      "name": "angle",
      "angle": 0
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "A angle.",
  "helpUrl": ""
},
{
  "type": "math_timesordeivide",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "number1",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "rule",
      "options": [
        [
          "*",
          "*"
        ],
        [
          "/",
          "/"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "number2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "Divides Or Multiplies The Inputs",
  "helpUrl": ""
}


]);
Blockly.JavaScript['math_angle_angle'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  var code = angle_angle;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['math_timesordeivide'] = function(block) {
  var value_number1 = Blockly.JavaScript.valueToCode(block, 'number1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_rule = block.getFieldValue('rule');
  var value_number2 = Blockly.JavaScript.valueToCode(block, 'number2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_number1 + " " + dropdown_rule + " " + value_number2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};