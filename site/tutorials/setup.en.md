# Set up your scientific programming workspace

A good scientific project is easy to reopen weeks later. These choices give every project a predictable home and make it easier for someone else to reproduce your work.

## 0. Check your computer before downloading

The Python download page contains several links. They are not different Python courses: each link is an installer made for a different computer. We check your computer configuration so you can choose the correct link and avoid downloading a file that your computer cannot run.

You only need to identify two things:

1. **Your operating system:** Windows, macOS, or Linux.
2. **Your processor architecture:** usually 64-bit Intel/AMD, or ARM64 on newer computers.

You will use these two answers when you reach the **Files** table at the bottom of the Python 3.12 page. For example, a normal 64-bit Windows computer should use **Windows installer (64-bit)**. Do not choose a link because it is the first one you see or because its filename looks familiar.

On Windows, open **Settings > System > About**. Read **Windows specifications** for your Windows version and **System type** for the processor architecture. On macOS, choose **Apple menu > About This Mac**: computers with an Apple M-series chip are Apple silicon, while Intel Macs use Intel. On Linux, open a terminal and run:

```windows
systeminfo | findstr /B /C:"OS Name" /C:"System Type"
```

```mac
sw_vers
uname -m
```

```linux
cat /etc/os-release
uname -m
```

The Python download table uses these labels:

- **macOS 64-bit universal2 installer**: the normal macOS installer. Universal2 works on both Intel Macs and Apple silicon Macs; it requires macOS 10.13 or later.
- **Windows installer (64-bit)**: the recommended choice for most Windows computers with an Intel or AMD 64-bit processor.
- **Windows installer (32-bit)**: only for an older 32-bit Windows installation. Do not choose it just because your computer is old.
- **Windows installer (ARM64)**: for Windows computers with an ARM processor. The table marks it experimental, so use it only when your System type says ARM-based processor.
- **Gzipped source tarball** and **XZ compressed source tarball**: Python source code for people who want to compile Python themselves. They are not the normal student installers.
- **Windows embeddable package**: a special package for embedding Python inside another application. Do not choose it for a normal Python installation.

### How to choose your link

Use this short decision process:

- Windows + 64-bit Intel/AMD: choose **Windows installer (64-bit)**.
- Windows + ARM: choose **Windows installer (ARM64)** only when your system information says ARM-based processor.
- Older Windows + 32-bit: choose **Windows installer (32-bit)**.
- macOS, Intel or Apple silicon: choose **macOS 64-bit universal2 installer**.
- Linux: there is usually no single universal installer in this table. Install Python through your Linux distribution's package manager, as explained below.

## 1. Make a home for every project

Keep project files together, but separate their roles. This prevents raw data from being overwritten accidentally and makes a project easier to share.

1. Create one folder per project, for example `free-recall`.
2. Inside it, create three folders: `data/`, `code/`, and `doc/`.
3. Put original measurements in `data/`, Python scripts in `code/`, and notes, instructions, or reports in `doc/`.
4. Never edit your original data directly. Save cleaned or derived data with a clear name such as `data/clean_recall.csv`.

```windows
free-recall/
|-- data/
|   |-- raw_recall.csv
|   `-- clean_recall.csv
|-- code/
|   `-- analyse_recall.py
`-- doc/
    `-- notes.md
```

```mac
free-recall/
|-- data/
|   |-- raw_recall.csv
|   `-- clean_recall.csv
|-- code/
|   `-- analyse_recall.py
`-- doc/
    `-- notes.md
```

```linux
free-recall/
|-- data/
|   |-- raw_recall.csv
|   `-- clean_recall.csv
|-- code/
|   `-- analyse_recall.py
`-- doc/
    `-- notes.md
```

## 2. Install VS Code

VS Code is the workspace where you read files, write Python, run commands, and see errors in one place. It is an editor, not Python itself, so both tools are needed.

