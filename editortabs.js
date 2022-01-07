//tabs
function tabswitch(tabid) {
  if (tabid == "editor") {
    document.getElementById("game").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("editor").style.display = "block";
  }
  if (tabid == "game") {
    document.getElementById("game").style.display = "block";
    document.getElementById("source").style.display = "none";
    document.getElementById("editor").style.display = "none";
  }
  if (tabid == "source") {
      document.getElementById("game").style.display = "none";
    document.getElementById("source").style.display = "block";
    document.getElementById("editor").style.display = "none";
  }
}