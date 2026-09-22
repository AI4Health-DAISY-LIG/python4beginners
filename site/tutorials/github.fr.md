# GitHub : partager, proteger et faire grandir son travail

GitHub est un site pour stocker des projets et travailler avec d'autres personnes. Il n'est pas necessaire d'etre programmeur pour en tirer profit. Imaginez un depot (ou **repo**) comme un dossier de projet qui a une memoire : il conserve les anciennes versions, explique le projet, indique qui a modifie quoi et facilite la collaboration.

Ce tutoriel utilise GitHub et GitHub Desktop. Les memes idees s'appliquent a GitLab, qui offre des services comparables avec des menus et des noms parfois differents.

## 0. Ce que GitHub peut faire pour vous

### Un profil scientifique public

Votre profil GitHub peut presenter des projets, des notebooks, de la documentation et vos contributions. Il peut aider un collegue, un enseignant, un employeur ou un futur collaborateur a comprendre votre travail. Un profil est plus utile lorsque les projets sont faciles a comprendre : ajoutez un README court, une licence lorsque c'est pertinent et des messages de commit clairs.

Un profil n'est pas un CV complet. Ne publiez pas d'informations personnelles, de donnees confidentielles, de mots de passe, de cles API ou de resultats non publies. Decidez ce que le public peut voir avant de rendre un depot public.

### Rencontrer les personnes qui construisent les outils

Un depot permet de poser une question, de signaler un probleme, de proposer une amelioration ou de contribuer a une correction. Vous pouvez recevoir de l'aide pour installer un projet, decouvrir une meilleure methode ou aider quelqu'un a corriger une erreur. Une discussion ou une issue est plus utile qu'un message prive, car la question et sa reponse restent avec le projet.

Quand vous contactez les mainteneurs :

- expliquez ce que vous attendiez et ce qui s'est passe ;
- indiquez votre systeme d'exploitation et les versions des logiciels utiles ;
- montrez un message d'erreur court ou un petit exemple ;
- cherchez dans les issues existantes avant d'en ouvrir une nouvelle ;
- soyez patient et respectueux : les mainteneurs sont souvent benevoles.

### Un filet de securite pour votre travail

Si vous prevoyez d'ecrire du code, GitHub peut conserver une copie distante de votre projet. Le versionnage permet de voir ce qui a change, de revenir a une version fonctionnelle et d'experimenter sans perdre la version principale. GitHub peut aussi automatiser des verifications, par exemple executer des tests ou construire une documentation lorsque vous publiez une modification.

GitHub ne remplace pas les sauvegardes. Conservez les donnees importantes a plusieurs endroits et ne placez pas de donnees sensibles dans un depot public.

## 1. Creer un profil GitHub ou GitLab

Choisissez d'abord un service. GitHub et GitLab proposent tous deux des depots, le versionnage, des outils de collaboration et de l'automatisation. Les boutons et le vocabulaire exact different, mais le fonctionnement general est le meme.

