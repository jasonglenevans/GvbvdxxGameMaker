'use strict';
let {app, BrowserWindow, Menu, shell, screen, clipboard} = require('electron');
let path = require('path');

let isWindows = process.platform === 'win32';
let isMac = process.platform === 'darwin';
let isLinux = process.platform === 'linux';
let version = '1.0';

var child = require('child_process').execFile;
var executablePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
var parameters = ["--incognito"];

var { spawn } = require('child_process');

    function clickSound() {
	}

function launchFile(fileLocation) {
shell.openPath(fileLocation);
}


function quit(quitResponse) {
	if (quitResponse == "Yes") {
      app.quit();
	} else {
	  app.preventDefault();
	}
}
function displayDialog(dialogButton,type,textArea,callback) {
	const { dialog } = require('electron');
	let opt  = {
       buttons: dialogButton,
       message: textArea,
	   icon:"dialogIcons/" + type + ".ico",
	   title:app.name
    };
	let Dialogfunctioncallback = callback;
	dialog.showMessageBox(opt, (response) => {
		return response;
    });
}
app.electronDialog = {
	display:function displayDialog(dialogButton,type,textArea,callback) {
	const { dialog } = require('electron');
	let opt  = {
       buttons: dialogButton,
       message: textArea,
	   icon:"dialogIcons/" + type + ".ico",
	   title:app.name
    };
	let Dialogfunctioncallback = callback;
	dialog.showMessageBox(opt, (response) => {
		return (response);
    });
}
};

const template = [
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

const isSafeOpenExternal = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';
  } catch (e) {
    // ignore
  }
  return false;
};

const createWindow = () => {
  const options = {
    backgroundColor: "#00537d",
    width: 800,
    height: 800,
    title: "",
    useContentSize: false,
    minWidth: 1000,
    minHeight: 90,
    icon: path.resolve(__dirname, "icon.png"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      sandbox: true,
      enableRemoteModule: true
    },
    show: true
  };

  const activeScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());
  const bounds = activeScreen.workArea;
  options.x = bounds.x + ((bounds.width - options.width) / 4);
  options.y = bounds.y + ((bounds.height - options.height) / 4);

  const window = new BrowserWindow(options);
  window.loadFile(path.resolve(__dirname, './index.html'));
};    							


app.enableSandbox();

app.on('web-contents-created', (event, contents) => {
  contents.setWindowOpenHandler((details) => {
    if (isSafeOpenExternal(details.url)) {
      setImmediate(() => {
        shell.openExternal(details.url);
      });
    }
    return {action: 'deny'};
  });
  contents.on('will-navigate', (e, url) => {
    e.preventDefault();
    if (isSafeOpenExternal(url)) {
      shell.openExternal(url);
    }
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});