# 🎭 BDD Playwright with Cucumber & TypeScript 🚀

Welcome to the **BDD Playwright Automation Framework**! This project utilizes BDD (Behavior-Driven Development) patterns with **Cucumber** and **Playwright** under **TypeScript** to deliver robust end-to-end testing for modern web apps.

Currently configured base URL: **https://ecommerce-playground.lambdatest.io/** 🛍️

---

## 🛠️ Prerequisites

Before you start, make sure you have the following installed:
*   [Node.js](https://nodejs.org/) (v16+ recommended, tested with v26+) 🟢
*   [npm](https://www.npmjs.com/) (installed automatically with Node.js) 📦

---

## 📥 Getting Started / Installation

1.  **Clone the Repository** 👥
    ```bash
    git clone https://github.com/matiastartara/bdd-playwright
    cd bdd-playwright
    ```

2.  **Install Dependencies** ⚡
    ```bash
    npm install
    ```

3.  **Install Playwright Browsers** 🌐
    ```bash
    npx playwright install chromium --with-deps
    ```

---

## 🚀 Running the Tests

To run the BDD feature scenarios:

```bash
npm test
```

Or run directly via Cucumber CLI:

```bash
npx cucumber-js
```

---

## 📂 Project Structure

```text
bdd-playwright/
├── src/
│   ├── features/          # 📄 Gherkin .feature specifications
│   │   └── search.feature
│   ├── pages/             # 🧱 Page Object Model (POM) classes
│   │   └── HomePage.ts
│   ├── steps/             # 🛠️ TypeScript Step Definitions mapping Gherkin steps to code
│   │   └── searchSteps.ts
│   └── support/           # ⚙️ Hooks (Before/After setup), Custom Worlds, & Configurations
│       └── hooks.ts
├── .gitignore             # 🙈 Git ignore rules
├── cucumber.yml           # ⚙️ Cucumber configuration profiles
├── package.json           # 📦 Scripts & dependencies configuration
├── tsconfig.json          # 🔧 TypeScript compiler configuration
└── README.md              # 📖 Project documentation
```

---

## 🏗️ Architecture & Configuration

*   **Playwright Integration**: Hooked into Cucumber's lifecycle (`BeforeAll`, `Before`, `After`, `AfterAll`) in [hooks.ts](src/support/hooks.ts). It spins up a single browser instance and establishes isolated contexts/pages for each scenario to execute concurrently or sequentially in an optimized fashion.
*   **TypeScript Compilation**: Handled seamlessly at runtime using `ts-node/register`. The configurations are specified in [tsconfig.json](tsconfig.json).
*   **Cucumber Profiles**: Configured in [cucumber.yml](cucumber.yml). It sets the search path for step definitions, requires, formatters (summary & progress), and target features automatically.
*   **Assertion Engine**: Combines Cucumber's step metrics with Playwright's native web first assertions (`expect`) to assert element visibility, matching attributes, and element count counts safely.

---

## 🔌 VS Code Test Explorer Integration 🧩

To execute and debug BDD Gherkin scenarios directly from the **VS Code Test Explorer**, follow these steps:

1. Install the official **Cucumber** extension:
   * **Extension ID**: `cucumberopen.cucumber-oficial` (or search for **Cucumber** in the Extensions sidebar).
2. Configure settings inside your workspace settings `.vscode/settings.json`:
   ```json
   {
     "cucumber.features": [
       "src/features/**/*.feature"
     ],
     "cucumber.glue": [
       "src/steps/**/*.ts",
       "src/support/**/*.ts"
     ]
   }
   ```
3. Open the **Testing** panel on the left sidebar (Flask icon 🧪).
4. Click **Run Tests** next to any feature or individual scenario to run them directly in the UI!

