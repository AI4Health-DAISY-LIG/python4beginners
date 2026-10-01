<span style="color:purple; font-weight:bold">Scientific programming</span>
========================================================
M1 sciences cognitives, Université Grenoble-Alpes  
[Benoît Lemaire](https://lpnc.univ-grenoble-alpes.fr/fr/benoit-lemaire), 2026-2027

# <span style="color:blue">Avertissement</span>
Ce document est un notebook Jupyter qui va constituer le support de cette partie introductive de l'enseignement (4h de cours/TD, 4h de TP). Il contient deux types de cellule : du texte Markdown ou du code. L'idée est que ce document devienne le vôtre : vous pouvez modifier les contenus comme vous voulez, exécuter du code (`Ctrl-Entrée`) ou ajouter de nouvelles cellules pour y inclure vos propres notes ou programmes. 
Vous y trouverez des explications sommaires sur le langage Python et à la fin de chaque partie une séquence "<span style="color:green; font-weight:bold">*À vous de jouer*</span>" dans laquelle vous pourrez tester vos connaissances en résolvant de petits exercices. Pour les étudiants qui vont vite, une partie BONUS permet d'aller encore plus loin, en devant souvent aller chercher de l'information à l'extérieur.


# Python en ligne
Les instructions Python peuvent être exécutées de manière interactive ou rassemblées en un programme exécuté d'un coup. Commençons par la manière interactive (appelée REPL=read/execute/print loop). Exécutons ce code (clic dans la zone puis `Ctrl-Entrée` pour exécuter le code) :


```python
8+3
```




    11



Essayons maintenant d'autres calculs. 


```python
8/3
```




    2.6666666666666665




```python
8//3
```




    2




```python
8%3 # qui est le reste de la division de 8 par 3. Au passage, on voit que les commentaires en Python sont précédes d'un #.
```




    2




```python
8**3
```

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Ecrivez dans la zone ci-dessous le calcul pour obtenir le double de la somme de 44 et 55. Puis `Ctrl-Entrée`. Avez-vous trouvé 198 ?


```python

```

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Calculez la moyenne de 5, 6 et 3. Avez-vous trouvé 4.666666667 ?  
BONUS : arrondir à deux chiffres après la virgule (indice : `round`)


```python

```




    4.67



###  Un mot sur la représentation des nombres dans l'ordinateur
Exécutez le calcul ci-dessous :


```python
0.1 + 0.2
```




    0.30000000000000004



Le résultat est faux ! Dans la plupart des cas, ce résultat très très proche de 0.3 convient, mais il faut connaître ce petit défaut des ordinateurs. La raison est que l'ordinateur travaille en base 2 (aussi appelé binaire, avec uniquement des 0 et des 1) alors que nous travaillons en base 10 (avec 10 chiffres de 0 à 9). La valeur 0.1 a une représentation infinie en base 2 (c'est 0.00011001100110011....). Or, l'ordinateur n'a qu'un espace fini pour représenter les nombres ce qui l'oblige à tronquer et représenter une valeur un peu différente de 0.1. En réalité, il représente :


```python
print(format(0.1, ".20f"))
```

    0.10000000000000000555
    

En base 10, nous avons aussi des nombres qui ont une représentation infinie comme 1/3 qui vaut 0.33333333.... Tout ceci n'est pas crucial pour le moment mais vous y penserez quand vous verrez parfois des résultats "presque justes".

# Les variables

On va maintenant stocker les valeurs et les calculs dans des variables pour pouvoir les réutiliser. On utilise pour cela l'opérateur `=` qui ne représente pas une égalité mais une affection (on verra plus tard que l'égalité sera représentée par `==`).  
Par exemple, `age=23` ou `message="Bonjour !"`. On voit dès maintenant que les chaînes de caractères sont encadrées de guillemets, simples ou doubles.  
Pour que nos programmes soient lisibles facilement pour nous ou pour les autres, on va absolument éviter d'utiliser des variables composées d'une seule lettre, sauf pour des exemples simples comme maintenant :)  
Evidemment, on peut affecter à une variable une valeur, mais aussi un calcul qui peut aussi utiliser d'autres variables.  
On va aussi utiliser l'instruction `print` pour afficher le contenu d'une variable.  
Exécutez l'exemple ci-dessous (`Ctrl-Entrée`) :


