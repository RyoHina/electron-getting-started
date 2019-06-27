const {
    app,
    dialog,
    BrowserWindow
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

    win.webContents.on('crashed', () => {
        console.log('The Program Crashed!');
        reloadWindow(win);
    });
}

app.on('ready', createWindow)

const {
    crashReporter
} = require('electron')
crashReporter.start({
    productName: 'YourName',
    companyName: 'YourCompany',
    submitURL: 'https://xxxxxx',
    uploadToServer: true
})

function reloadWindow(mainWin) {
    if (mainWin.isDestroyed()) {
        app.relaunch();
        app.exit(0);
    } else {
        BrowserWindow.getAllWindows().forEach((w) => {
            if (w.id !== mainWin.id) w.destroy();
        });
        const options = {
            type: 'info',
            title: 'theTitle',
            message: 'The Process was crashed.',
            buttons: ['Cancel', 'Reload'],
        }
        dialog.showMessageBox(mainWin, options, (index) => {
            if (index === 0) mainWin.close();
            else mainWin.reload();
        })
    }
}