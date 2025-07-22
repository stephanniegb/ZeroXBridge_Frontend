# ⚡ ZeroXBridge Frontend

> Decentralized cross-chain liquidity without bridging — powered by ZK on Starknet.

ZeroXBridge is a trustless liquidity protocol that allows users to lock assets on Ethereum and instantly access liquidity on Starknet — without bridging  assets. 

📍 **Roadmap:** [Explore-Beyond-Innovations/ZeroXBridge-Roadmap](https://github.com/Explore-Beyond-Innovations/ZeroXBridge-Roadmap)  
💬 **Community Chat:** [t.me/ZeroXBridge1](https://t.me/ZeroXBridge1)

---

## 🚀 Project Overview

This project is built using [Next.js](https://nextjs.org) with the **App Router**, **TailwindCSS**, and **Framer Motion** for smooth animations and responsive UI.

The `zero-x-v2` branch is a **complete redesign** of the landing page — responsive across **mobile**, **desktop**, and **4K displays** — based on the latest Figma designs.

We welcome contributions! If you're interested, check out the open issues or reach out via [Telegram](https://t.me/ZeroXBridge1).

---

## 🛠 Getting Started

> Requires Node.js and either npm, yarn, pnpm, or bun.

### 1. Clone the repo

```bash
git clone https://github.com/Explore-Beyond-Innovations/ZeroXBridge_Frontend.git
cd ZeroXBridge_Frontend
```

### 2. Switch to the redesign branch

```bash
git checkout zero-x-v2
```

### 3. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 4. Start the development server

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Tech Stack

- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Design System:** [shadcn/ui](https://ui.shadcn.com/)

---

## 📁 Project Structure

```bash
/app
  ├── components      → UI components (shared, modular)
  ├── dashboard       → Dashboard-related pages
  ├── governance      → Governance and voting pages
  ├── hooks           → Custom React hooks
  ├── lock-summary    → Collateral lock summary flow
  └── page.tsx        → Main landing entry (to be replaced in v2)

/public               → Static assets (images, icons, fonts)
/utils                → Helpers and utility functions
```

---

## 🤝 Contributing

We'd love your help on the `zero-x-v2` redesign!

### How to contribute:

1. Check open [issues](https://github.com/Explore-Beyond-Innovations/ZeroXBridge_Frontend/issues)
2. Comment on the issue you'd like to work on
3. Wait to be assigned before submitting a PR

### Working on your PR

```bash
git checkout -b feat/your-feature
# make your changes
git commit -m "feat: add [your feature name]"
git push origin feat/your-feature
```

Open a pull request to `zero-x-v2` and reference the issue:

```
Closes #issue_number
```

---

## 📦 Deployment

We recommend deploying with [Vercel](https://vercel.com/) for seamless CI/CD.

---

## 📣 Stay Connected

Have questions or feedback? Reach out to the team anytime:

👉 [Join our Telegram](https://t.me/ZeroXBridge1)

---

## 📄 License

MIT — open source and community-first.
