const { app, BrowserWindow } = require('electron');
function createWindow(){const win=new BrowserWindow({width:1100,height:720,minWidth:360,minHeight:560,backgroundColor:'#07111d',autoHideMenuBar:true,webPreferences:{contextIsolation:true}});win.loadFile('www/index.html');}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
