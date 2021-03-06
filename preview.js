let playbutton = document.getElementById("PlayPauseButton");
let InjectionConsole = document.getElementById("INJECTSCRIPTLog");


//console functions
GInjection_Console_Log = function (Text) {
	InjectionConsole.value = InjectionConsole.value + "\n" + Text;
}
GInjection_Console_Error = function (Text) {
	InjectionConsole.value = InjectionConsole.value + "\n" + 'ERROR:' + Text;
}
GInjection_Console_Clear = function () {
	InjectionConsole.value = '';
}
//extra console.log replacement
if (false) {
  console.log = function (Text) {
  	InjectionConsole.value = InjectionConsole.value + "\n" + Text;
  };
};

//add to this:
function GInjection_ON_popupclosed() {
	playbutton.src = "preview/play.png";
    playbutton.name = "play";
}







GInjection_Console_Log("Gvbvdxx's Previewer Engine Started");
function previewcode(code,popupTitle) {
GInjection_Console_Log("--------------------------------------------------------------");
  //make a window with a html and run program in it.
  injectwindow = window.open("","",window.screen.width,window.screen.height);
  GInjection_Console_Log("The Popup Window Has Opened");
  
  
  
  //program injection starts here.
  injectwindow.window.addEventListener('beforeunload', function(event) {
	GInjection_ON_popupclosed();
	GInjection_Console_Log("The Popup Window Has Been Closed");
  }, false);
  injectwindow.document.title = (popupTitle);
  
  
  
  //sometimes the user may up have a code error, to prevent the app from crashing we will use try and catch.
  try {
	    GInjection_Console_Log("Injecting Scripts...");
        injectwindow.eval(code);
        GInjection_Console_Log("Injected With No Errors.");
  } catch(e) {
	    //something goes wrong we need to close and put errors in the debugger.
		GInjection_Console_Error("There Was An Error When Running The Programs. Closing. Info Will Be Displayed Below:");
		GInjection_Console_Error("JS ERROR:" + e);
		GInjection_ON_popupclosed();
		injectwindow.window.close();
  }
  
  
}//we end the injection script here