1. Ouvrez la [page d'inscription GitHub](https://github.com/signup) ou la [page d'inscription GitLab](https://gitlab.com/users/sign_up).
2. Choisissez un nom d'utilisateur professionnel que vous accepterez de partager. Evitez les mots de passe, les noms de projets confidentiels et les informations que vous ne voulez pas voir dans une adresse publique.
3. Confirmez votre adresse e-mail et activez l'authentification a deux facteurs dans les reglages de securite du compte.
4. Ajoutez une courte biographie et une photo uniquement si vous le souhaitez. Votre profil ne doit montrer que les informations adaptees a votre public.
5. Lisez les reglages de confidentialite et de notifications. Choisissez la quantite de messages que vous voulez recevoir par e-mail.

### Creer son premier depot

Ne creez un depot qu'apres avoir decide qui pourra le voir. Donnez-lui un nom court et descriptif, par exemple `free-recall-analysis`. Ajoutez un README si le service le propose ; vous pourrez l'ameliorer ensuite.

Le depot est l'espace du projet en ligne. Il ne devient pas automatiquement un dossier de votre ordinateur : il faut le connecter ou le cloner.

## 2. Installer GitHub Desktop

Git est le programme de gestion de versions. GitHub est le service en ligne. GitHub Desktop est une application graphique qui permet d'utiliser Git sans memoriser les commandes du terminal.

1. Telechargez [GitHub Desktop](https://desktop.github.com/).
2. Installez la version correspondant a votre systeme d'exploitation.
3. Ouvrez GitHub Desktop et connectez-vous avec votre compte GitHub.
4. Dans **File > Options** sous Windows ou **GitHub Desktop > Settings** sous macOS, verifiez que votre nom et votre adresse e-mail sont corrects. Ces informations identifient vos commits.

GitHub Desktop ne rend pas Git inutile. Il vous donne une vue claire pour examiner les modifications, les selectionner, les enregistrer, recuperer les changements et publier votre travail.

## 3. Publier un projet avec GitHub Desktop

Supposons qu'un dossier de projet existe deja sur votre ordinateur. Le publier cree un depot en ligne et relie ce depot au dossier local.

1. Ouvrez GitHub Desktop.
2. Choisissez **File > Add local repository**, selectionnez le dossier du projet, puis choisissez **Add repository**. Si le dossier n'est pas encore un depot Git, choisissez **create a repository** lorsque l'option est proposee.
3. Examinez la liste des fichiers modifies. Ne publiez pas de mots de passe, de donnees privees, de gros fichiers bruts ou de fichiers temporaires generes.
4. Ecrivez un resume court comme `Add first analysis notebook`, puis choisissez **Commit to main**. Un commit est un point de sauvegarde accompagne d'un message.
5. Choisissez **Publish repository**. Donnez un nom clair au depot et choisissez **Keep this code private**, sauf si vous avez decide consciemment qu'il peut etre partage.
6. Ouvrez la page du depot dans votre navigateur et verifiez le README, les fichiers et le reglage de visibilite.

Le cycle de base est le suivant :

1. Modifiez les fichiers sur votre ordinateur.
2. Examinez les modifications dans GitHub Desktop.
3. Faites un commit pour un ensemble coherent de changements, avec un message utile.
4. Poussez le commit vers GitHub.
5. Recuperez les changements avant de commencer si d'autres personnes ont pu modifier le projet en ligne.

## 4. Forker un projet et commencer a construire

Un **fork** est votre copie personnelle d'un depot appartenant a une autre personne ou organisation, sur le meme service. Il vous permet d'experimenter sans modifier le projet original.

### Forker sans avoir les droits d'ecriture

Forkez un depot si vous voulez utiliser le projet de quelqu'un comme point de depart, tester une idee, corriger un bug ou proposer une contribution sans pouvoir creer directement des branches dans le projet original. Apres le fork, clonez votre copie avec GitHub Desktop :

1. Ouvrez la page du depot original et choisissez **Fork**.
2. Choisissez votre compte comme destination.
3. Dans GitHub Desktop, choisissez **File > Clone repository**, selectionnez votre fork et choisissez un dossier local.
4. Creez une branche pour votre travail, faites de petites modifications et commitez-les.
5. Poussez la branche vers votre fork.
6. Si vous voulez que les auteurs examinent votre modification, ouvrez une **pull request** de votre branche vers le depot original.

Vous pouvez forker sans contribuer au projet original. Vous pouvez vouloir adapter un exemple pedagogique pour votre cours, conserver une experience privee ou apprendre en modifiant une copie. Consultez la licence originale avant de redistribuer ou de publier votre adaptation.

### Conserver la paternite

Forker ne fait pas de vous l'auteur du projet original. Conservez les mentions de copyright, le fichier de licence, les credits du README et les attributions exigees par la licence. Decrivez clairement vos propres modifications. Ne supprimez pas le nom d'une autre personne et ne remplacez pas l'historique du projet par votre nom.

Vos commits identifient votre travail, mais l'historique du depot conserve aussi les contributions precedentes. Si vous envoyez une pull request, les mainteneurs originaux decident si et comment l'integrer.

## 5. README, licence et visibilite

### Ecrire un README utile

Le README est souvent le premier document lu par les visiteurs. Il doit repondre rapidement aux questions suivantes :

- Quel probleme le projet resout-il ?
- A qui s'adresse-t-il ?
- Que contient-il ?
- Comment l'installer ou l'ouvrir ?
- Comment executer un petit exemple ?
- Ou signaler un probleme ?
- Quelle licence s'applique ?

Commencez simplement. Un bon premier README peut contenir un titre, deux phrases de contexte, une instruction de demarrage, un exemple de resultat et un lien de contact ou d'issue. Mettez-le a jour lorsque le fonctionnement change.

### Choisir une licence consciemment

Une licence indique ce que les autres personnes peuvent faire avec votre code, votre texte ou vos autres fichiers. Sans licence, les autres n'ont generalement pas automatiquement la permission de copier, modifier ou redistribuer votre travail, meme si le depot est public.

Lisez le [guide de choix d'une licence](https://choosealicense.com/) et suivez les regles de votre institution. Les licences permissives comme MIT et BSD sont courantes ; d'autres, comme GPL, imposent certaines conditions. Une licence de code ne couvre pas forcement les jeux de donnees, les images ou les articles, qui peuvent avoir des droits differents.

N'ajoutez pas une licence au projet de quelqu'un d'autre comme si vous en etiez proprietaire. Conservez la licence existante et demandez conseil si la propriete n'est pas claire.

### Public ou prive ?

Un depot **public** peut etre consulte et souvent copie par tout le monde. Choisissez public si vous voulez que d'autres apprennent de votre projet, le reutilisent, l'inspectent ou y contribuent, et si vous avez l'autorisation de partager chaque fichier.

Un depot **prive** limite l'acces aux personnes invitees. Choisissez prive pour un travail en cours, des donnees d'etudiants ou de patients, une recherche confidentielle, des secrets ou du materiel que vous n'avez pas le droit de redistribuer. Prive ne veut pas dire parfaitement securise : invitez seulement les personnes qui ont besoin d'acces et ne commitez jamais de mots de passe ou de jetons.

## 6. Versionnage, branches et bonnes habitudes

### Le versionnage en langage simple

Le versionnage est une chronologie des etats importants d'un projet. Un **commit** est un etat enregistre. Un commit doit decrire une modification comprehensible, comme `Explain input format` ou `Fix empty file handling`.

Un commit n'est pas une sauvegarde de chaque idee. Avant de commiter, verifiez que les fichiers vont ensemble, retirez les secrets et ecrivez un message qui aura encore du sens dans quelques mois.

### Les branches sont des espaces de travail surs

La branche `main` doit representer la version prete a etre utilisee. Une branche est une ligne de travail parallele ou vous pouvez essayer une fonctionnalite, une correction ou une experience sans perturber `main`.

Utilisez un fonctionnement simple :

1. Recuperez les dernieres modifications.
2. Creez une branche avec un nom descriptif comme `improve-readme` ou `fix-import-error`.
3. Faites une petite modification et testez-la.
4. Commitez la modification.
5. Poussez la branche et examinez-la en ligne.
6. Fusionnez-la dans `main` seulement lorsqu'elle est comprehensible et fonctionnelle.

Pour une experience personnelle, vous pouvez conserver la branche ou la supprimer apres la fusion. Dans un projet partage, discutez des changements importants avant d'y consacrer beaucoup de temps.

### Documenter au fur et a mesure

Une bonne documentation fait partie du travail ; ce n'est pas une decoration ajoutee a la fin. Notez l'objectif, les entrees, les sorties attendues, les versions des logiciels, les hypotheses et les limites connues. Preferez de petits exemples qu'une autre personne peut executer.

Checklist pratique avant de partager un depot :

- Le README explique le projet et indique comment commencer.
- Le depot a une licence adaptee ou explique pourquoi elle est absente.
- Les fichiers et les dossiers ont des noms descriptifs.
- Les commits sont assez petits pour etre compris.
- La branche principale est utilisable.
- Aucun mot de passe, jeton, donnee personnelle ou resultat confidentiel n'est inclus.
- Les instructions ont ete testees sur un ordinateur vierge ou inconnu.
- Les auteurs originaux et les reutilisations sont credits.

## Prochaine etape

Creez un petit depot prive pour l'un de vos projets. Ajoutez un README, publiez un commit utile, creez une branche, faites une modification documentee et decidez si le projet peut raisonnablement devenir public. Cet exercice court vous fait pratiquer tout le cycle sans mettre en danger un travail important.
