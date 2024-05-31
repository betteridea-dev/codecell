import React from 'react'
import ReactDOM from 'react-dom/client'
import CodeCell from "./components/codecell"
import getInbox from './lib/getInbox'
import setCellCode from './lib/setCellCode'

function onInput(e: string) {
  console.log(e)
  setCellCode("1", e, true)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: "10px", backgroundColor: "black", height: "100vh" }}>
      <button onClick={() => {
        getInbox("1", true)
      }}>get inbox</button>

      <input type="text" id="code" onChange={(e) => { onInput(e.target.value) }} />

      <CodeCell appName="test-cell" cellId="1" devMode
        onAOProcess={(p) => console.log("got pid from webview", p)}
        onNewMessage={(message) => {
          message.forEach((m) => {
            if (m.Output)
              if (m.Output.print)
                console.log(m.Output.data)
          })
        }}
        onInbox={(i) => console.log("got inbox", i)}
      />
    </div>
  </React.StrictMode>
)
