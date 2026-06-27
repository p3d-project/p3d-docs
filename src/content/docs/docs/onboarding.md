---
title: Welcome to the Docs
---
# Onboarding Guide

Welcome to the Persona 3 Dual team! This guide will get you set up and oriented regardless of your role.

---

## View the Team Rules
Read the document [HERE](https://docs.google.com/document/d/14vTlQgszSVKGZUHF3B31w882El7HFMNzBfr_OGV5ixs/edit?usp=sharing)

---

## Join the GitHub Organization & Google Drive

We use GitHub to track tasks and coordinate across all teams. **Everyone on the project needs to join the org.**
We use Google Drive to save large files and other assorted documents. **Everyone on the project needs to join the Google Drive.**

**Steps:**
1. Create a [GitHub account](https://github.com) if you don't have one.
2. Message **@thebosst** on Discord with:
   - Your team (Dev, Art, Website, Video)
   - Your GitHub username
   - Your current task (if any)
3. You'll receive an email invitation to join the org - accept it.

> **Example message:**
> `Hey! I just joined the Art team, and need access to the GitHub Organization & Google Drive. My GitHub username is [username]. My email is [insert-email-here]. I'm currently working on [task].`

Once accepted, you'll have access to the [GitHub Organization](https://github.com/p3d-project), [Project Board](https://github.com/orgs/p3d-project/projects/1), and editing access to the [Google Drive](https://drive.google.com/drive/folders/1MS2eOnHn5RiMcLRfc8K1s2ZR8FcY3tgq?usp=drive_link)

---

## Using the Project Board

The project board is how we track progress across all teams.

![Project board overview](/docs/imgs/onboarding/project-board-overview.png)

**Columns:**
| Column | Meaning |
|---|---|
| Backlog | Not yet started, no current priority |
| Next Milestone | Targeted for the upcoming milestone |
| Ready | Current milestone, ready to be picked up |
| In Progress | Actively being worked on |
| In Review | Submitted, awaiting review |
| Done | Completed |
| Suspended | Paused, not actively exploring anymore |

**Guidelines:**
- Drag your issue to **In Progress** when you start, and **Done** when finished.
- **Assign yourself** to any issue you're working on.
- **Comment regularly** on your issue to keep the team updated on progress.
- You can filter by label (e.g. `graphics`, `bug`, `development`, `polish`) or milestone.

![Filtering by label](/docs/imgs/onboarding/project-board-filter.png)

### Creating a New Issue

Use the following format when creating issues:

```
## Summary
[Brief description of what needs to be done and why.]

## Requirements
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Examples / References
[Screenshots, mockups, links, or other reference material.]
```

![Example issue](/docs/imgs/onboarding/issue-example.png)

---

## Dev Team Setup
https://github.com/p3d-project/persona-3-dual

As an overall rule, the team avoids using external libraries as much as possible. We want to build everything ourselves.

The team uses **Docker** as the official development environment. It wraps the entire toolchain into a single image so everyone gets an identical build environment regardless of OS.

### Step 1 — Install Docker

| Platform | Instructions |
|---|---|
| Windows / macOS | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |
| Linux (Ubuntu/Debian) | [Docker's install guide](https://docs.docker.com/desktop/setup/install/linux/) |

Verify the install:
```bash
docker --version
```

### Step 2 — Clone the Repo

```bash
git clone https://github.com/p3d-project/persona-3-dual.git
cd persona-3-dual
```

### Step 3 — Set Up Code Formatting

This project uses [pre-commit](https://pre-commit.com) to auto-format all source files before every commit. It handles C/C++ (clang-format), Python (black + ruff), and web files (prettier).

Install pre-commit:

```bash
# macOS
brew install pre-commit

# Windows / Linux
pip install pre-commit
```

Register the hooks:
```bash
pre-commit install
```

That's it. Hooks run automatically every time you run `git commit`.

**What happens during a commit:**

The hooks reformat your staged files in-place. If any file is changed, the commit is **aborted** so you can review the diff. Just re-stage and commit again.

**Run hooks manually (e.g. before opening a PR):**

```bash
pre-commit run --all-files
```

> **Windows note:** prettier requires Node.js. pre-commit downloads a local copy automatically the first time you run `pre-commit install` or `pre-commit run`.

### Step 4 — Build the Docker Image

Run this **once** (or again whenever `Dockerfile` or `tools/requirements.txt` changes):

```bash
docker build -t p3d-dev .
```

> The first build takes a few minutes while devkitARM downloads. Subsequent builds use the Docker layer cache and are much faster.

### Step 5 — Compile the ROM

```bash
# Linux / macOS
docker run --rm -v "$(pwd)":/project p3d-dev make

# Windows (PowerShell)
docker run --rm -v "${PWD}:/project" p3d-dev make
```

This produces `persona-3-dual.nds` and `sdcard.img` in your repo folder.

### Optional — Interactive Shell

If you want to run commands manually or debug the build:

```bash
# Linux / macOS
docker run --rm -it -v "$(pwd)":/project p3d-dev

# Windows (PowerShell)
docker run --rm -it -v "${PWD}:/project" p3d-dev
```

You'll be inside the container at `/project` (your repo). Type `exit` to leave.

### Useful Docker Commands

| Command | What it does |
|---|---|
| `docker build -t p3d-dev .` | (Re)build the dev image |
| `docker images` | List images on your machine |
| `docker rmi p3d-dev` | Delete the image (frees disk space) |
| `docker ps` | List running containers |

---

## Website Team Setup
https://github.com/p3d-project/p3d-website

The website is an [Astro](https://astro.build) project.

### Step 1 — Install Dependencies

Ensure you have [Node.js](https://nodejs.org) installed, then:

```bash
npm install
```

### Step 2 — Start the Dev Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321` by default.

### Step 3 — Build for Production

```bash
npm run build
```

---

## Art Team Setup

### Recommended Tools

| Role | Tools |
|---|---|
| Graphic Designer | [GIMP](https://www.gimp.org), [Libresprite](https://libresprite.github.io/#!/), [Aseprite](https://www.aseprite.org) |
| Sprite Work | [GIMP](https://www.gimp.org), [Libresprite](https://libresprite.github.io/#!/), [Aseprite](https://www.aseprite.org) |
| Modeling | [Blender](https://www.blender.org) |
| Ripper | [Noesis](https://richwhitehouse.com/index.php?content=inc_projects.php&showproject=91) |


### Workflow

- **Upload all completed assets and their editable source files to [Google Drive](https://drive.google.com/drive/folders/1MS2eOnHn5RiMcLRfc8K1s2ZR8FcY3tgq?usp=sharing).**
- Track your work on the project board. Move issues through the columns as you progress.
- When uploading assets and closing an issue, leave a comment on the related issue with a link to the Drive folder, and upload viewable images to the issue.

---

## Video Team Setup

The video team produces **promo videos** and **devlog videos**, paired with each project milestone.

### Recommended Tools
- TBD

### Workflow
- Each milestone gets a promo video and an accompanying devlog.
- Coordinate with other teams to gather footage, screenshots, and updates before each milestone.
- **Upload all completed assets and their editable source files to [Google Drive](https://drive.google.com/drive/folders/1AFeO9BUEUAk4rjtS9qVomzTrRqkwQMvz?usp=drive_link)** and link them in the relevant issue.

---

*Questions? Reach out on Discord.*
