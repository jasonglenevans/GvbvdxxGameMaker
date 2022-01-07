/*BeepBox Synth Blocks*/
/*Do Not Say That Is Mine I Only Made The Blocks*/
/*Blocks By Gvbvdxx*/
/*Scripts Located At https://www.beepbox.co/beepbox_synth.js */
/*Colors*/
var color = "#59158c";

//Define Blocks
Blockly.defineBlocksWithJsonArray([
{
  "type": "beepbox_load_synth",
  "message0": "%1 Load Synth",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": false,
  "colour": color,
  "tooltip": "Loads BeepBox's Synth. (Put At Top Of Code)",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
},
{
  "type": "beepbox_load_track",
  "message0": "%1 Load New Track %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_input",
      "name": "MUSIC",
      "text": "5sbk4l00e0ftaa7g0fj7i0r1w1100f0000d1110c0000h0000v2200o3320b4z8Ql6hkpUsiczhkp5hDxN8Od5hAl6u74z8Ql6hkpUsp24ZFzzQ1E39kxIceEtoV8s66138l1S0L1u2139l1H39McyaeOgKA0TxAU213jj0NM4x8i0o0c86ywz7keUtVxQk1E3hi6OEcB8Atl0q0Qmm6eCexg6wd50oczkhO8VcsEeAc26gG3E1q2U406hG3i6jw94ksf8i5Uo0dZY26kHHzxp2gAgM0o4d516ej7uegceGwd0q84czm6yj8Xa0Q1EIIctcvq0Q1EE3ihE8W1OgV8s46Icxk7o24110w0OdgqMOk392OEWhS1ANQQ4toUctBpzRxx1M0WNSk1I3ANMEXwS3I79xSzJ7q6QtEXgw0"
    }
  ],
  "inputsInline": false,
  "output": "HTML",
  "colour": color,
  "tooltip": "Loads The Music From BeepBox's URL.",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
},
{
  "type": "beepbox_is_playing",
  "message0": "%1 Track %2 Is Playing?",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "synth",
      "variable": "BeepBox Synth"
    }
  ],
  "inputsInline": false,
  "output": "Boolean",
  "colour": color,
  "tooltip": "Loads The Music From BeepBox's URL.",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
},
{
  "type": "beepbox_play",
  "message0": "%1 Play %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "synth",
      "variable": "BeepBox Synth"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Plays The Music.",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
},
{
  "type": "beepbox_pause",
  "message0": "%1 Pause %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_variable",
      "name": "synth",
      "variable": "BeepBox Synth"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "Pauses The Music.",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
},
{
  "type": "beepbox_loaded",
  "message0": "%1 If BeepBox Synth Is Loaded Then %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "beepboxsynthloaded"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": color,
  "tooltip": "If The BeepBox Synth Is Loaded Then Do This.",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
},
{
  "type": "beepbox_on_load",
  "message0": "%1 When BeepBox Synth Loaded %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.beepbox.co/icon_32.png",
      "width": 32,
      "height": 32,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statement"
    }
  ],
  "inputsInline": false,
  "colour": color,
  "tooltip": "Does This When It loads",
  "helpUrl": "https://www.beepbox.co/synth_example.html"
}

]);
Blockly.JavaScript['beepbox_load_synth'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'var beepbox_engine_loaded = false;\nvar beepbox_engine = document.createElement("script");\nbeepbox_engine.src = "https://www.beepbox.co/beepbox_synth.js";\ndocument.body.appendChild(beepbox_engine);\nbeepbox_engine.onload = function (){beepbox_engine_loaded = true;};\n';
  return code;
};
Blockly.JavaScript['beepbox_load_track'] = function(block) {
  var text_music = block.getFieldValue('MUSIC');
  // TODO: Assemble JavaScript into code variable.
  var code = 'new beepbox.Synth("' + text_music + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['beepbox_is_playing'] = function(block) {
  var variable_synth = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('synth'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_synth + 'isPlayingSong';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['beepbox_play'] = function(block) {
  var variable_synth = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('synth'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'try {' + variable_synth  + '.play();} catch(e) { console.warn("Beepbox Synth Is Not Loaded Yet, Make Sure That You Wait A Little Bit Of Seconds To Fetch The Data");}\n';
  return code;
};
Blockly.JavaScript['beepbox_pause'] = function(block) {
  var variable_synth = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('synth'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'try {' + variable_synth  + '.pause();} catch(e) { console.warn("Beepbox Synth Is Not Loaded Yet, Make Sure That You Wait A Little Bit Of Seconds To Fetch The Data"); }\n';
  return code;
};
Blockly.JavaScript['beepbox_loaded'] = function(block) {
  var statements_beepboxsynthloaded = Blockly.JavaScript.statementToCode(block, 'beepboxsynthloaded');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if (beepbox_engine_loaded) {\n' + statements_beepboxsynthloaded + '\n};\n';
  return code;
};
Blockly.JavaScript['beepbox_on_load'] = function(block) {
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  // TODO: Assemble JavaScript into code variable.
  var code = 'beepbox_engine.onload = function (){' + statements_statement + '};\n';
  return code;
};
//console.warn("Beepbox Synth Is Not Loaded Yet, Make Sure That You Wait A Little Bit Of Seconds To Fetch The Data");