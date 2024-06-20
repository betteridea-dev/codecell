import React from "react";
import ReactDOM from "react-dom/client";
import CodeCell from "./components/codecell";
import getInbox from "./lib/getInbox";
import setCellCode from "./lib/setCellCode";

function onInput(e: string) {
  console.log(e);
  setCellCode("1", e, true);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ margin: "-10px", padding: "10px", backgroundColor: "black", minHeight: "100vh" }}>
      <button
        onClick={() => {
          getInbox("1", true);
        }}
      >
        get inbox
      </button>

      <input
        type="text"
        id="code"
        onChange={(e) => {
          onInput(e.target.value);
        }}
      />

      <CodeCell
        appName="AA"
        cellId="1"
        code="Owner..'   '..ao.id"
        devMode
        // nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
      <CodeCell
        appName="BB"
        cellId="2"
        code="Owner..'   '..ao.id"
        devMode
        // nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
      <CodeCell
        appName="CC"
        cellId="3"
        devMode
        code="Owner..'   '..ao.id"
        // nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
      <CodeCell
        appName="CC"
        cellId="3.1"
        devMode
        code="Owner..'   '..ao.id"
        // nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
      <hr />
      <hr />
      <CodeCell
        appName="nw-A"
        cellId="4"
        devMode
        code="Owner..'   '..ao.id"
        nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
      <CodeCell
        appName="nw-A"
        cellId="5"
        devMode
        code="Owner..'   '..ao.id"
        nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
      <CodeCell
        appName="nw-B"
        cellId="6"
        devMode
        code="Owner..'   '..ao.id"
        nowallet
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output) if (m.Output.print) console.log(m.Output.data);
          });
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
    </div>
  </React.StrictMode>,
);
