let files = [];
function updateFiles() {
	blocklyFiles = filesToBlockly();
Blockly.defineBlocksWithJsonArray([
{
  "type": "file",
  "message0": "File %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": blocklyFiles
    }
  ],
  "inputsInline": true,
  "output": "String",
  "tooltip": "A file loaded into your game data.",
  "helpUrl": "",
  "colour": "#000fb8"
}
]);
}
function addFile() {
  const [file] = document.getElementById('gamefile').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
	  files.push({
		  "name": document.getElementById('gamefile').files[0].name,
		  "dataURL":reader.result
	  });
	  updateFiles();
	  document.getElementById('gamefile').innerHTML = null;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
function resetFiles() {
	
}
function filesToBlockly() {
	var blocklyArray = [];
	var i = 0;
	blocklyArray.push(["files","null"]);
	while (i < files.length) {
		blocklyArray.push([files[i].name,i]);
		i += 1;
	}
	return blocklyArray;
}
let blocklyFiles = filesToBlockly();
Blockly.defineBlocksWithJsonArray([
{
  "type": "file",
  "message0": "File %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": blocklyFiles
    }
  ],
  "inputsInline": true,
  "output": "String",
  "tooltip": "A file loaded into your game data.",
  "helpUrl": "",
  "colour": "#000fb8"
}
]);

