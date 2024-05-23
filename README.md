# BetterIDEa CodeCell

Now you can integrate our code cells into your webapps and run AO LUA anywhere 🎉

[![npm](https://img.shields.io/badge/@betteridea/codecell-npm-red)](https://www.npmjs.com/package/@betteridea/codecell)
[![downloads](https://img.shields.io/npm/dt/@betteridea/codecell?color=red)](https://www.npmjs.com/package/@betteridea/codecell)
[![X Follow](https://img.shields.io/twitter/follow/betteridea-dev)](https://twitter.com/betteridea-dev)


## Installation

```bash
npm install @betteridea/codecell
```

## API

### `CodeCell`

A react component to render a code cell in your app.

#### Props

- `cellId` - Unique id for the cell
- `appName` - Unique app name
- `code` - Initial code for the cell
- `width` - Width of the cell
- `height` - Height of the cell
- `className` - Class names for styling
- `style` - Inline styles
- `devMode` - Boolean to enable dev mode

### `setCellCode`

To update the code in a cell, after it has been rendered.
It is discouraged to update code by changing the `code` prop directly, since it re-renders the iframe, again this is personal preference.

#### Arguments

- `cellId` - Unique id of the cell
- `code` - Code to set in the cell
- `devMode` - Boolean to enable dev mode


### ~~`runCell`~~ (deprecated due to security reasons)

~~To run the code in a cell, after it has been rendered (optional, since the cell already has a run button)~~

#### ~~Arguments~~

- ~~`cellId` - Unique id of the cell to run~~
- ~~`devMode` - Boolean to enable dev mode~~

## Usage

```javascript
import { CodeCell, runCell } from '@betteridea/codecell';

// in your react app
<CodeCell
  cellId="1" // any unique cell id
  appName="BetterIDEa-Code-Cell" // Your unique app name
  code="print('Portable code cell ftw!')" // initial code (optional)
/>
```

~~To run code from external sources, you can use the `runCell` function.~~ (deprecated due to security reasons)

```javascript
import { runCell } from '@betteridea/codecell';

...

// This will run whatever code is typed in the cell with the id provided
runCell("1");
```

To update the cell with a different code snippet, you can use the `setCellCode` function.

```javascript
import { setCellCode } from '@betteridea/codecell';

...

// This will update the code in the cell with the id provided
setCellCode("1", "print('Updated code!')");
```

## Developing

To start the vite development server, run:

```bash
cd packages/codecell
npm install
npm run dev
```

then make changes to the component and run function and test them in the vite app at [http://localhost:5173](http://localhost:5173)

1. `CodeCell` component -> [./src/components/CodeCell.tsx](https://github.com/betteridea-dev/ide/blob/main/packages/codecell/src/components/codecell.tsx)

2. `runCell` function -> [./src/lib/runCell.ts](https://github.com/betteridea-dev/ide/blob/main/packages/codecell/src/lib/runCell.ts)

Both are essentially a wrapper around https://ide.betteridea.dev/codecell page from the main [IDE](https://ide.betteridea.dev) to run the code in any webapp through an iframe.

`/codecell` -> [next_app/src/pages/codecell.tsx](https://github.com/betteridea-dev/ide/blob/main/next_app/src/pages/codecell.tsx)