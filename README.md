# Base Vite TypeScript Project

This is a Vite-based React project with TypeScript support. It includes ESLint, Prettier, TailwindCSS, and Husky for better development experience.

## 📦 Project Setup

Make sure you have **Node.js (>=16.x)** installed.

### 1️⃣ Install Dependencies

Run the following command to install all dependencies:

```sh
npm install

2️⃣ Start Development Server
To start the development server, use:
npm run dev

3️⃣ Build for Production
To build the project for production, use:
npm run build

4️⃣ Preview Production Build
To preview the production build locally, run:
npm run preview

5️⃣ Lint and Format Code:
Check for linting errors:
npm run lint
Automatically fix linting errors:
npm run lint:fix
Check Prettier formatting:
npm run prettier
Fix formatting with Prettier:
npm run prettier:fix

6️⃣ Husky and Lint-Staged
This project uses Husky to enforce pre-commit checks. To ensure it’s set up correctly, run:
npm run prepare

🛠️ Technologies Used
Vite: Fast frontend tooling
React 18: UI library
TypeScript: Type safety
TailwindCSS: Utility-first CSS framework
ESLint & Prettier: Code linting and formatting
Husky & Lint-Staged: Git hooks for quality control
React Router: Navigation management

📂 Project Structure
base_vite_ts/
│-- src/                  # Source code
│   ├── assets/       # Reusable React assets
│   ├── components/       # Reusable React components
│   ├── defines/       # Reusable React defines
│   ├── layouts/       # Reusable React layouts
│   ├── pages/            # Page pages
│   ├── routers/            # routers
│   ├── styles/           # styles (CSS)
│   ├── main.tsx          # Entry point
│-- public/               # Static assets
│-- .eslintrc.json        # ESLint configuration
│-- .prettierrc           # Prettier configuration
│-- tsconfig.json         # TypeScript configuration
│-- vite.config.ts        # Vite configuration
│-- package.json          # Project dependencies and scripts
│-- README.md 
│-- .. 

            # Documentation


This README provides a clear guide on setting up, running, and maintaining the project. Let me know if you need any modifications! 🚀

