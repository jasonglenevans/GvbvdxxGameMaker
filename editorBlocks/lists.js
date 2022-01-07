Blockly.defineBlocksWithJsonArray([

{
  "type": "lists_get_item_from_number",
  "message0": "%1 Get Item Number %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "listvar",
      "variable": "list"
    },
    {
      "type": "input_value",
      "name": "number",
      "check": "Number"
    }
  ],
  "output": [
    "Boolean",
    "String",
    "Number"
  ],
  "colour": 260,
  "tooltip": "Gets the item number in a list",
  "helpUrl": ""
},
{
  "type": "lists_itext",
  "message0": "Make List Of Off Text %1",
  "args0": [
    {
      "type": "field_input",
      "name": "list_text",
      "text": "\"Hello\", \"world!\""
    }
  ],
  "output": [
    "Boolean",
    "String",
    "Number"
  ],
  "colour": 260,
  "tooltip": "Gets the item number in a list",
  "helpUrl": ""
},
{
  "type": "lists_add",
  "message0": "Add %1 %2 To List %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "field_variable",
      "name": "list",
      "variable": "list"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
}



]);
Blockly.JavaScript['lists_get_item_from_number'] = function(block) {
  var variable_listvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('listvar'), Blockly.Variables.NAME_TYPE);
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_listvar + '[' + value_number + ' + 1]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['lists_itext'] = function(block) {
  var text_list_text = block.getFieldValue('list_text');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_list_text + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['lists_add'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + '.push(' + value_text + ');\n';
  return code;
};