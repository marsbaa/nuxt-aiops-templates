# nuxt-aiops-templates

A reusable, versioned **template pack + CLI installer** designed for:

- **Nuxt 3**
- **Vue 3 Composition API**
- **Pinia**
- **Firebase**
- **OpenSpec (spec-driven development)**
- **Maker Framework (atomic task decomposition)**
- **AI-assisted coding with Augment, Codex, Claude Code, Copilot**
- **Multi-agent workflows (Architect, Planner, Coder, Reviewer)**

This package provides a **consistent, DRY, production-quality starting point** for all your Nuxt + AI Engineering projects, without needing to manually copy templates ever again.

---

## 🚀 Features

### ✅ 1. Complete Template Pack  
Includes ready-to-use templates for:
- Specs (Feature, User Story, Acceptance Tests, Tasks, API Specs)
- AI Agent system prompts (Architect, Planner, Coder, Refactor, Maker Decomposer)
- Nuxt/Vue/Pinia/Firebase code templates  
- Workflow templates (PRD, Checklists, Architecture docs)

### ✅ 2. CLI Installer  
Copy all templates into your current project:

```
npx maker-init
```

### ✅ 3. Version-controlled via NPM  
Update all your projects at once by bumping the package version.

### ✅ 4. AI-Friendly Templates  
Designed for Codex, Augment, Claude Code, Copilot, Serena, and multi-agent workflows.

---

## 📦 Installation

Install into any Nuxt/Vue project:

```
npm install nuxt-aiops-templates
```

or

```
yarn add nuxt-aiops-templates
```

---

## ⚡ Copy Templates Into Your Project

This command copies the entire `/templates` directory to your project's root:

```
npx maker-init
```

You will then have:

```
/templates
   /spec
   /agent
   /code
   /workflow
```

AI agents can now directly read and use your standard project patterns.

---

## 🔄 Updating Templates

1. Update templates in your GitHub repo  
2. Bump version:

```
npm version patch
```

3. Publish:

```
npm publish
```

4. In any project:

```
npm update nuxt-aiops-templates
npx maker-init
```

This ensures all projects stay in sync with your latest templates.

---

## 📁 Folder Structure

```
templates/
│
├─ spec/
│   ├─ feature.md
│   ├─ user-story.md
│   ├─ acceptance-tests.md
│   ├─ task.md
│   └─ api-spec.md
│
├─ agent/
│   ├─ system-architect.md
│   ├─ system-planner.md
│   ├─ system-coder.md
│   ├─ system-refactor.md
│   └─ system-maker-decomposer.md
│
├─ code/
│   ├─ vue-component.vue
│   ├─ nuxt-composable.ts
│   ├─ pinia-store.ts
│   ├─ firebase-api.ts
│   └─ util-function.ts
│
└─ workflow/
    ├─ prd.md
    ├─ architecture-diagram.md
    ├─ checklist-pre-code.md
    └─ checklist-post-code.md
```

---

## 🤖 Designed for AI-Driven Development

This template pack supports:
- **OpenSpec → Task → Code** pipelines  
- **Maker Framework** atomic task decomposition  
- **BMAD-style multi-agent systems**  
- **AI-first project architecture**  
- **Nuxt 3 + Firebase best practices**

Your agents always have:
- A reference architecture  
- Clean system prompts  
- Code patterns to follow  
- DRY, reusable project structures  

---

## 📜 License  
MIT License  
Free for personal and commercial projects.

---

Enjoy consistent AI-powered development across all Nuxt projects using `nuxt-aiops-templates`!
