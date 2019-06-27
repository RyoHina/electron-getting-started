const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')

var mainWindow
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        globals: {
            mainId: 1000,
        }
    })

    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
    mainWindow = win
}

app.on('ready', createWindow)

ipcMain.on('message-id', (event, data) => {
    console.log(data)
    // send by event.sender
    event.sender.send('message-id2', '[By event.sender]message from main.js')
    // send by BrowserWindow
    mainWindow.send('message-id2', '[By BrowserWindow]message from main.js')
})
