const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

ipcMain.on('message-id', (event, data) => {
    console.log(data)

    // must set returnValue for sync message, or the render process is waiting forever.
    event.returnValue = "return value from main.js.";
})
