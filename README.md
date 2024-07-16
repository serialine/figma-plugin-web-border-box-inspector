# figma-plugin-web-border-box-inspector

A Figma plugin that adjusts element sizes to match web border-box sizing. Eliminates the hassle of Figma's default inside stroke behavior for web developers.

template from [joaomarcelofm/figma-plugin-template-vue](https://github.com/joaomarcelofm/figma-plugin-template-vue)

## Get started

### **Building the project locally**

```bash
pnpm install
pnpm start
```

### Importing plugin into figma

Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from your new repo.

## Development

### UI

The [ui.vue](./src/ui/ui.vue) is the main component that will generate the Plugin's UI, you can use it directly or create children components.

Vite will compile your application and output a Figma ready code in `dist/src/ui.html`.

### Deployment

When running `pnpm start` your application will be compiled on save, but you can also build a production ready application running `pnpm build`.

## Features

- [Vue3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