```python
a=5
b=3
print(a+b)
```

    8
    

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
1. Créez 2 variables, t1 et t2 contenant les valeurs 24 et 31.  
2. Echangez le contenu des deux variables
3. Vérifiez en affichant la valeur de t1 puis la valeur de t2

BONUS : faites la même chose en une seule instruction (Indice : *tuple unpacking*)


```python

```

Les variables ne sont pas toutes de même nature et ne prennent pas toutes la même place dans la mémoire de l'ordinateur. On peut stocker des nombres, des chaînes de caractères, des listes de valeurs, etc. Certains langages comme le C ou Java exigent que le programmeur indique le **type** de chaque variable avant son utilisation.  
Par exemple, en Java, on écrit `int x=5;` alors qu'en Python `x=5` suffit. Dans ce langage, le typage est dynamique et va être déterminé automatiquement en fonction de la valeur stockée.  
Cela n'empêche pas qu'il nous faudra parfois convertir un type dans un autre, par exemple passer de la chaîne de caractères "123" à l'entier 123. On le fait avec la fonction `int`. Par exemple :  


```python
numParticipant="17"
participantSuivant=int(numParticipant)+1
print(participantSuivant)
```

    18
    

# Les entrées-sorties

Vos programmes vont souvent dépendre de données transmises par l'utilisateur, et vont aussi afficher leurs résultats. On distingue les instructions :
- d'**entrée**, pour permettre à l'utilisateur de saisir des valeurs. Par exemple, l'âge d'un participant. 
- de **sortie**, pour permettre d'afficher des informations à l'écran. Par exemple, les consignes pour une expérience.

L'instruction d'entrée en Python est `input`. On lui indique un message entre les parenthèses à afficher au préalable et la valeur saisie par l'utilisateur est stockée dans une variable.
L'instruction de sortie en Python est `print`. On lui indique entre les parenthèses les messages ou valeurs à afficher, séparés par des virgules. Voici un exemple :


```python
print("Merci de participer à cette expérience.")
prenom = input("Quel est votre prénom ? ")
nom = input("Quel est votre nom ? ")
print(prenom, ", voici les consignes")
```

    Merci de participer à cette expérience.
    Sandrine , voici les consignes
    

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
1. Demandez à l'utilisateur son année de naissance
2. Calculez son âge en supposant qu'on est en 2026. Attention, `input` fournit une chaîne de caractères, il faudra donc la convertir en entier (`int`) pour pouvoir faire le calcul.
3. Affichez l'âge.

BONUS : utiliser la bibliothèque `dateTime` pour que ce programme fonctionne quel que soit l'année.


```python

```

# Les choix

On va maintenant étudier la possibilité d'exécuter des instructions dans certaines conditions seulement.  
La syntaxe est la suivante (ce qui est entre < > doit être remplacé par votre cas) :  
`if <condition>:`  
`    ...`  
Voici un exemple qui utilise l'opérateur de comparaison `==`, à ne pas confondre avec l'affectation `=`. Son inverse est `!=` qui signifie donc "est différent de". 


```python
délai = 250
senior = input("Avez-vous 60 ans ou plus ? (répondez oui ou non)")
if (senior == "oui"):
    délai = délai + 50
print(délai)
```

    250
    

Les instructions concernées par la condition doivent être indentées, c'est-à-dire décaléss de 4 espaces par rapport à la ligne contenant le `if`.  
On peut ajouter également des instructions dans le cas contraire de la condition grâce au mot-clé `else`. Voici un exemple qui permet d'associer un groupe à un participant en fonction de son numéro ; les participants de numéros pairs sont dans le groupe expérimental et les participants de numéros impairs sont dans le groupe contrôle. Pour savoir si un nombre est pair ou impair, il suffit de calculer le reste de sa division par 2.


