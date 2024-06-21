# BetterIDEa CodeCell

Now you can integrate our code cells into your webapps and run AO LUA anywhere 🎉

[![npm](https://img.shields.io/badge/@betteridea/codecell-npm-red)](https://www.npmjs.com/package/@betteridea/codecell)
[![downloads](https://img.shields.io/npm/dt/@betteridea/codecell?color=red)](https://www.npmjs.com/package/@betteridea/codecell)
[![X Follow](https://img.shields.io/twitter/follow/betteridea_dev)](https://twitter.com/betteridea_dev)


## Installation

```bash
npm install @betteridea/codecell
```

## API

### `<CodeCell .../>`

A react component to render a code cell in your app.

#### Props

| Prop           | Type                     | Description                                                                                                                          |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `cellId`       | `string`                 | Unique id for the cell                                                                                                               |
| `appName`      | `string`                 | Unique app name                                                                                                                      |
| `code`         | `string`                 | Initial code for the cell                                                                                                            |
| `nowallet`     | `boolean`                | Set this to `true` if you dont want to use a web wallet, and generate a local jwk file (works on mobile) Recommended for playgrounds |
| `enableToasts` | `boolean`                | Set this to `true` if you want to enable toast notifications for the cell                                                            |
| `onAOProcess`  | `(pid:string) => void`   | Callback function that run whenever a process is is loaded                                                                           |
| `onNewMessage` | `(msgs: msg[]) => void`  | Callback function, runs whenever process gets new messages                                                                           |
| `onInbox`      | `(inbox: msg[]) => void` | Callback function, runs whenever Inbox is received after calling `getInbox()`                                                        |
| `width`        | `string`                 | Width of the cell                                                                                                                    |
| `height`       | `string`                 | Height of the cell                                                                                                                   |
| `className`    | `string`                 | Class names for styling                                                                                                              |
| `style`        | `React.CSSProperties`    | Inline styles                                                                                                                        |
| `devMode`      | `boolean`                | Boolean to enable dev mode                                                                                                           |


### `getInbox(...)`

Fetches latest Inbox messages from the process.

#### Arguments

| Argument  | Type      | Description                |
| --------- | --------- | -------------------------- |
| `cellId`  | `string`  | Unique id of the cell      |
| `devMode` | `boolean` | Boolean to enable dev mode |

### `setCellCode(...)`

To update the code in a cell, after it has been rendered.
It is discouraged to update code by changing the `code` prop directly, since it re-renders the webview, again this is personal preference.

#### Arguments

| Argument  | Type      | Description                |
| --------- | --------- | -------------------------- |
| `cellId`  | `string`  | Unique id of the cell      |
| `code`    | `string`  | Code to set in the cell    |
| `devMode` | `boolean` | Boolean to enable dev mode |


## Usage

```javascript
import { CodeCell } from '@betteridea/codecell';

// in your react app
<CodeCell
  cellId="1"
  appName="BetterIDEa-Code-Cell"
  code="print('Portable code cell ftw!')"
  onAOProcess={(pid)=> console.log("using process: ", pid)}
  onNewMessage={(msgs) => console.log("new messages: ", msgs)}
  onInbox={(inbox) => console.log("got inbox: ", inbox)}
/>
```

To update the cell with a different code snippet, you can use the `setCellCode` function.

```javascript
import { setCellCode, getInbox } from '@betteridea/codecell';

...

// This will update the code in the cell with the id provided
setCellCode("1", "print('Updated code!')");

// This will fetch the latest inbox messages from the process
getInbox("1");
// as soon as the inbox is received, onInbox callback will be called
```

<details>
<summary>Deprecation Warning</summary>

**runCell() function has been deprecated due to security reasons, since it might be possible anyone can run some mischevious code in your process without you knowing.**

### ~~`runCell(...)`~~ (deprecated due to security reasons)

~~To run the code in a cell, after it has been rendered (optional, since the cell already has a run button)~~

#### ~~Arguments~~

- ~~`cellId` - Unique id of the cell to run~~
- ~~`devMode` - Boolean to enable dev mode~~

```javascript
import { runCell } from '@betteridea/codecell';

...

// This will run whatever code is typed in the cell with the id provided
runCell("1");
```

</details>


## Developing

To start the vite development server, run:

```bash
cd packages/codecell
npm install
npm run dev
```

then make changes to the component and run function and test them in the vite app at [http://localhost:5173](http://localhost:5173)

1. `CodeCell` component -> [./src/components/CodeCell.tsx](https://github.com/betteridea-dev/codecell/blob/main/src/components/codecell.tsx)

2. Library functions -> [./src/lib](https://github.com/betteridea-dev/codecell/tree/main/src/lib)

3. `/codecell` webview -> [next_app/src/pages/codecell.tsx](https://github.com/betteridea-dev/ide/blob/main/next_app/src/pages/codecell.tsx)

The package is essentially a wrapper around https://ide.betteridea.dev/codecell route from the main [IDE](https://ide.betteridea.dev) to run code in any webapp through a webview.
