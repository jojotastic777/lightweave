import React from "react";
import InterfaceElement from "./InterfaceElement";
import "./Network.css";

function Iface(props: { iface: string }) {
  return (
    <tr>
      <td>{props.iface}</td>
      <td>{(window as any).api.network.ifaces.find((iface: any) => iface.name === props.iface).addrs.map((addr: any) => addr.address).join(", ")}</td>
    </tr>
  )
}

class Network extends React.Component {
  public render() {
    return (
      <InterfaceElement>
        <div className="Network">
          <table>
            <thead>
              <tr>
                <th>Interface</th>
                <th>Addresses</th>
              </tr>
            </thead>
            <tbody>
              {(window as any).api.network.ifaces.map((iface: any, i: number) => <Iface key={i} iface={iface.name} />)}
            </tbody>
          </table>
        </div>
      </InterfaceElement>
    );
  }
}

export default Network;
