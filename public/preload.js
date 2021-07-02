const { contextBridge, ipcRenderer, remote } = require("electron");
const { networkInterfaces } = require("os")

const nets = networkInterfaces()

async function getWifis() {
  return new Promise((resolve, reject) => {
    require("child_process").exec("iwgetid", (err, stdout, stderr) => {
      if (err) { reject(err) } else { resolve(stdout) }
    })
  })
}

contextBridge.exposeInMainWorld("api", {
  appVersion: remote.app.getVersion(),
  nodeVersion: process.versions['node'],
  chromeVersion: process.versions['chrome'],
  electronVersion: process.versions['electron'],
  network: {
    getWifis,
    ifaces: Object.keys(nets)
      .map(iface => ({
        name: iface,
        addrs: nets[iface].filter(addr => addr.family === "IPv4" && !addr.internal)
      }))
      .filter(iface => iface.addrs.length > 0)
  }
});
