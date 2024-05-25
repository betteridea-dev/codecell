import React from 'react'
import ReactDOM from 'react-dom/client'
import CodeCell from "./components/codecell"
import runCell from "./lib/runCell"
import setCellCode from './lib/setCellCode'
import "./styles/index.css"

function onInput(e: string) {
  console.log(e)
  setCellCode("1", e, true)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: "10px", backgroundColor: "black", height: "100vh" }}>
      <button onClick={() => {
        runCell("1", true)
      }}>run</button>
      <input type="text" id="code" onChange={(e) => { onInput(e.target.value) }} />
      <CodeCell appName="test-cell" cellId="1" devMode onAOProcess={(p) => console.log("got pid from webview", p)} />
    </div>
  </React.StrictMode>,
)
