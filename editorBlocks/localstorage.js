/*Local Sotrage API Blocks
  These Blocks Are By Me, But The API Is Not
  These Can Be Used To Save Stuff And Read Stuff
  By Gvbvdxx, AKA Jason Evans
*/

var color = '#c29d30';

/*start array*/
Blockly.defineBlocksWithJsonArray([
  
  
{
  "type": "localstorage_add",
  "message0": "%1 %2 Add Item In Local Storage %3 Name: %4 Value: %5",
  "args0": [
    {
      "type": "field_image",
      "src": "https://static.thenounproject.com/png/585904-200.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Storage API: Adds A Item To Storage.",
  "helpUrl": "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
},
{
  "type": "localstorage_get",
  "message0": "%1 %2 Get Item In Local Storage %3 Name: %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://static.thenounproject.com/png/585904-200.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": color,
  "tooltip": "Storage API: Gets A Item From The Storage.",
  "helpUrl": "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
},
{
  "type": "localstorage_remove",
  "message0": "%1 %2 Remove Item In Local Storage %3 Name: %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://static.thenounproject.com/png/585904-200.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Storage API: Deletes A Item From The Storage.",
  "helpUrl": "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
}



  
]);
Blockly.JavaScript['localstorage_add'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'localStorage.setItem(' + value_name + ', ' + value_value + ');\n';
  return code;
};
Blockly.JavaScript['localstorage_get'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'localStorage.getItem(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['localstorage_remove'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'localStorage.removeItem(' + value_name + ');\n';
  return code;
};