```python
numéro = int(input("Quel est votre numéro de participant ?"))
if (numéro % 2 == 0):   # si numéro est un nombre pair
    groupe="expé"
else:
    groupe="contrôle"
print("Le groupe est",groupe)
```

    Le groupe est contrôle
    

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Écrire un programme qui demande à l'utilisateur son âge et qui affiche la carte SNCF qui lui correspond ("pas de carte" avant 12 ans, "avantage jeune" de 12 à 27 ans, "avantage adulte" de 28 à 59 ans et "avantage senior" à partir de 60 ans.  
Vous pouvez bien sûr placer des `if` ou `if..else` dans des `if` ou des `else`.
Testez votre code avec quelques exemples.

BONUS : Utiliser l'instruction `elif` pour un code plus lisible


```python

```

# Les itérations : l'instruction `while`

On va maintenant voir comment répéter des suites d'instructions.   
Tout comme pour le `if`, l'instruction `while` est suivie d'une condition et de `:`. Toutes les instructions qui suivent vont être répétées tant que la condition est vraie. Comme pour le `if`, les instructions concernées doivent être identées. Voici un exemple qui sert d'illustration, on pourra faire plus simplement plus tard pour ce cas précis : 


```python
i=1
while (i<10):
    print(i)
    i=i+1
print("fin")
```

Ce type d'itérations nécessite :
1. une instruction d'initialisation (ici `i=1`)
2. une condition qui va contrôler le maintien dans la boucle (ici `i<10`)
3. une instruction qui va possiblement changer la condition (ici `i=i+1`). Sans cette instruction, on bouclerait à l'infini. 

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Écrire de 2 façons différentes un programme qui affiche les nombres pairs entre 8 et 16 inclus.  
En ajoutant 2 à la variable `i` à chaque passage dans la boucle :


```python

```

en ajoutant 1 à la variable `i` mais en incluant un test qui n'affiche `i` que s'il est pair :


```python

```

BONUS : afficher les entiers entre 1 et 56 inclus, avec un écart qui augmente progressivement : 1, 2, 4, 7, 11...  



On va maintenant écrire un programme pour calculer la moyenne d'entiers entrés par l'utilisateur au clavier, l'un après l'autre. Lorsque l'utilisateur aura terminé, il saisira `stop`. Par exemple :

```Valeur suivante ? 4
Valeur suivante ? 3
Valeur suivante ? 5
Valeurs suivante ? stop
La moyenne est 4.0```

Il faut donc boucler tant que la chaîne saisie par l'utilisateur n'est pas `stop`. On va supposer pour le moment que l'utilisateur ne se trompe pas et saisit soit un nombre, soit `stop` et qu'il saisit au moins un nombre.  
Pour calculer une moyenne, il vous faut deux variables, la somme des valeurs et le nombre de valeurs.


```python

```

BONUS : Si l'utilisateur saisit une lettre, cela provoque une erreur (essayez !). Modifiez le programme pour éviter cela en vérifiant que la valeur est bien un nombre avec `isdigit()`.  
BONUS : Si l'utilisateur commence par saisir `stop`, cela provoque une erreur (essayez !). Modifiez le programme en faisant le calcul de la moyenne seulement si le nombre de valeurs est strictement supérieur à 0.


# Les itérations : `for`et les itérables
On va maintenant voir l'instruction `for`qui permet également de faire des itérations, avec une forme très simple sur des objets particuliers qu'on appelle des *itérables*. Commençons par le premier : `range`.


