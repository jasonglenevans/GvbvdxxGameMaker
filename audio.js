function playsound(filedir,speed) {
  try {
  let audioelement = document.createElement("AUDIO");
  audioelement.src = filedir;
  audioelement.name = filedir;
  audioelement.playbackRate = (speed / 100 + 1);
  audioelement.preservesPitch = false;
  audioelement.play();
  }
  catch(e) {
    window.alert ("your browser does not support the HTML5 audio tag")
  }
}