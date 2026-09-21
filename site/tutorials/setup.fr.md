# Preparer son environnement de programmation scientifique

Un bon projet scientifique reste facile a rouvrir plusieurs semaines plus tard. Ces choix donnent a chaque projet un emplacement previsible et facilitent la reproduction du travail.

## 0. Verifier les caracteristiques de son ordinateur

La page de telechargement de Python contient plusieurs liens. Ce ne sont pas des cours Python differents : chaque lien correspond a un installateur adapte a un type d'ordinateur. Nous verifions la configuration de votre ordinateur pour choisir le bon lien et eviter de telecharger un fichier que votre ordinateur ne peut pas executer.

Vous devez identifier seulement deux informations :

1. **Votre systeme d'exploitation :** Windows, macOS ou Linux.
2. **L'architecture du processeur :** generalement 64 bits Intel/AMD, ou ARM64 sur les ordinateurs recents.

Vous utiliserez ces deux reponses dans le tableau **Files**, en bas de la page Python 3.12. Par exemple, un ordinateur Windows 64 bits classique utilise **Windows installer (64-bit)**. Ne choisissez pas un lien parce qu'il est le premier ou parce que son nom vous semble familier.

Sous Windows, ouvrez **Parametres > Systeme > Informations**. Consultez **Specifications Windows** pour la version de Windows et **Type du systeme** pour l'architecture du processeur. Sous macOS, choisissez **menu Apple > A propos de ce Mac** : les ordinateurs equipes d'une puce Apple M sont Apple silicon, tandis que les Mac Intel utilisent Intel. Sous Linux, ouvrez un terminal et executez :

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

Le tableau de telechargement Python utilise ces indications :

- **macOS 64-bit universal2 installer** : l'installateur macOS habituel. Universal2 fonctionne sur les Mac Intel et les Mac Apple silicon ; il necessite macOS 10.13 ou une version plus recente.
- **Windows installer (64-bit)** : le choix recommande pour la plupart des ordinateurs Windows avec un processeur Intel ou AMD 64 bits.
- **Windows installer (32-bit)** : uniquement pour une ancienne installation Windows 32 bits. Ne le choisissez pas simplement parce que votre ordinateur est ancien.
- **Windows installer (ARM64)** : pour les ordinateurs Windows avec un processeur ARM. Le tableau le marque comme experimental ; utilisez-le seulement si le type du systeme indique un processeur ARM.
- **Gzipped source tarball** et **XZ compressed source tarball** : le code source Python pour les personnes qui veulent compiler Python elles-memes. Ce ne sont pas les installateurs habituels.
- **Windows embeddable package** : un paquet special pour integrer Python dans une autre application. Ne le choisissez pas pour une installation Python normale.

### Comment choisir son lien

Suivez cette courte decision :

- Windows + Intel/AMD 64 bits : choisissez **Windows installer (64-bit)**.
- Windows + ARM : choisissez **Windows installer (ARM64)** seulement si les informations systeme indiquent un processeur ARM.
- Ancien Windows + 32 bits : choisissez **Windows installer (32-bit)**.
- macOS, Intel ou Apple silicon : choisissez **macOS 64-bit universal2 installer**.
- Linux : il n'y a generalement pas un installateur universel unique dans ce tableau. Installez Python avec le gestionnaire de paquets de votre distribution, comme explique ci-dessous.

## 1. Donner une maison a chaque projet

Gardez les fichiers d'un projet ensemble, tout en separant leurs roles. Cela evite d'ecraser des donnees brutes et rend le projet plus facile a partager.

1. Creez un dossier par projet, par exemple `free-recall`.
2. A l'interieur, creez trois dossiers : `data/`, `code/` et `doc/`.
3. Placez les mesures originales dans `data/`, les scripts Python dans `code/` et les notes ou rapports dans `doc/`.
4. Ne modifiez jamais directement les donnees originales. Enregistrez les donnees nettoyees avec un nom clair comme `data/clean_recall.csv`.

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

## 2. Installer VS Code

VS Code est l'espace de travail pour lire des fichiers, ecrire du Python, executer des commandes et voir les erreurs au meme endroit. C'est un editeur, pas Python lui-meme : les deux outils sont necessaires.

