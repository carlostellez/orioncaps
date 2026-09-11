# Orion Caps

Proyecto Next.js (App Router) con TypeScript, Tailwind CSS y ESLint.

## Requisitos

- Node.js >= 20.9
- npm >= 10

## Instalación

Este scaffold fue creado sin ejecutar `npm install` (sin acceso a red desde
el entorno de Claude). Antes de empezar, instala las dependencias en tu
propia terminal:

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en el navegador.

## Scripts

- `npm run dev` – servidor de desarrollo (Turbopack)
- `npm run build` – build de producción
- `npm run start` – servidor de producción
- `npm run lint` – ESLint
- `npm run lint:fix` – ESLint con autofix

## Estructura

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
public/
next.config.ts
tsconfig.json
eslint.config.mjs
postcss.config.mjs
```
