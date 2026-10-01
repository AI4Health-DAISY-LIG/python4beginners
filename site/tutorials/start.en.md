<span style="color:purple; font-weight:bold">Scientific programming</span>
========================================================
M1 Cognitive Sciences, Université Grenoble-Alpes  
[Benoît Lemaire](https://lpnc.univ-grenoble-alpes.fr/fr/benoit-lemaire), 2026-2027

# <span style="color:blue">Warning</span>
This document is a Jupyter notebook that will serve as the basis for this introductory part of the course (4h lecture/TD, 4h practical work). It contains two types of cells: Markdown text or code. The idea is for this document to become yours: you can modify the content however you like, execute code (`Ctrl-Enter`), or add new cells to include your own notes or programs.
You will find brief explanations about the Python language and at the end of each section a sequence "<span style="color:green; font-weight:bold">*Your Turn*</span>" where you can test your knowledge by solving small exercises. For students who are fast, a BONUS part allows you to go even further, often requiring you to look for information outside.


# Online Python
Python instructions can be executed interactively or gathered into a program run all at once. Let's start with the interactive way (called REPL=read/execute/print loop). Execute this code (click in the area then `Ctrl-Enter` to execute the code):

```python
8+3
```

    11



Let's try other calculations. 


```python
8/3
```

    2.6666666666666665




```python
8//3
```

    2




```python
8%3 # which is the remainder of dividing 8 by 3. By the way, we see that comments in Python are preceded by a #.
```

    2




```python
8**3
```

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Write in the box below the calculation to get double the sum of 44 and 55. Then press `Ctrl-Enter`. Did you find 198?


```python
# Expected output: 198
```

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Calculate the average of 5, 6, and 3. Did you find 4.666666667?  
BONUS: round to two decimal places (hint: `round`)


```python
# Expected output: 4.67
```




    0.30000000000000004



### A Note on Number Representation in Computers
Execute the calculation below:


```python
0.1 + 0.2
```

    0.30000000000000004



The result is incorrect! In most cases, this value very close to 0.3 is acceptable, but you need to know this small defect of computers. The reason is that the computer works in base 2 (also called binary, with only 0s and 1s) while we work in base 10 (with 10 digits from 0 to 9). The value 0.1 has an infinite representation in base 2 (it's 0.00011001100110011....). However, the computer only has a finite space to represent numbers, which forces it to truncate and represent a value slightly different from 0.1. In reality, it represents:


```python
print(format(0.1, ".20f"))
```

    0.10000000000000000555
    

In base 10, we also have numbers that have an infinite representation like 1/3 which equals 0.33333333.... This is not crucial for now but you will think about it when you see results that are "almost correct".

# Variables

Now let's store values and calculations in variables to be able to reuse them. We use the operator `=` which does not represent equality but an assignment (we will learn later that equality is represented by `==`). For example, `age=23` or `message="Hello!"`. We can see right away that strings are enclosed in quotes, single or double.
To make our programs easily readable for ourselves or others, we must avoid using variables composed of a single letter, except for simple examples like now :)
Obviously, we can assign a value to a variable, but also a calculation that can use other variables.
We will also use the `print` instruction to display the content of a variable.
Execute the example below (`Ctrl-Enter`):


```python
a=5
b=3
print(a+b)
```

    8
    

### <span style="color:green; font-weight:bold">*Your Turn*</span>
1. Create 2 variables, t1 and t2, containing the values 24 and 31.  
2. Swap the content of the two variables
3. Verify by printing the value of t1 then the value of t2

BONUS: do the same in a single instruction (Hint: *tuple unpacking*)


```python
# Expected output for step 3:
# t1 = 31
# t2 = 24
```

Variables are not all of the same nature and do not take up the same space in computer memory. We can store numbers, strings, lists of values, etc. Some languages like C or Java require the programmer to indicate the **type** of each variable before its use.  
For example, in Java, we write `int x=5;` whereas in Python `x=5` is enough. In this language, typing is dynamic and will be determined automatically based on the value stored.  
This does not prevent us from sometimes needing to convert one type into another, for example, changing a string "123" to an integer 123. We do this with the `int` function. For example:  


```python
numParticipant="17"
participantSuivant=int(numParticipant)+1
print(participantSuivant)
```

    18
    

# Input/Output

Your programs will often depend on data transmitted by the user, and they will also display their results. We distinguish between:
- **input** instructions, to allow the user to enter values. For example, a participant's age. 
- **output** instructions, to allow displaying information on the screen. For example, instructions for an experiment.

The input instruction in Python is `input`. We indicate a message inside the parentheses to display beforehand and the value entered by the user is stored in a variable.
The output instruction in Python is `print`. We indicate messages or values inside the parentheses, separated by commas. Here is an example:


```python
print("Thank you for participating in this experiment.")
prenom = input("What is your first name? ")
nom = input("What is your last name? ")
print(prenom, ", here are the instructions")
```

    Thank you for participating in this experiment.
    Sandrine , here are the instructions
    

### <span style="color:green; font-weight:bold">*Your Turn*</span>
1. Ask the user for their year of birth
2. Calculate their age assuming we are in 2026. Remember, `input` provides a string, so you will need to convert it to an integer (`int`) to perform the calculation.
3. Display the age.

BONUS: use the `datetime` library so that this program works regardless of the year.


```python
# Expected interaction example:
# What is your year of birth? 2000
# Output: Your age is 26
```

# Conditionals

Now let's study the possibility of executing instructions only under certain conditions.  
The syntax is as follows (what is between `< >` must be replaced by your case):  
`if <condition>:`  
`    ...`  
Here is an example that uses the comparison operator `==`, which should not be confused with assignment `=`. Its inverse is `!=`, which means "is different from". 


```python
délai = 250
senior = input("Are you 60 years or older? (answer yes or no)")
if (senior == "yes"):
    délai = délai + 50
print(délai)
```

    250
    

The instructions concerned by the condition must be indented, i.e., shifted by 4 spaces relative to the line containing the `if`.  
We can also add instructions for the opposite case of the condition using the keyword `else`. Here is an example that assigns a group to a participant based on their number; participants with even numbers are in the experimental group and those with odd numbers are in the control group. To know if a number is even or odd, you just need to calculate the remainder of its division by 2.


```python
numéro = int(input("What is your participant number?"))
if (numéro % 2 == 0):   # if number is an even number
    groupe="expé"
else:
    groupe="contrôle"
print("The group is", groupe)
```

    The group is control
    

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Write a program that asks the user for their age and displays the SNCF card corresponding to them ("no card" before 12 years old, "young advantage" from 12 to 27 years old, "adult advantage" from 28 to 59 years old, and "senior advantage" from 60 years old onwards.  
You can certainly place `if` or `if..else` inside `if` or `else`.
Test your code with a few examples.

BONUS: Use the `elif` instruction for more readable code


```python
# Expected logic structure (using elif):
# if age < 12: print("no card")
# elif 12 <= age <= 27: print("young advantage")
# ... etc.
```

# Iterations: The `while` statement

Now let's see how to repeat sequences of instructions.   
Just like with `if`, the `while` instruction is followed by a condition and `:`. All subsequent instructions will be repeated as long as the condition is true. Like with `if`, the concerned instructions must be indented. Here is an example that serves as an illustration, we can do it more simply later for this specific case: 


```python
i=1
while (i<10):
    print(i)
    i=i+1
print("end")
```

This type of iteration requires:
1. An initialization instruction (here `i=1`)
2. A condition that controls the maintenance in the loop (here `i<10`)
3. An instruction that might change the condition (here `i=i+1`). Without this instruction, it would loop infinitely. 

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Write a program in two different ways to display the even numbers between 8 and 16 inclusive.  
By adding 2 to the variable `i` at each step in the loop:


```python
# Expected output: 8, 10, 12, 14, 16
```

by adding 1 to the variable `i` but including a test that only displays `i` if it is even:


```python
# Expected output: 8, 10, 12, 14, 16
```

BONUS: display integers between 1 and 56 inclusive, with an increasing step: 1, 2, 4, 7, 11...  



Now let's write a program to calculate the average of integers entered by the user one after another. When the user is finished, they will enter `stop`. For example :

```
Next value? 4
Next value? 3
Next value? 5
Next values? stop
The average is 4.0
```

We must therefore loop as long as the string entered by the user is not `stop`. We assume for now that the user does not make mistakes and enters either a number or `stop` and that they enter at least one number.  
To calculate an average, you need two variables: the sum of values and the count of values.


```python
# Expected interaction example leading to 4.0:
# Next value? 4
# Next value? 3
# Next value? 5
# Next values? stop
# Output: The average is 4.0
```

BONUS: If the user enters a letter, it causes an error (try it!). Modify the program to prevent this by checking if the value is actually a number using `isdigit()`.  
BONUS: If the user starts by entering `stop`, it causes an error (try it!). Modify the program by only calculating the average if the count of values is strictly greater than 0.


# Iterations: `for` and iterables

Now let's see the `for` instruction, which also allows for iterations, with a very simple form on special objects called *iterables*. Let's start with the first one: `range`.


## `range`
`range(...)` creates a sequence of integers over which we can iterate. For example, `range(5)` constructs numbers from 0 to 4 (yes, the last one is not included). And so we can traverse this sequence of numbers using the `for` instruction whose syntax is `for <variable> in <iterable>:`. For example:  


```python
for i in range(5):  
    print(i)
```

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Write a program to display the first 10 powers of 2: 1, 2, 4, 8, ... To do this, iterate `i` from 0 to 9 and display $2^i$. In Python, the power operator is written as `**`.

BONUS: Also display the operations like this:
2**0 = 1
2**1 = 2
...

```python
# Expected output for bonus (formatted):
# 2**0 = 1
# 2**1 = 2
# ...
```

BONUS: Display only the values again, but on a single line separated by a space. Hint: use the `end` parameter of `print`.


```python
# Expected output for bonus (single line):
# 1 2 4 8 16 32 64 128 256 512
```

`range(...)` can also create sequences of numbers between two given values. You just need to add another parameter. Here is an example:


```python
for i in range(3,8):
    print(i)
```

With a 3rd parameter, we can also advance with a step different from 1:


```python
for i in range(2,11,2):
    print(i)
```


```python
for i in range(12,3,-2):
    print(i)
```

## Lists
Lists are groupings of values, in a specific order, each with an index corresponding to its rank in the list. Here is an example:


```python
liste=['airplane','train','car','boat']
print(liste[0])
print(liste[2])
```

Just like with `range`, we can traverse these values using the `for` instruction. Here is an example:


```python
liste=['airplane','train','car','boat']
for mot in liste:
    print(mot)
```

We could have done the same thing with the `while` instruction, using the length of the list (`len(<list>)`), but the code would be less concise:


```python
liste=['airplane','train','car','boat']
indice = 0
while (indice < len(liste)):
    print(liste[indice])
    indice = indice + 1
```

`in` can be used to simply check if a value belongs to an object. Such a check will return true or false, i.e., `True` or `False` in Python. Here are some examples to test:


```python
4 in [1,2,3,4,5,6]
```

```python
'e' in "grenoble"
```

```python
"tree" in ["leaf", "wall", "ball"]
```

We can also use the operator `not in`:


```python
'z' not in "cognition"
```

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Write a program to count and display the number of vowels in a string entered by the user. You must therefore iterate through the string and, for each letter, determine if it belongs to the set of vowels (`"aeiouyAEIOUY"`). 


```python
# Expected interaction example:
# Enter a word: cascade
# Output: Number of vowels: 3 (a, a, e)
```

BONUS: Convert uppercase letters in a string to lowercase. For example, with "GRenoBlE", you must display "grenoble".


```python
# Expected output for bonus: grenoble
```

BONUS: Display only the unique letters of a word once. For example, with "cascade", you must display c a s d e.


```python
# Expected output for bonus: c a s d e
```

Count the number of words in a sentence (without using `split`).


```python
# Expected interaction example:
# Enter a sentence: This is a test sentence
# Output: Number of words: 5
```

There are many predefined functions that allow easy manipulation of lists. For example :
- `<list>.append(<value>)` adds a value to the end of a list
- `<list>.remove(<value>)` removes the value from the list
- `len(<list>)` returns the number of elements in the list (length)

## Dictionaries

Lists, strings, and `range`s are data structures where elements are identified by their *rank*: the first, second, ... But sometimes we need to store and retrieve elements based on a *key*. For example, finding a participant by their number, an email address by a name, etc. We then use a dictionary, which is a set of key-value associations. Here is an example you can run as usual (`Ctrl-Enter`):


```python
telephone = {
    "Leo": "06 12 34 56 78",
    "Lise": "06 98 76 54 32",
    "Lea": "06 11 22 33 44"
}
print(telephone["Lise"])
```

To add a key/value pair or modify a value, it's the same: `<dict>[<key>]= <new_value>`. For example, `telephone["Lise"]="..."` or `telephone["Leo"]="..."`  
Keys and values can be integers or strings. For example, `surfaceBox[4]=25` or `responsibleBox[4]="Marie"`  
It is possible to delete a key/value pair using the `del` instruction. Execute the code above if it hasn't been done, then execute the code below.


```python
del telephone["Lise"]
print(telephone)
```

We can also iterate over a dictionary using the `for` instruction: `for <variable> in <dictionary>:`.  
For example :


```python
for nom in telephone:
    print(nom)
```

We can also iterate over the values rather than the keys: `for <variable> in <dictionary>.values():`


```python
for numeros in telephone.values():
    print(numeros)
```

### <span style="color:green; font-weight:bold">*Your Turn*</span>
**Exercise 1**. Complete the code below to:
1. Display the participant's name
2. Modify the participant's age to 25
3. Add a key `"response_time"` with the value 1764
4. Delete the `age` key
5. Display all names in the directory


```python
participant = {
    "name": "Louise",
    "age": 23,
    "group": "control"
}

# Expected output after modifications:
# name: Louise
# group: control
```

**Exercise 2**. We have reaction times in ms for a given participant. Complete the code below to calculate the average time. Your code must be general and not assume there will only be these four keys.


```python
temps = {
    "trial1": 612,
    "trial2": 584,
    "trial3": 640,
    "trial4": 598
}

# Expected output: Average time is 607.25 ms
```

**Exercise 3** We have a dataset of several participants. It is a dictionary whose values are also dictionaries. For these latter ones, the value of the `"time"` key is a list. Complete the code below to:
1. Add P04, who is 23 years old and has reaction times of 610, 600, and 582 ms
2. Determine the oldest participant's age
3. Add a `"average_time"` key for each participant to store the average time. Note that the list of times could contain more than 3 values!
4. Determine the fastest participant


```python
participants = {
    "P01": {
        "age": 22,
        "times": [612, 598, 605]
    },
    "P02": {
        "age": 25,
        "times": [590, 582, 601]
    },
    "P03": {
        "age": 21,
        "times": [640, 625, 618]
    }
}

# Expected output (after modifications):
# Oldest participant: P02 (Age: 25)
# Fastest participant: P02 (Average time: 597.67 ms)
```

# Functions

A function is a "machine" that takes values as input and returns values, exactly like the mathematical function $f(x)=x^2+1$ which returns 26 if you give it the value 5, or 2 if you give it -1.
The purpose of functions is to avoid repeating sequences of instructions but also to structure the code since a function performs a very specific treatment and is identified by a name that we will choose explicitly. Thus, if you often need a function that calculates the average of values in a list, you will define a function named `average` and can call it wherever you want in your code. You can also use functions defined by others or use predefined Python functions like `len`, which we saw previously, which takes a list as input and returns the number of elements in that list.  
So there are 2 things to see: how to *define* a function and how to *call* a function.

## Defining a Function
A function is defined with the following syntax:
`def <function_name> (<input_variables>):`
    ...
    ...
    `return(result_variable)`
For example, to define a function that calculates the average of elements in a list, we can write:


```python
def average(list):
    sum = 0
    for val in list:
        sum += val
    return(sum/len(list))
```

What are the input variables and output variables for the following functions :
- determine the Nth element of a list
- merge 2 lists into a single list of values taken alternately from one list then the other
- determine the number of values in a list smaller than a given value
- determine the number of negative values in a list
- add 1 to each element in a list

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Write a function that takes two integers as input and returns their difference. For example, with 3 and 5 or 5 and 3, this function will return 2. Do not use the predefined `abs` function.


```python
# Expected output for both (3, 5) and (5, 3): 2
```

## Calling a Function
To call a function, you just need to write its name followed by values in parentheses. For example :


```python
print(average([4,9,2]))
```

or even more simply:


```python
liste=[3,1,3]
print(average(liste))
```

Let's return to the previous example. This function could have been written more simply by calling the predefined `sum` function which takes a list as input and returns the sum of its elements. The code is then:


```python
def average(list):
    return(sum(list)/len(list))
print(average([0,1,2,3]))
```

    1.5
    

There are many predefined functions in Python. If you know them, you can use them, but you can also define your own functions.

## Input and Output of Functions

The number of input values (also called parameters) is variable. We can even have no parameters in such a function and thus there will be no `return` in such a function. We also have the possibility to define default parameters or change the order of parameters, but we will see that later.  
Be careful not to confuse `return` and `print`, which is a classic beginner mistake. A function returns a result but it does not predict what will be done with this result by the code calling the function. In the above `average` example, it's not the `average` function that displays the result on the screen, but the code that *calls* the function. In other words, it is not up to the programmer of the function to decide what will be done with the result (display, another calculation, etc.), its role is just to determine the result and give it to whoever asked for it.

### <span style="color:green; font-weight:bold">*Your Turn*</span>
Suppose we have a list containing reaction times of participants in an experiment. Write a function that returns a list containing only values between a minimum bound and a maximum bound. Here is the code to complete (the `pass` instruction must be replaced, it's an instruction that does nothing but is necessary since Python requires at least one instruction in a function).  
BONUS: same thing with the `cleanSD` function which removes values that deviate by more than 2 standard deviations from the average of the values.


```python
def clean(list_of_times, min_val, max_val):
    # returns a list containing elements from list_of_times between min_val and max_val inclusive
    return [x for x in list_of_times if min_val <= x <= max_val]

reactionTimes=[129,61,275,289,301,299,288,884,66,303,269]
cleanReactionTimes=clean(reactionTimes,200,400)
print("BEFORE : ", reactionTimes, " AFTER : ", cleanReactionTimes)

# Expected output:
# BEFORE :  [129, 61, 275, 289, 301, 299, 288, 884, 66, 303, 269] AFTER :  [275, 289, 301, 299, 288, 303, 269]
```

You have probably iterated through the list to gradually add the relevant elements to a list initially empty.  
There is a more concise way to write this in Python but it's not necessary to know this structure for now:


```python
def clean2(list_of_times, min_val, max_val):
    return [x for x in list_of_times if min_val <= x <= max_val]
```