1. Open the [official VS Code download page](https://code.visualstudio.com/download).
2. Choose the installer for your operating system and accept the default options.
3. Open VS Code and install the Microsoft Python extension from the Extensions view.
4. Open your `free-recall` folder with **File > Open Folder**.

### Open and understand the terminal

The terminal is a text-based window where you give commands directly to your computer. It is useful here because Python and uv are command-line tools: you can see exactly which version is running and exactly where packages are installed.

In VS Code, open it with **View > Terminal**. You can also click the terminal icon in the top-right of the integrated terminal area. On Windows, the default profile is usually PowerShell. On macOS, the default is usually zsh. The commands in this tutorial work in both; Windows PowerShell commands are shown by default.

The terminal should open in your project folder. Check your location before running commands:

```windows
# Windows PowerShell
Get-Location
```

```mac
# macOS terminal
pwd
```

```linux
# Linux terminal
pwd
```

VS Code may also include AI features such as GitHub Copilot Chat or inline suggestions. They can send code or context to an AI service. If you are working with sensitive or confidential data, disable them completely before opening that project: open **Extensions**, find the AI extension (for example GitHub Copilot), choose the gear icon, and select **Disable** or **Disable (Workspace)**. Also turn off inline suggestions in **Settings** by searching for `inline suggest` and disabling them. Check your institution's data policy before re-enabling any AI feature.

## 3. Install Python 3.12

Python runs your programs. Using the same major and minor version across a class reduces surprises when packages or examples behave differently.

1. Open the [Python 3.12 download page](https://www.python.org/downloads/release/python-31210/) on python.org.
2. Download the installer for your operating system.
3. On Windows, tick **Add python.exe to PATH** before selecting **Install Now**.
4. Open a new VS Code terminal and check the installation:

```windows
python --version
python -c "print(2 + 2)"
```

```mac
python3 --version
python3 -c "print(2 + 2)"
```

```linux
python3 --version
python3 -c "print(2 + 2)"
```

At the bottom of the Python 3.12 page, choose the installer that matches your computer. For most Windows students, this is the recommended **Windows installer (64-bit)**:

![Python 3.12 download table showing the recommended Windows installer](images/python_links.png)

### Install Python 3.12 on Linux

Linux distributions usually install Python through a package manager instead of the Windows-style installer in the table. First identify your distribution with `cat /etc/os-release`, then use the matching commands below. The commands install Python 3.12, pip, and the virtual-environment support needed by many Python projects.

```linux
# Ubuntu or Debian
sudo apt update
sudo apt install python3.12 python3.12-venv python3-pip

# Fedora
sudo dnf install python3.12 python3-pip

# Arch Linux
sudo pacman -S python python-pip
```

Check that Python is available:

```linux
python3 --version
python3 -m pip --version
```

If your distribution does not provide Python 3.12, follow its current Python packaging guidance rather than replacing the system Python manually. The system may depend on its existing Python version.

## 4. Install uv and create the project environment

`uv` manages a project environment and its packages. That keeps dependencies recorded for this project instead of changing your whole computer's Python installation.

1. In the VS Code terminal, install uv with pip:

```windows
python -m pip install uv
```

```mac
python3 -m pip install uv
```

```linux
python3 -m pip install uv
```

On macOS or Linux, use `python3` because `python` may refer to another system tool.
2. In the VS Code terminal, move into your project folder. If you are not already there, use `cd` followed by the project path.
3. Ask uv to create a Python 3.12 environment and add Matplotlib for plotting.
4. Run your script through uv so it uses the project's environment.

```windows
uv init --python 3.12
uv add matplotlib
uv run python code/analyse_recall.py
```

```mac
uv init --python 3.12
uv add matplotlib
uv run python3 code/analyse_recall.py
```

```linux
uv init --python 3.12
uv add matplotlib
uv run python3 code/analyse_recall.py
```

You can also read the [official uv installation guide](https://docs.astral.sh/uv/getting-started/installation/) if your operating system restricts pip installations.

## 5. Troubleshoot with small checks

When setup fails, test one layer at a time. The error usually tells you whether the problem is the folder, Python, the environment, or a package.

### `python` is not recognised

Close and reopen VS Code first. If it still fails on Windows, reinstall Python and select **Add python.exe to PATH**.

### VS Code uses the wrong Python

Open the Command Palette, choose **Python: Select Interpreter**, and select the environment created by uv.

### `No module named matplotlib`

Run `uv add matplotlib`, then run the file with `uv run python ...`. Do not install into a different global Python by accident.

### I do not know where the terminal is

Use **View > Terminal** in VS Code. The terminal should show your project folder before you run commands.

## Next step

You now have a repeatable starting point. Write a small script in `code/`, read a file from `data/`, and explain the result in `doc/`.

## Notebook or `.py` file?

Both formats contain Python, but they support different ways of working.

- A **Jupyter notebook** (`.ipynb`) is divided into cells. You can run one cell at a time and see text, tables, plots, and explanations directly below the code. Use a notebook when exploring data, testing an idea, or teaching a concept step by step.
- A **Python file** (`.py`) is a text file containing a complete script. You normally run it from top to bottom. Use a `.py` file for reusable analysis, a command-line program, or code that should run the same way every time.

A common scientific workflow is to explore in a notebook, then move the stable and reusable parts into `.py` files. Keep the notebook in `doc/` or at the project root, and keep reusable code in `code/`.
