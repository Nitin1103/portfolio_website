# Nitin Sharma — Personal Portfolio Website

A modern, production-grade personal portfolio website for **Nitin Sharma**, designed to showcase engineering capabilities across backend systems, cloud architecture, and AI/GenAI applications.

🔗 **Live Website**: [https://nitin1103.github.io/portfolio_website/](https://nitin1103.github.io/portfolio_website/)

---

## ⚡ Tech Stack

- **Framework**: Next.js (App Router, Turbopack)
- **Language**: TypeScript (strict typing)
- **Styling**: Tailwind CSS with custom dark and light themes
- **Typography**: Geist Sans & Geist Mono (`next/font/google`)
- **Hosting**: GitHub Pages via automated GitHub Actions CI/CD pipeline

---

## 🚀 Features

- **Dual Theme**: Built-in Light and Dark modes with persistent preference in `localStorage`.
- **Interactive System Architecture Canvas**: Real-time interactive topology diagram responding to mouse interactions and theme changes.
- **Centralized Content Architecture**: All content is managed in a single, strongly typed file: `src/data/portfolio.ts`.
- **Selected & Featured Projects**: Distinct technical previews including architecture diagrams, FastAPI code snippets, and telemetry consoles.
- **Performance & Accessibility**: 100% responsive, semantic HTML, keyboard accessible, and `prefers-reduced-motion` compliant.

---

## 🛠️ Local Development

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and Export

```bash
npm run build
```

The static output is generated in `./out` and automatically deployed to GitHub Pages on every push to the `main` branch.

---

## 📝 Customizing Portfolio Data

To update personal information, bio, experience, projects, or skills, edit:
👉 `src/data/portfolio.ts`
