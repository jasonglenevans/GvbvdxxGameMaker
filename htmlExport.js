function exportHTML() {
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	var blob = new Blob(["<title>" + document.getElementById('gamename').value + "</title>\n<script>" + code + "</script>"], {type: "text/plain;charset=utf-8"});
	saveAs(blob, document.getElementById('gamename').value + ".html");
}
