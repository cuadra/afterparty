# AfterParty
> Images that are fashionably late.

<img width="1024" height="1024" alt="ChatGPT Image Feb 6, 2026, 07_44_35 AM" src="https://github.com/user-attachments/assets/6baadfe3-cc01-47b3-8aa2-dd5dd30f5c4e" />


<img width="1492" height="1042" alt="image" src="https://github.com/user-attachments/assets/a3629e57-c976-42f5-8122-33dc5b9663c5" />

## Install

```bash
npm install lazyloading
```

## CommonJS (`require`)

```js
const afterparty = require("lazyloading");

afterparty.autoInitialize();
// or afterparty.initialize({ selector: ".lazy-loading" });
```

## ES Module (`import`)

```js
import afterparty, { autoInitialize, initialize } from "lazyloading";

autoInitialize();
// or initialize({ selector: ".lazy-loading" });
```

## Browser Demo

The local demo script (`src/index.js`) is now just a thin wrapper around the shared core module:

```js
window.AfterParty.autoInitialize();
```

All package entrypoints (`index.js`, `index.mjs`, and `src/index.js`) resolve to the same implementation in `src/afterparty-core.js`, so updates happen in one place.
