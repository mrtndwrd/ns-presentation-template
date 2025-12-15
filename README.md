## First run

Before you can start you need to install deps and copy mermaid to the assets folder. Make sure you have `npm` installed, then run:

```
npm install
cp node_modules/mermaid/dist/mermaid.min.js assets/mermaid.min.js
```

## Compile presentation

Compile the presentation to presentation.html:

```
npm run build
```

or to watch for changes: 

```
npm run watch
```

Note that this doesn't watch for changes in engine.ts, you'll need to restart the watcher.

## Update mermaid

Mermaid needs to be included in the browser assets. That's why the presentation example includes a footer with script tags opening mermaid. There's probably a prettier way to do this, but for now, copy it from the package to the assets:

```sh
cp node_modules/mermaid/dist/mermaid.min.js assets/mermaid.min.js
```

Copy it again if you ever update mermaid
