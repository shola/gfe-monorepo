# greatfrontend.com Projects built with Turborepo, Nextjs, ShadCN, and Tailwind

This template is for creating a monorepo with shadcn/ui.

## Apps and Packages

- `gfe`: a [Next.js](https://nextjs.org/) app with [ShadCN](https://ui.shadcn.com/)
- `ui`: component library with [ShadCN](https://ui.shadcn.com/) used by the `gfe` application

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
