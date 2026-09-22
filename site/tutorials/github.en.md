# GitHub: share, protect, and grow your work

GitHub is a website for storing projects and working with other people. You do not need to be a programmer to benefit from it. Think of a repository (or **repo**) as a project folder with a memory: it can keep previous versions, explain the project, record who changed what, and make collaboration visible.

This tutorial uses GitHub and GitHub Desktop. The same ideas apply to GitLab, which offers similar services with different menus and names.

## 0. What GitHub can do for you

### A public scientific profile

Your GitHub profile can show projects, notebooks, documentation, and contributions. It can help a colleague, teacher, employer, or future collaborator understand what you have worked on. A profile is more useful when the projects are understandable: include a short README, a license when appropriate, and clear commit messages.

A profile is not a complete CV. Do not publish personal information, confidential data, passwords, API keys, or unpublished results. Decide what the public should see before you make a repository public.

### A place to meet people who build things

A repository lets you ask questions, report a problem, suggest an improvement, or contribute a fix. You may receive help installing a project, discover a better method, or help someone else debug an error. A discussion or issue is more useful than a private message because it keeps the question and its answer with the project.

When you contact maintainers:

- explain what you expected and what happened;
- mention your operating system and relevant software versions;
- show a short error message or a small example;
- search existing issues before opening a new one;
- be patient and respectful: maintainers are often volunteers.

### A safety net for your own work

If you plan to write code, GitHub can store a remote copy of your project. Version control lets you see what changed, return to an earlier working version, and experiment without losing the main version. GitHub can also automate checks, such as running tests or building documentation whenever you publish a change.

GitHub does not replace backups. Keep important data in more than one place, and do not put sensitive data in a public repository.

## 1. Create a GitHub or GitLab profile

Choose one service first. GitHub and GitLab both provide repositories, version control, collaboration tools, and automation. The buttons and exact vocabulary differ, but the main workflow is the same.