## `range`
`range(...)` fabrique une suite de nombres entiers sur lesquels on va pouvoir faire des itérations. Par exemple, `range(5)`construit les nombres de 0 à 4 (oui, le dernier n'est pas inclus). Et donc on peut parcourir cette suite de nombres avec l'instruction `for` dont la syntaxe est `for <variable> in <iterable>:`. Par exemple :  


```python
for i in range(5):  
    print(i)
```

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Écrire un programme pour afficher les 10 premières puissances de 2 : 1, 2, 4, 8, ... Pour cela, itérez `i` de 0 à 9 et afficher $2^i$. En Python, l'opérateur puissance s'écrit `**`.

BONUS : Affichez en plus les opérations comme ceci :
2**0 = 1
2**1 = 2
...

```python

```

BONUS : Affichez de nouveau uniquement les valeurs, mais sur une seule ligne en les séparant par un espace. Indice : utilisez le paramètre `end` de `print`.


```python

```

`range(...)`permet aussi de fabriquer des suites de nombres entre deux valeurs données. Il suffit d'ajouter un autre paramètre. Voici un exemple :


```python
for i in range(3,8):
    print(i)
```

Avec un $3^e$ paramètre, on peut aussi avancer avec un pas différent de 1 :


```python
for i in range(2,11,2):
    print(i)
```


```python
for i in range(12,3,-2):
    print(i)
```

## Les listes
Les listes sont des regroupements de valeurs, dans un ordre précis, chacune avec un indice qui correspond à son rang dans la liste. Voici un exemple :


```python
liste=['avion','train','car','bateau']
print(liste[0])
print(liste[2])
```

Tout comme avec `range`, on peut donc parcourir ces valeurs à l'aide de l'instruction `for`. Voici un exemple :


```python
liste=['avion','train','car','bateau']
for mot in liste:
    print(mot)
```

On aurait pu faire la même chose avec l'instruction `while`, en utilisant la longueur de la liste (`len(<liste>)`), mais le code aurait été moins concis :


```python
liste=['avion','train','car','bateau']
indice = 0
while (indice < len(liste)):
    print(liste[indice])
    indice = indice + 1
```

`in` peut être utilisé pour simplement vérifier qu'une valeur appartient à un objet. Une telle vérification va renvoyer vrai ou faux, c'est-à-dire en Python `True` ou `False`. Voici des exemples à tester :


```python
4 in [1,2,3,4,5,6]
```


```python
'e' in "grenoble"
```


```python
"arbre" in ["feuille", "mur", "ballon"]
```

On peut aussi utiliser l'opérateur `not in`:


```python
'z' not in "cognition"
```

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Ecrire un programme pour compter et afficher le nombre de voyelles dans une chaîne de caractères saisie par l'utilisateur. Vous devez donc parcourir la chaîne et, pour chaque lettre, déterminer si elle appartient à l'ensemble des voyelles (`"aeiouyAEIOUY"`). 


```python

```

BONUS : Transformer en minuscules les lettres majuscules d'une chaîne. Par exemple, avec "GRenoBlE", il faut afficher "grenoble".


```python

```

BONUS : Afficher une seule fois les lettres d'un mot. Par exemple, avec "cascade", il faut afficher c a s d e.


```python

```

Compter les nombre de mots d'une phrase (sans utiliser `split`).


```python

```

Il existe un grand nombre de fonctions prédéfinies qui permettent de manipuler facilement les listes. Par exemple :
- `<liste>.append(<valeur>)` ajoute une valeur à la fin d'une liste
- `<liste>.remove(<valeur>)`supprime la valeur de la liste
- `len(<liste>)`renvoie le nombre d'éléments de la liste (length)

## Les dictionnaires

Les listes, les chaînes, les `range`sont des structures de données dans lesquels les éléments sont repérés par leur *rang* : le premier, le second, ... Mais parfois on a besoin de stocker et retrouver des éléments à partir d'une *clé*. Par exemple, retrouver un participant à partir de son numéro, une adresse mail à partir d'un nom, etc.  On utilise alors un dictionnaire qui est un ensemble d'associations clé-valeur. Voici un exemple que vous pouvez exécuter comme d'habitude (`Ctrl-Entrée`) :


```python
telephone = {
    "Léo": "06 12 34 56 78",
    "Lise": "06 98 76 54 32",
    "Léa": "06 11 22 33 44"
}
print(telephone["Lise"])
```

Pour ajouter une paire clé/valeur ou modifier une valeur, c'est la même chose :  `<dict>[<clé>]=<nouvelle valeur>`. Par exemple, `telephone["Lise"]="..."` ou  `telephone["Léo"]="..."`
Les clés et les valeurs peuvent être des entiers ou des chaînes. Par exemple, `surfaceBox[4]=25` ou `responsableBox[4]="Marie"`  
Il est possible de supprimer une paire clé/valeur avec l'instruction `del`. Exécutez le code ci-dessus si ce n'est pas fait, puis exécutez le code ci-dessous.


```python
del telephone["Lise"]
print(telephone)
```

On peut aussi parcourir un dictionnaire avec l'instruction `for` : `for <variable> in <dictionnaire>:`  
Par exemple :


```python
for nom in telephone:
    print(nom)
```

On peut aussi itérer sur les valeurs plutôt que sur les clés : `for <variable> in <dictionnaire>.values():`


```python
for numeros in telephone.values():
    print(numeros)
```

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
**Exercice 1**. Compléter le code ci-dessous pour :
1. Afficher le nom du participant
2. Modifier l'âge du participant qui est maintenant 25
3. Ajouter une clé `"temps de réponse"` avec la valeur 1764
4. Supprimer la clé âge
5. Afficher tous les noms du répertoire


```python
participant = {
    "nom": "Louise",
    "age": 23,
    "groupe": "contrôle"
}
```

**Exercice 2**. On dispose de temps de réaction en ms pour un participant donné. Compléter le code ci-dessous pour calculer le temps moyen. Votre code doit être général et ne pas considérer qu'il n'y aura que ces quatre clés.


```python
temps = {
    "essai1": 612,
    "essai2": 584,
    "essai3": 640,
    "essai4": 598
}
```

**Exercice 3** On dispose d'un jeu de données de plusieurs participants. Il s'agit d'un dictionnaire dont les valeurs sont aussi des dictionnaires. Pour ces derniers, la valeur de la clé `"temps"` est une liste. Complétez le code ci-dessous pour :
1. Ajouter PO4, qui a 23 ans et qui a des durées de 610, 600 et 582 ms
2. Déterminer l'âge du participant le plus âgé
3. Ajouter pour chaque participant une clé "temps moyen" permettant de stocker le temps moyen. Attention, la liste des temps pourrait contenir plus de 3 valeurs !
4. Déterminer le participant le plus rapide


```python
participants = {
    "P01": {
        "age": 22,
        "temps": [612, 598, 605]
    },
    "P02": {
        "age": 25,
        "temps": [590, 582, 601]
    },
    "P03": {
        "age": 21,
        "temps": [640, 625, 618]
    }
}
```

# Les fonctions

Une fonction est une "machine" qui prend en entrée des valeurs et qui renvoie des valeurs, exactement comme la fonction mathématique $f(x)=x^2+1$ qui renvoie 26 si on lui donne la valeur 5, ou 2 si on lui donne -1.
L'intérêt des fonctions est d'éviter de répéter des suites d'instructions mais également de structurer le code puisqu'une fonction réalise un traitement bien spécifique et qu'elle est repérée par un nom que l'on choisira explicite. Ainsi, si vous avez souvent besoin d'une fonction qui calcule la moyenne des valeurs d'une liste, vous définirez une fonction que vous nommerez `moyenne` et que vous pourrez appeler où vous voulez dans votre code. Vous pourrez aussi utiliser des fonctions définies par d'autres ou utiliser des fonctions prédéfinies de Python comme `len`, que l'on a vu précédemment, qui prend en entrée une liste et qui renvoie le nombre d'éléments de cette liste.   
On a donc 2 choses à voir : comment *définir* une fonction et comment *appeler* une fonction.

## Définir une fonction
Une fonction se définit avec la syntaxe suivante :
def <nom de la fonction> (<variables en entrée>):
    ...
    ...
    return(variable résultat)
Par exemple, pour définir une fonction qui calcule la moyenne des éléments d'une liste, on pourra écrire :


```python
def moyenne(liste):
    somme=0
    for val in liste:
        somme += val
    return(somme/len(liste))
```

Quelles sont les variables en entrée et les variables en sortie pour les fonctions suivantes :
- déterminer le $N^e$ élément d'une liste
- fusionner 2 listes en une seule liste de valeurs prises alternativement dans une liste puis l'autre
- déterminer le nombre de valeurs d'une liste plus petites qu'une valeur donnée
- déterminer le nombre de valeurs négatives d'une liste
- ajouter 1 à chaque élément d'une liste

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Écrire une fonction qui prend en entrée 2 entiers et qui renvoie leur écart. Par exemple, avec 3 et 5 ou 5 et 3, cette fonction renverra 2. Ne pas utiliser la fonction prédéfinie `abs`.


```python

```

## Appeler une fonction
Pour appeler une fonction, il suffit d'écrire son nom suivi de valeurs entre parenthèses. Par exemple :


```python
print(moyenne([4,9,2]))
```

ou encore


```python
liste=[3,1,3]
print(moyenne(liste))
```

Revenons sur l'exemple précédent. Cette fonction aurait pu être écrite plus simplement en appelant la fonction prédéfinie `sum` qui prend en entrée une liste et renvoie la somme de ses éléments. Le code est alors :


```python
def moyenne(liste):
    return(sum(liste)/len(liste))
print(moyenne([0,1,2,3]))
```


```python

```

Il existe de nombreuses fonctions prédéfinies en Python. Si vous les connaissez, vous pourrez les utiliser, mais vous pourrez donc définir vous-mêmes vos propres fonctions.

## Entrées et sorties des fonctions

Le nombre de valeurs en entrée (aussi appelés paramètres) est variable. On peut même n'avoir aucun paramètre et donc il n'y aura pas de `return` dans une telle fonction. On a également la possibilité de définir des paramètres par défaut ou de changer l'ordre des paramètres, mais on verra cela plus tard.  
Attention à ne pas confondre `return` et `print`, ce qui est une erreur classique des débutants. Une fonction renvoie un résultat mais elle ne préjuge pas de ce qui va être fait de ce résultat par le code qui appelle la fonction. Dans l'exemple `moyenne` ci-dessus, ce n'est pas la fonction `moyenne` qui affiche le résultat à l'écran, mais le code qui *appelle* la fonction. Dit autrement, ce n'est pas au programmeur de la fonction de décider de ce qui va être fait du résultat (affichage, autre calcul, etc.), son rôle est juste de déterminer le résultat et de le donner à celui qui le lui a demandé.

### <span style="color:green; font-weight:bold">*À vous de jouer*</span>
Soit une liste contenant des temps de réaction de participants à une expérience. Ecrire une fonction qui renvoie une liste qui contient uniquement les valeurs comprises entre une borne mininum et une borne maximum. Voici le code à compléter (l'instruction `pass` est à remplacer, c'est une instruction qui ne fait rien mais qui est nécessaire puisque Python exige au moins une instruction dans une fonction).  
BONUS : même chose avec la fonction cleanSD qui supprime les valeurs qui s'écartent de plus de 2 écart-types de la moyenne des valeurs.


```python
def clean(liste,min,max):
    # renvoie une liste contenant les éléments de liste entre min et max inclus
    pass
reactionTimes=[129,61,275,289,301,299,288,884,66,303,269]
cleanReactionTimes=clean(reactionTimes,200,400)
print("AVANT : ",reactionTimes," APRÈS : ",cleanReactionTimes)
```

Vous avez probablement parcouru la liste pour ajouter progressivement les éléments pertinents à une liste initialement vide.  
Il y a une manière plus concise d'écrire cela en Python mais ce n'est pas une nécessité de connaître cette structure pour le moment :


```python
def clean2(liste, min, max):
    return [x for x in liste if min <= x <= max]
```