1. Ouvrez la [page officielle de telechargement de VS Code](https://code.visualstudio.com/download).
2. Choisissez l'installateur correspondant a votre systeme et acceptez les options par defaut.
3. Ouvrez VS Code et installez l'extension Python de Microsoft depuis la vue Extensions.
4. Ouvrez le dossier `free-recall` avec **Fichier > Ouvrir le dossier**.

### Ouvrir et comprendre le terminal

Le terminal est une fenetre textuelle dans laquelle vous donnez directement des commandes a l'ordinateur. Il est utile ici parce que Python et uv sont des outils en ligne de commande : vous voyez quelle version fonctionne et ou les paquets sont installes.

Dans VS Code, ouvrez-le avec **Affichage > Terminal**. Vous pouvez aussi cliquer sur l'icone du terminal en haut a droite de la zone du terminal integre. Sous Windows, le profil par defaut est generalement PowerShell. Sous macOS, c'est generalement zsh. Les commandes de ce tutoriel fonctionnent dans les deux cas ; les commandes PowerShell Windows sont donnees par defaut.

Le terminal doit s'ouvrir dans le dossier du projet. Verifiez son emplacement avant de lancer des commandes :

```windows
# Windows PowerShell
Get-Location
```

```mac
# Terminal macOS
pwd
```

```linux
# Terminal Linux
pwd
```

VS Code peut aussi inclure des fonctions d'IA comme GitHub Copilot Chat ou les suggestions en ligne. Elles peuvent envoyer du code ou du contexte vers un service d'IA. Si vous travaillez avec des donnees sensibles ou confidentielles, desactivez-les completement avant d'ouvrir ce projet : ouvrez **Extensions**, trouvez l'extension d'IA (par exemple GitHub Copilot), cliquez sur l'icone d'engrenage, puis choisissez **Disable** ou **Disable (Workspace)**. Desactivez aussi les suggestions en ligne dans les **Parametres** en recherchant `inline suggest`. Verifiez la politique de votre institution avant de reactiver une fonction d'IA.

## 3. Installer Python 3.12

Python execute vos programmes. Utiliser la meme version majeure et mineure dans un cours reduit les surprises liees aux paquets et aux exemples.

1. Ouvrez la [page Python 3.12](https://www.python.org/downloads/release/python-31210/) sur python.org.
2. Telechargez l'installateur correspondant a votre systeme.
3. Sous Windows, cochez **Add python.exe to PATH** avant de choisir **Install Now**.
4. Ouvrez un nouveau terminal VS Code et verifiez l'installation :

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

En bas de la page Python 3.12, choisissez l'installateur correspondant a votre ordinateur. Pour la plupart des etudiants sous Windows, il s'agit de **Windows installer (64-bit)**, recommande :

![Tableau de telechargement Python 3.12 montrant l'installateur Windows recommande](images/python_links.png)

### Installer Python 3.12 sous Linux

Les distributions Linux installent generalement Python avec un gestionnaire de paquets, plutot qu'avec l'installateur Windows presente dans le tableau. Identifiez d'abord votre distribution avec `cat /etc/os-release`, puis utilisez les commandes correspondantes ci-dessous. Elles installent Python 3.12, pip et le support des environnements virtuels necessaire a de nombreux projets Python.

```linux
# Ubuntu ou Debian
sudo apt update
sudo apt install python3.12 python3.12-venv python3-pip

# Fedora
sudo dnf install python3.12 python3-pip

# Arch Linux
sudo pacman -S python python-pip
```

Verifiez que Python est disponible :

```linux
python3 --version
python3 -m pip --version
```

Si votre distribution ne propose pas Python 3.12, suivez sa documentation actuelle sur la gestion de Python plutot que de remplacer manuellement le Python systeme. Le systeme peut dependre de sa version actuelle.

## 4. Installer uv et creer l'environnement du projet

`uv` gere l'environnement du projet et ses paquets. Les dependances restent ainsi liees a ce projet, plutot que de modifier toute l'installation Python de l'ordinateur.

1. Dans le terminal VS Code, installez uv avec pip :

```windows
python -m pip install uv
```

```mac
python3 -m pip install uv
```

```linux
python3 -m pip install uv
```

Sous macOS ou Linux, utilisez `python3` car `python` peut correspondre a un autre outil systeme.
2. Dans le terminal VS Code, placez-vous dans le dossier du projet. Si vous n'y etes pas deja, utilisez `cd` suivi du chemin du projet.
3. Demandez a uv de creer un environnement Python 3.12 et ajoutez Matplotlib pour les graphiques.
4. Executez votre script avec uv afin d'utiliser l'environnement du projet.

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

Vous pouvez aussi consulter le [guide officiel d'installation de uv](https://docs.astral.sh/uv/getting-started/installation/) si votre systeme limite les installations pip.

## 5. Depanner avec de petits tests

Quand l'installation echoue, testez une couche a la fois. L'erreur indique souvent s'il s'agit du dossier, de Python, de l'environnement ou d'un paquet.

### `python` n'est pas reconnu

Fermez puis rouvrez VS Code. Si le probleme persiste sous Windows, reinstallez Python et cochez **Add python.exe to PATH**.

### VS Code utilise le mauvais Python

Ouvrez la palette de commandes, choisissez **Python: Select Interpreter**, puis l'environnement cree par uv.

### `No module named matplotlib`

Executez `uv add matplotlib`, puis lancez le fichier avec `uv run python ...`.

### Je ne trouve pas le terminal

Utilisez **Affichage > Terminal** dans VS Code. Le terminal doit afficher le dossier du projet avant les commandes.

## Prochaine etape

Vous avez maintenant un point de depart reproductible. Ecrivez un petit script dans `code/`, lisez un fichier de `data/` et expliquez le resultat dans `doc/`.

## Notebook ou fichier `.py` ?

Les deux formats contiennent du Python, mais ils correspondent a des manieres de travailler differentes.

- Un **notebook Jupyter** (`.ipynb`) est divise en cellules. Vous pouvez executer une cellule a la fois et voir directement en dessous le texte, les tableaux, les graphiques et les explications. Utilisez un notebook pour explorer des donnees, tester une idee ou enseigner un concept etape par etape.
- Un **fichier Python** (`.py`) est un fichier texte contenant un script complet. Il est normalement execute du debut a la fin. Utilisez un fichier `.py` pour une analyse reutilisable, un programme en ligne de commande ou du code qui doit s'executer de la meme maniere a chaque fois.

Une methode scientifique courante consiste a explorer dans un notebook, puis a placer les parties stables et reutilisables dans des fichiers `.py`. Gardez le notebook dans `doc/` ou a la racine du projet, et le code reutilisable dans `code/`.
