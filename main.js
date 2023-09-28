const {app,BrowserWindow}=require('electron')
const url=require('url');
const path=require('path');


function createWindow(){
    const mainWindow=new BrowserWindow({
        title:'Suresh Electron',
        width:1000,
        height:600
    })

    // const startUrl=url.format({
    //     pathname:path.join(__dirname,'index.html'),
    //     protocol:'file'
    // });
    mainWindow.loadURL('http://localhost:3001');
}

app.whenReady().then(createWindow);