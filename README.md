
# Clementogol Portfolio

A modern, responsive developer portfolio built with [Next.js](https://nextjs.org/) and TypeScript, featuring App Router, MDX-powered blogging, and seamless dark/light mode support.

![Portfolio Banner](public/cover.png) <!-- Change this to your actual banner path if you have one -->

---

## 🚀 Live Demo

👉 [clementogol.com](https://clementogol.com)

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Blog with MDX](#blog-with-mdx)
- [Comments Integration](#comments-integration)
- [Customization Guide](#customization-guide)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

- ⚡️ **Next.js 15** with App Router
- 💅 **Tailwind CSS** for rapid styling and custom themes
- 🌗 **Dark/Light mode** toggle
- ✍️ **MDX Blog support:** Write posts in Markdown + JSX
- 🏷️ **Dynamic project & blog listings**
- 🔍 **SEO optimized:** Metadata & Open Graph tags
- 💬 **Giscus-powered comments** on blog posts
- 📱 **Responsive design** for all devices
- 🛠️ **TypeScript** strict typing
- 🔗 **Social links** and contact integration
- 🖼️ **Optimized images** via `next/image`
- 🛡️ **Accessible & performant**

---

## 📸 Screenshots

<!--
Add screenshots in your /public or /screenshots directory and update these links
-->
| Homepage                   | Blog Post                  | Dark Mode                 |
|----------------------------|----------------------------|---------------------------|
| ![](public/screenshot1.png) | ![](public/screenshot2.png) | ![](public/screenshot3.png) |

---

## 🏁 Getting Started

First, clone the repository:

```bash
git clone https://github.com/clementogol/clementogol-portfolio.git
cd clementogol-portfolio
```

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🗂 Project Structure

```
clementogol-portfolio/
├── blogposts/            # Blog posts in MDX
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app router pages/components
│   ├── components/       # Reusable UI components
│   ├── styles/           # Global styles
│   └── ...
├── README.md
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── ...
```

---

## 📝 Blog with MDX

- Add your blog posts as `.mdx` files inside the `blogposts/` directory.
- Each post supports frontmatter for metadata (title, date, excerpt, coverImage).
- Example frontmatter:

  ```mdx
  ---
  title: "How I Built My Portfolio"
  date: "2024-06-29"
  excerpt: "A behind-the-scenes look at building a Next.js portfolio site."
  coverImage: "/images/blog/portfolio-cover.png"
  ---
  ```

- You can use React components inside your MDX for custom elements or UI.

---

## 💬 Comments Integration

This project integrates [Giscus](https://giscus.app/) for blog post comments.

- Comments automatically appear below each blog post.
- Theme adapts to site’s dark/light mode.

You can customize Giscus by editing the `Comments.tsx` component.

---

## 🛠️ Customization Guide

- **Branding:**  
  Update your logo, favicon, and color palette in `public/` and Tailwind config.

- **Social Links:**  
  Edit your social links and contact info in the layout or dedicated components.

- **SEO:**  
  Modify metadata and Open Graph in the relevant config/components.

- **Blog:**  
  Add new `.mdx` files in `blogposts/` to publish articles.

---

## 🧰 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [Giscus](https://giscus.app/) (comments)
- [Vercel](https://vercel.com/) (deployment)

---

## 🤝 Contributing

Pull requests are welcome! If you have suggestions or improvements, open an issue or submit a PR.

1. Fork this repository
2. Create your branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 📬 Contact

Created by [Clement Ogol](https://clementogol.com)  
Feel free to connect on [LinkedIn](https://linkedin.com/in/clementogol) or open an [issue](https://github.com/clementogol/clementogol-portfolio/issues).

---

> Made with ❤️ using Next.js, TypeScript, and coffee!
