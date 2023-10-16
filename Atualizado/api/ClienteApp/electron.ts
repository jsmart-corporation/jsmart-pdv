const path = require("path");
const { app, BrowserWindow, globalShortcut,ipcMain } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 970,
    height: 556,
    minWidth: 1100,
    minHeight: 556,
    icon: path.join(__dirname, "./icon.ico"),

    backgroundColor: "#000000",
    show: false,
    // webPreferences: {
    //   nodeIntegration: true,
    //   enableRemoteModule: true,
    //   contextIsolation: false,
    //   webviewTag: true,
    //   nodeIntegrationInWorker: true,
    //   allowRunningInsecureContent: true,
    //   webSecurity: false,
    // },
  });
  // const iconPath = path.join('', 'nome_do_arquivo_do_ícone.ico');
  // mainWindow.setIcon(iconPath);
  globalShortcut.register("F11", () => {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  });
  globalShortcut.register('Ctrl+-', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.getZoomLevel() - 1);
  });
  
  globalShortcut.register('Ctrl+=', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.getZoomLevel() + 1);
  });
  // mainWindow.setMenu(null); // Desabilita o menu da janela principal

  mainWindow.once("ready-to-show", () => {
    mainWindow.maximize();
    mainWindow.show();
    
  });
  mainWindow.loadURL("http://localhost:5173/");

  // Resto do código da sua aplicação...
}

app.on("ready", () => {
  createWindow();
  
});
ipcMain.on('enable-window-drag', () => {
  mainWindow.setMovable(true);
});

// Ouça a mensagem para desabilitar a movimentação da janela
ipcMain.on('disable-window-drag', () => {
  mainWindow.setMovable(false);
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});