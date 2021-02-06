# Download nltk
# import nltk
# nltk.download()

from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 


example = "고기를 아무렇게나 구우려고 하면 안 돼. 고기라고 다 같은 게 아니거든. 예컨대 삼겹살을 구울 때는 중요한 게 있지."
stop_words = ""
with open("./StopWord.txt", 'rt', encoding='UTF8') as f:
    while True:
        line = f.readline().rstrip('\n')
        if not line: break
        stop_words += line + " "

# 위의 불용어는 명사가 아닌 단어 중에서 저자가 임의로 선정한 것으로 실제 의미있는 선정 기준이 아님
stop_words=stop_words.split(' ')
word_tokens = word_tokenize(example)

result = [] 
for w in word_tokens: 
    if w not in stop_words: 
        result.append(w) 
# 위의 4줄은 아래의 한 줄로 대체 가능
# result=[word for word in word_tokens if not word in stop_words]

print(word_tokens) 
print(result)