const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        titleBarStyle: 'hidden', // not work on windows, work on macOS
    })

    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)