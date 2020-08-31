# codeforlife
words = ["adopt", "bake", "beam", "confide", "grill", "plant", "time", "wave", "wish"]
past_tense=[]
for word in words:
    if (word[-1]=='e'):
        past_tense.append(word+'d')//adding d to make it past tense
    else:
        past_tense.append(word+'ed')
print(past_tense)

words = ["water", "chair", "pen", "basket", "hi", "car"]
num_words=0
for string in words:
    if(len(string)>3)://otherwise string gets compared with integer
        num_words+=1
print(num_words)
        
