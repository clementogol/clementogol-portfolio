
# Clementogol Portfolio

A modern developer portfolio built with [Next.js](https://nextjs.org/) and TypeScript, featuring the App Router and full dark/light mode support.  
Showcases your skills, projects, and contact details in a clean, minimal UI.

---

## 🗂️ Project Structure

```
clementogol-portfolio/
├── .env.local
├── .gitignore
├── components.json
├── encoded.txt
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.ico
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── chat/
    │   │   │   └── route.ts
    │   │   └── contact/
    │   │       └── route.ts
    │   ├── blog/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── ThemeProvider.tsx
    ├── components/
    │   ├── ui/
    │   │   ├── Article.tsx
    │   │   ├── ClientLayout.tsx
    │   │   └── Comments.tsx
    │   ├── chat/
    │   ├── Contact/
    │   ├── Header/
    │   ├── Projects/
    │   ├── Footer.tsx
    │   ├── Home.tsx
    │   ├── ParticleBackground.tsx
    │   ├── ProjectsHeading.tsx
    │   ├── ShadowBlock.tsx
    │   └── Skills.tsx
    ├── data/
    ├── hooks/
    ├── lib/
    ├── tests/
    └── utils/
```

---

## 🚀 Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    # or
    bun install
    ```

2. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

---

## ✨ Main Features

- [x] **Beautiful, responsive UI**
- [x] Dark & light mode with `next-themes`
- [x] Tailwind CSS for rapid custom styling
- [x] Project, Skills, Blog, and Contact sections
- [x] Modern App Router structure
- [x] Easy customization & clean codebase

---

## 📦 Key Files

### `package.json`

```json
{
  "name": "clementogol-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "geist": "^1.2.1",
    "next": "14.1.0",
    "next-themes": "^0.2.1",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

---

### `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export const metadata: Metadata = {
  title: "Clement Ogol's Portfolio",
  description: "A portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### `src/app/page.tsx`

```tsx
import Header from "@/components/Header/page";
import Home from "@/components/Home";
import Projects from "@/components/Projects/page";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center px-4">
      <ParticleBackground />
      <div className="z-10 w-full max-w-5xl">
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
```

---

### `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
```

---

### `src/app/ThemeProvider.tsx`

```tsx
"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

---

## 🧩 Component Placeholders

You can fill in the UI of your main sections as you like. Example:

#### `src/components/Home.tsx`

```tsx
import React from 'react';

const Home = () => (
  <section id="home" className="py-20">
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    <p className="mt-4">Developer | Creator | Innovator</p>
  </section>
);

export default Home;
```

#### `src/components/Skills.tsx`

```tsx
import React from 'react';

const Skills = () => (
  <section id="skills" className="py-20">
    <h2 className="text-3xl font-bold text-center">Skills</h2>
    {/* Skill items go here */}
  </section>
);

export default Skills;
```

---

## 🔌 API Route Example

#### `src/app/api/contact/route.ts`

```ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Contact form submission:", body);
    // Add logic here to handle form data, e.g., send an email
    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred." }, { status: 500 });
  }
}
```

---

## 🛡️ .gitignore Example

```gitignore
/node_modules
/.pnp
.pnp.js
/coverage
/.next/
/out/
/build
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env.local
.env.*
.vercel
*.tsbuildinfo
next-env.d.ts
```

---

## 🚀 Deploy

**Recommended commit message:**
```bash
git add .
git commit -m "chore: trigger deployment"
git push origin main
```

---

## 📖 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

Made with ❤️ by [Clement Ogol](https://clementogol.com)
