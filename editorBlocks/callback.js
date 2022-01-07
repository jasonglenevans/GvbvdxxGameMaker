Blockly.defineBlocksWithJsonArray([

{
  "type": "function__input",
  "message0": "Script %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "fnc script"
    }
  ],
  "inputsInline": true,
  "output": "Function",
  "colour": 300,
  "tooltip": "Usage:This is used for a variable so you can call it at any time, so there you can use it for callbacks",
  "helpUrl": ""
},
{
  "type": "experimental_try_catch",
  "message0": "Try %1 %2 If Error %3 %4 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "try"
    },
    {
      "type": "field_variable",
      "name": "err",
      "variable": "Error"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "catch"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "Tries the first, if a error, then output it on a variable and do the scripts on the bottom.",
  "helpUrl": ""
},
{
  "type": "group",
  "message0": "------------ %1 ------------ %2 %3 ---------------------------------------",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Group 1"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "scripts"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "Does nothing, but cleans up scripts. to understand them more",
  "helpUrl": ""
}

]);
Blockly.JavaScript['function__input'] = function(block) {
  var statements_fnc_script = Blockly.JavaScript.statementToCode(block, 'fnc script');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function () {\n' + statements_fnc_script + '\n}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['experimental_try_catch'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var variable_err = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('err'), Blockly.Variables.NAME_TYPE);
  var statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
  // TODO: Assemble JavaScript into code variable.
  var code = 'try {\n' + statements_try + ' } catch(' + variable_err + ') {\n' + statements_catch + '\n};\n';
  return code;
};
Blockly.JavaScript['group'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_scripts = Blockly.JavaScript.statementToCode(block, 'scripts');
  // TODO: Assemble JavaScript into code variable.
  var code = '//------------' + text_name + '------------\n' + statements_scripts + '\n//---------------------------------------;\n';
  return code;
};
