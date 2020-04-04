const path = require('path');
const { app, BrowserWindow } = require('electron');
var mathAddon = require('../src/mathLib/mathaddon.node');

function createWindow() {
  // Create the browser window.     
  win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.     
  //win.loadFile('index.html')
  //win.loadURL('http://localhost:3000/');
  win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
}

console.log('mathaddon', mathAddon.squareRoot(17, 3));

app.on('ready', createWindow);

