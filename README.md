<h1 align="center">Inventory System: Frontend</h1>

<p align="center"><b>React + TypeScript dashboard for the [inventory backend API](https://github.com/allan818181/inventory-system-backend).</b></p>

<p align="center">![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=white)</p>

## Overview

React + TypeScript inventory dashboard (Vite, shadcn/ui, React Query): products, suppliers, stock movements, low-stock alerts and reports, with protected routes.

## Features

- Login/signup with protected routes
- Dashboard, products, suppliers and stock movement pages
- Low-stock alerts and reports
- Light/dark theme, responsive sidebar layout
- Typed API service layer (`src/services/api.ts`)

## Tech stack

TypeScript · React · Vite · Tailwind CSS · shadcn/ui · React Query

## Getting started

```bash
npm install
npm run dev                     # http://localhost:8080 (or the port Vite prints)
npm run build                   # production build in dist/
```

Copy `.env.example` to `.env` and point it at the backend API.

## Project structure

`src/pages` one file per screen · `src/components` layout and UI · `src/services/api.ts` API client · `src/lib/auth.tsx` auth context

---

<p align="center">Built by <a href="https://github.com/allan818181"><b>Allan Muganyizi Deus</b></a> · Full-Stack &amp; DevOps Engineer · Dar es Salaam, Tanzania<br/>
<a href="https://www.linkedin.com/in/allan-deus-4b888631a">LinkedIn</a> · <a href="mailto:allandeus014@gmail.com">Email</a></p>
