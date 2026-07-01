---
title: Onboarding Guide
---
Welcome to the Persona 3 Dual team! This guide will get you set up and oriented regardless of your role.

---

## Team Rules
Read the document [HERE](/docs/guides/team-rules/)

---

## Join the GitHub & Google Drive

We use GitHub to track tasks and coordinate across all teams. **Everyone on the project needs to join the GitHub.**
We use Google Drive to save large files and other assorted documents. **The Team Google Drive is optional.**

**Steps:**
1. Create a [GitHub account](https://github.com) if you don't have one.
2. Message **@thebosst** on Discord with:
   - Your team/role
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
| New | New issue, needs to be reviewed & approved by team leads |
| Backlog | Not yet started, no current priority |
| Next Milestone | Targeted for the upcoming milestone |
| Ready | Current milestone, ready to be picked up |
| In Progress | Actively being worked on |
| In Review | Submitted, awaiting review |
| Done | Completed |
| Suspended | Paused, not actively exploring anymore |

**Guidelines:**
If you are working on a task (which must have an associated GitHub issue), you must:
- Drag your issue to **In Progress** when you start, and **Done** when finished.
- **Assign yourself** to any issue you're working on.
- **Comment regularly** on your issue to keep the team updated on progress.
   - No comment = we don't know whats going on, and the *task will be unassigned* from you
- You can filter by label (e.g. `graphics`, `bug`, `development`, `polish`) or milestone.

![Filtering by label](/docs/imgs/onboarding/project-board-filter.png)

### Creating a New Issue
**Want to add a new issue**? 
Please use the *Bug report* or *Feature request* templates & add it to the *New* column on the project board. Once the associated team lead sees the issue & agrees, they will move it out of *New*.
   - Ensure that you **select the correct repo**. Don't know what repo to select? Select the (default) ```p3d-project/persona-3-dual`` repo. 
   - We put new issues under *New* for a few reasons. It alerts the team leads of new issues; We can ensure the quality of the issue; We can ensure that there isn't a duplicate issue.

![Create issue](/docs/imgs/onboarding/create-issue.png)
![Example issue](/docs/imgs/onboarding/issue-example.png)

---

## Game Dev Team Setup
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

## Web Dev Team Setup
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

## Graphics Team Setup
### Workflow
- **Upload all completed assets and their editable source files to the Team Google Drive [Graphics Folder](https://drive.google.com/drive/folders/1MS2eOnHn5RiMcLRfc8K1s2ZR8FcY3tgq?usp=sharing).**
- Track your work on the project board. Move issues through the columns as you progress.
- When uploading assets and closing an issue, leave a comment on the related issue with a link to the Drive folder, and upload viewable images to the issue.

---

## UX/UI Team Setup
### Workflow
- **Upload all completed assets and their editable source files to the Team Google Drive [UX/UI Folder](https://drive.google.com/drive/folders/1NU6uU6YxzGKnnmSKPJLesKwnWe7O5gmR?usp=drive_link).**
- Track your work on the project board. Move issues through the columns as you progress.
- When uploading assets and closing an issue, leave a comment on the related issue with a link to the Drive folder, and upload viewable images to the issue.

---

## 3D Team Setup
### Workflow
- **Upload all completed assets and their editable source files to the Team Google Drive [3D Folder](https://drive.google.com/drive/folders/1FAb7dC2GPEaNTfF5tSxioYkLp6wkU7tT?usp=drive_link).**
- Track your work on the project board. Move issues through the columns as you progress.
- When uploading assets and closing an issue, leave a comment on the related issue with a link to the Drive folder, and upload viewable images to the issue.

---

## Music Team Setup
### Workflow
- **Upload all completed assets and their editable source files to the Team Google Drive [Music Folder](https://drive.google.com/drive/folders/1suMTqGlqu1NUYZJ7DqjVpWIshWF2ZbXA?usp=drive_link).**
- Track your work on the project board. Move issues through the columns as you progress.
- When uploading assets and closing an issue, leave a comment on the related issue with a link to the Drive folder, and upload viewable images to the issue.

---

## Video Team Setup
### Workflow
- **Upload all completed assets and their editable source files to the Team Google Drive [Video Folder](https://drive.google.com/drive/folders/1AFeO9BUEUAk4rjtS9qVomzTrRqkwQMvz?usp=drive_link).**
- Track your work on the project board. Move issues through the columns as you progress.
- When uploading assets and closing an issue, leave a comment on the related issue with a link to the Drive folder, and upload viewable images to the issue.

---

*Questions? Reach out on Discord.*
