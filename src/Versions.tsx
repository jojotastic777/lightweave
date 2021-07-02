import React from "react";
import InterfaceElement from "./InterfaceElement";
import "./Versions.css"

class Versions extends React.Component {
  public render() {
    return (
      <InterfaceElement>
        <div className="Versions">
          <table>
            <thead>
              <tr>
                <th>Software</th>
                <th>Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lightweave</td>
                <td><code>{ (window as any).api.appVersion }</code></td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td><code>{ (window as any).api.nodeVersion }</code></td>
              </tr>
              <tr>
                <td>Chromium</td>
                <td><code>{ (window as any).api.chromeVersion }</code></td>
              </tr>
              <tr>
                <td>Electron</td>
                <td><code>{ (window as any).api.electronVersion }</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </InterfaceElement>
    );
  }
}

export default Versions