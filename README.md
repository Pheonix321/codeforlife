BASIC PYTHON3 PROGRAMS:
1)Converting the tense of words to past.
words = ["adopt", "bake", "beam", "confide", "grill", "plant", "time", "wave", "wish"]
past_tense=[]
for word in words:
    if (word[-1]=='e'):
        past_tense.append(word+'d')//adding d to make it past tense
    else:
        past_tense.append(word+'ed')
print(past_tense)

2) Finding words with length>3
words = ["water", "chair", "pen", "basket", "hi", "car"]
num_words=0
for string in words:
    if(len(string)>3)://otherwise string gets compared with integer
        num_words+=1
print(num_words)
 
3) Find the largest number using accumulator pattern
nums = [9, 3, 8, 11, 5, 29, 2]
best_num = nums[0]
for n in nums:
    if n > best_num:
        best_num = n
print(best_num)
