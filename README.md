# Vanguard Studio

An modern, dark-themed engineering portfolio and technical journal built with React, Vite, and EmailJS. Designed using the **Obsidian & Cyber Mint** color system with a focus on performant UI architecture, interactive showcases, and dynamic contact workflows.

---

## ⚡ Features

- **Obsidian & Cyber Mint Design System**: Dark-mode aesthetic (`#050811` / `#00F5A0`) utilizing CSS variables, high-contrast typography, and glassmorphic UI elements.
- **Dynamic Routing**: Built with `react-router-dom` for navigation across Home, Projects, About, Technical Journal (Blog), and Contact pages.
- **Interactive Technical Journal**: Filterable article sidebar, voting/like interactions, dynamic reading time calculation, and sequential article navigation.
- **Direct Mail Integration**: Live contact form powered by EmailJS using double-curly (`{{...}}`) parameter bindings to route project proposals straight to your inbox.
- **Modular Component Architecture**: Reusable project cards, responsive layouts, and SVG asset fallbacks.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Modular CSS3 with Custom Tokens & CSS Variables
- **Form Service:** EmailJS (`@emailjs/browser`)
- **Icons & Graphics:** Inline SVG Assets

---

## 📂 Project Structure

```text
vanguard-studio/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/          # Project visual assets & avatar SVGs
│   │   └── styles/          # Variables (color tokens) & global CSS
│   ├── components/          # Reusable UI (Hero, Navbar, Footer, ProjectCard, etc.)
│   ├── pages/               # Page views (Home, Projects, About, Blog, Contact)
│   ├── data/                # Data models for projects and articles
│   ├── utils/               # Dynamic helper functions (reading time, etc.)
│   ├── App.jsx              # Main App wrapper & route setup
│   └── main.jsx             # React DOM entry point
├── .env.example             # Template for required environment variables
├── package.json
└── vite.config.js
