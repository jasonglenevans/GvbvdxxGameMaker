function exportHTML() {
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	var blob = new Blob(["<html>\n    <head>\n        <title>" + document.getElementById('gamename').value + "</title>\n    <head>\n    <body>\n    </body>\n</html>\n<script>\n" + code + "</script>"], {type: "text/plain;charset=utf-8"});
	saveAs(blob, document.getElementById('gamename').value + ".html");
}
