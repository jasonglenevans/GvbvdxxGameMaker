var colour = "#c2af1d";
Blockly.defineBlocksWithJsonArray([
{
  "type": "audiocontext_make",
  "message0": "%1 Make Audio Context",
  "args0": [
    {
      "type": "field_image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": colour,
  "tooltip": "Make Audio Context",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext"
},
{
  "type": "audiocontext_resume",
  "message0": "%1 Resume %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "ctx",
      "variable": "Audio Context"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": colour,
  "tooltip": "Resume Audio Context",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext"
},
{
  "type": "audiocontext_suspend",
  "message0": "%1 Suspend %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg",
      "width": 16,
      "height": 16,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "ctx",
      "variable": "Audio Context"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": colour,
  "tooltip": "Suspend Audio Context",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AudioContext"
}
]);
Blockly.JavaScript['audiocontext_make'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'new AudioContext()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['audiocontext_resume'] = function(block) {
  var variable_ctx = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('ctx'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_ctx  + '.resume();\n';
  return code;
};
Blockly.JavaScript['audiocontext_suspend'] = function(block) {
  var variable_ctx = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('ctx'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_ctx + '.suspend();\n';
  return code;
};