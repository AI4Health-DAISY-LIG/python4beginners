<!-- local-code-markup-v2 -->
Master 1 Sciences Cognitives – UGA 

B. Lemaire 

# **TP Python: the modal model** 

The goal is to implement in Python a simple version of the modal model (Atkinson & Shiffrin, 1968) that is able to simulate how participants perform free recall experiments. In such an experiment, participants are presented with items, 

one at a time, and, at the end, they are asked to recall as many items as possible. For instance, 20 words are presented, say one every 2 seconds, and you need to recall them at the end, not necessarily in the order of presentation (otherwise it would have been called _serial recall_ and not _free recall_ ). If there are many participants performing several trials each, you can draw the percentage of recall according to the position of the words in the sequence. You usually get a U-shape curve like this one (Dewar et al., 2012) : words presented at the beginning or at the end are better recalled. 

The peak at the beginning is known as the _primacy effect_ and the peak at the end is known as the _recency effect_ . The modal model aims to explain this pattern. Although it is somewhat outdated, some of its elements remain relevant, and we will implement it here as a Python exercise. 

The model assumes the existence of two memory buffers: **short-term memory (STM)** , which has a very limited capacity, and **long-term memory (LTM)** , where items can be stored for a longer period. STM stores items during the trial but the time between presentations is thought to be used by participants to rehearse the items, potentially encoding some of them into LTM. 

As a result, items in the final positions are better recalled because they are still held in STM, while items presented at the beginning of the trial have a higher chance of being transferred to LTM. 

We will implement this model with the following rules: 

- R1. Once presented, each item is moved to STM. If STM is full, the new item replaces one of the existing items according to a specific strategy (e.g., the oldest, the newest, or a random item). 

- R2. At each time step, one of the items in STM is randomly copied into LTM. 

- R3. At the end, every item present in either STM or LTM is recalled. 

## **STEP 1** 

Create the variable stimuli, a list of 15 stimulus. For instance, `stimuli=['ane','bob','cri','don','exo','fun','gui','hum','ile','jeu','kir','lot','mur','non','oui']` 

Create stm as an empty list. 

Simulate a trial by looping over the stimuli list and implement R1 for each item: if stm is full (a classical value for the STM capacity is 7 according to one of the most cited papers in <u>psychology by George Miller in 1956), then</u> remove the oldest item (the first one). In any case, add the new item at the end. Print the content of stm. 

Run the program. You should see the output shown here. 



## **STEP 2** 

Now let’s create LTM. Since we don’t want duplicates in LTM and the order doesn’t matter, it is better to use a set rather than a list. Create the empty set ltm with `ltm=set()`. Please note that if you do ltm={}, Python assumes you are creating a dictionary. 

In the loop, add an instruction to pick an item in stm at random and add it to ltm. You can use the fonction random.choice(<list>), from the random library, that returns a random element from a non-empty list. To avoid an error, do this only if the list is not empty. Print the content of both memory buffers, using a bit of formatting to get an output like this one (it may be different on your screen since transfer to LTM is random) 

```text
LTM={'ane'}, STM=['ane']
LTM={'ane'}, STM=['ane', 'bob']
LTM={'ane', 'bob'}, STM=['ane', 'bob', 'cri']
LTM={'ane', 'bob', 'cri'}, STM=['ane', 'bob', 'cri', 'don']
LTM={'ane', 'bob', 'cri'}, STM=['ane', 'bob', 'cri', 'don', 'exo']
LTM={'ane', 'don', 'bob', 'cri'}, STM=['ane', 'bob', 'cri', 'don', 'exo', 'fun']
``` 

Implement the recall after the main loop, by storing in the recalled set, all items that are either in LTM or in STM. Once again, we do not want duplicates so we are using a set. Transform STM into a set and merge it with LTM using the set intersection operator |. Then print the recalled set. 

## **STEP 3** 

Now to need to store the results, that is the recall score to each item, and draw them. Since we need to associate a numerical value to each item, the best way is to used a dictionary, which is a data structure that associate values to keys. For instance, result{‘ane’} would be the average recall percentage for the item _ane_ . Initialize the result dictionary by associating the value 0 to all items. You can do that by looping through the stimuli list. 

Then, after the recalled set is created, update result by adding 1 to all items present in the recalled list. For instance, if recalled is ['oui','mur','ane','bob','jeu','non','gui'], all these items should be associated to 1 and all other items should remain associated to the initial value 0. Print the result dictionary to make sure the data are correct. 

Now we can draw the percentage of recall according to the position of the words in the sequence. To do so, we are going to create a function which would make the code more structured. Create the function drawSPC that takes into account the stimuli list and the result dictionary and plot the graph (like the one in page 1 of this document). To do so, we will use the plot function from the matplotlib.pyplot library (use import matplotlib.pyplot as plt). The plot function takes two lists of the same length as input, one for the coordinates on the x-axis and one for the coordinates on the y-axis. For instance, if you want to plot the points `(1,5), (2,6), (4,3)`, the list should be `[1,2,4]` and `[5,6,3]`. The call is plt.plot(xpoints, ypoints). In our case, the first parameter is the list of numbers between 1 and the number of items (thus [1,2,3…]). The second parameter is the recall percentage of each item in their order of presentation. To do so, for each item in the stimuli list, add its value in the result dictionary to the list. When this is done, show the plot on the screen with plt.show(). 



Since only one trial was done, you should obtain something like that (it could be different because of the non-deterministic behavior of the program, meaning that each time your run it you may get a different result because of the random instruction). 

## **STEP 4** 

The next step is to simulate many trials in order to get a general behavior of the model. Enclose in a loop the previous instructions that simulate a single trial, in order to run them, say 1000 times. You should obtain the output shown here: the last presented item are still in STM which explains the final plateau. In addition, the first items are well recalled because they were more likely to be copied into LTM since there were just a few item at the beginning of the trial. You can see that the first one is always recalled, since it was the only one in STM after it was presented and therefore it was transferred to LTM with probability 1. 

Try another strategy, transfer to LTM the most recent item instead of the oldest. 

Try another strategy, transfer to LTM one item at random. You should obtain the U-shape curve! 