1. Open the [GitHub sign-up page](https://github.com/signup) or the [GitLab sign-up page](https://gitlab.com/users/sign_up).
2. Choose a professional username that you will be comfortable sharing. Avoid passwords, names of confidential projects, or information you do not want in a public URL.
3. Confirm your email address and enable two-factor authentication in the account security settings.
4. Add a short biography and a profile picture only if you want to. Your profile should reveal only information that is appropriate for your audience.
5. Read the service's privacy and notification settings. Choose how much activity you want to receive by email.

### Create your first repository

Create a repository only after deciding who should see it. Give it a short descriptive name, for example `free-recall-analysis`. Add a README if the service offers that option; you can improve it later.

A repository is the online project space. It is not the same thing as a folder on your computer until you connect or clone it.

## 2. Install GitHub Desktop

Git is the version-control program. GitHub is the online service. GitHub Desktop is a graphical application that helps you use Git without memorising terminal commands.

1. Download [GitHub Desktop](https://desktop.github.com/).
2. Install the version for your operating system.
3. Open GitHub Desktop and sign in with your GitHub account.
4. In **File > Options** on Windows or **GitHub Desktop > Settings** on macOS, check that your name and email are correct. These details identify your commits.

GitHub Desktop does not make Git unnecessary. It gives you a visible way to review changes, select them, commit them, pull updates, and push your work online.

## 3. Publish a project with GitHub Desktop

Suppose you already have a project folder on your computer. Publishing it creates an online repository and connects it to that local folder.

1. Open GitHub Desktop.
2. Choose **File > Add local repository**, select the project folder, and choose **Add repository**. If the folder is not yet a Git repository, choose **create a repository** when offered.
3. Review the list of changed files. Do not publish passwords, private data, large raw datasets, or generated temporary files.
4. Write a short summary such as `Add first analysis notebook`, then choose **Commit to main**. A commit is a saved checkpoint with a message.
5. Choose **Publish repository**. Give the repository a clear name and choose **Keep this code private** unless you have deliberately decided it is ready to share.
6. Open the repository page in your browser and check that the README, files, and visibility setting are correct.

The basic cycle is:

1. Change files on your computer.
2. Review the changes in GitHub Desktop.
3. Commit a coherent set of changes with a useful message.
4. Push the commit to GitHub.
5. Pull before starting work if other people may have changed the project online.

## 4. Fork a project and start building

A **fork** is your personal copy of another person's repository on the same hosting service. It gives you a place to experiment without changing the original project.

### Fork when you do not have write access

Fork a repository when you want to use someone else's project as a starting point, test an idea, fix a bug, or propose a contribution but cannot directly create branches in the original repository. After forking, clone your copy with GitHub Desktop:

1. Open the original repository page and choose **Fork**.
2. Choose your account as the destination.
3. In GitHub Desktop, choose **File > Clone repository**, select your fork, and choose a local folder.
4. Create a branch for your work, make small changes, and commit them.
5. Push the branch to your fork.
6. If you want the original authors to consider your change, open a **pull request** from your branch to the original repository.

You can fork without contributing upstream. For example, you may want to adapt a teaching example for your own course, keep a private experiment, or learn by changing a copy. Check the original license before redistributing or publishing your adapted work.

### Keep authorship visible

Forking does not make you the author of the original project. Preserve the original copyright notices, license file, README credits, and attribution required by the license. Describe your own changes clearly. Do not remove another person's name or replace the project history with your own name.

Your commits identify your work, but the repository's history also records earlier contributions. If you submit a pull request, the original maintainers decide whether and how to integrate it.

## 5. README, license, and visibility

### Write a useful README

The README is the first document most visitors see. It should answer these questions quickly:

- What problem does this project solve?
- Who is it for?
- What does it contain?
- How can someone install or open it?
- How can someone run a small example?
- Where should someone report a problem?
- What license applies?

Start small. A good first README can contain a project title, two sentences of context, a quick-start instruction, an example result, and a contact or issue link. Update it when the workflow changes.

### Choose a license deliberately

A license tells other people what they may do with your code, text, or other files. Without a license, people generally do not automatically have permission to copy, modify, or redistribute your work, even when the repository is public.

Read the [choose a license guide](https://choosealicense.com/) and follow your institution's rules. Common choices include permissive licenses such as MIT and BSD, and licenses with conditions such as GPL. A license for code may not cover datasets, images, or articles, which can have separate rights.

Do not add a license to someone else's project as if you were the owner. Preserve the existing license and ask for advice when ownership is unclear.

### Public or private?

A **public** repository can be viewed and often copied by anyone. Choose public when you want others to learn from, reuse, inspect, or contribute to a project and you have permission to share every file.

A **private** repository limits access to people you invite. Choose private for unfinished work, student or patient data, confidential research, secrets, or material that you are not authorised to redistribute. Private does not mean perfectly secure: invite only the people who need access and never commit passwords or tokens.

## 6. Versioning, branches, and good habits

### Versioning in plain language

Version control is a timeline of meaningful states of a project. A **commit** is one saved state. A commit should describe one understandable change, such as `Explain input format` or `Fix empty file handling`.

A commit is not a backup of every thought. Before committing, check that the files belong together, remove secrets, and write a message that will make sense in a few months.

### Branches are safe workspaces

The `main` branch should represent the version that is ready to use. A branch is a parallel line of work where you can try one feature, correction, or experiment without disturbing `main`.

Use a simple workflow:

1. Pull the latest changes.
2. Create a branch with a descriptive name such as `improve-readme` or `fix-import-error`.
3. Make a small change and test it.
4. Commit the change.
5. Push the branch and review it online.
6. Merge it into `main` only when it is understandable and working.

For a personal experiment, you can keep the branch or delete it after merging. For a shared project, discuss larger changes before investing a lot of work.

### Document as you go

Good documentation is part of the work, not decoration added at the end. Record the purpose, inputs, expected outputs, software versions, assumptions, and known limitations. Prefer small examples that another person can run.

A practical checklist before sharing a repository:

- The README says what the project does and how to start.
- The repository has an appropriate license or explains why one is absent.
- Files and folders have descriptive names.
- Commits are small enough to understand.
- The main branch is usable.
- No passwords, tokens, personal data, or confidential results are included.
- Instructions have been tested on a clean or unfamiliar computer.
- Original authors and reused material are credited.

## Next step

Create a small private repository for one of your projects. Add a README, publish one meaningful commit, create a branch, make one documented change, and decide whether the project can responsibly become public. That short exercise gives you the complete cycle without putting important work at risk.
