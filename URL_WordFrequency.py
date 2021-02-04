import requests
from bs4 import BeautifulSoup

url = 'https://www.voanews.com/middle-east/voa-news-iran/full-text-trumps-speech-iran'
html = requests.get(url)
soup = BeautifulSoup(html.text)
content = soup.select_one('.article__body  p:nth-child(2)').get_text()
print(content)

# 전체 텍스트를 공백(space)을 기준으로 모두 나누고, 리스트 형태로 결과를 반환합니다.
word_list = content.lower().split()
print(word_list)

# 불필요한 기호(예: !@#$ 등)를 제거해줍니다.
def clean_wordlist(input_list):
    output_list = []
    for word in input_list:
        symbols = """!@#$%^&*()_-+={[}]|\;:"‘'·<>?/., """
        for i in range(len((symbols))):
            word = word.replace(symbols[i], '')      
        if len(word) > 0:
            output_list.append(word)
    return output_list    
clean_list = clean_wordlist(word_list)
print(clean_list)

# 반복문을 이용해서 리스트 요소의 빈도를 셉니다. 결과를 딕셔너리 형태로 저장합니다.
def counter(input_list):
    word_count = {}
    for word in clean_list:
        if word in  word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    return word_count
    
word_count = counter(clean_list)
word_count = sorted(word_count.items(), key=lambda x:x[1], reverse=True)
print(word_count)
# >>> {'as': 6, 'long': 4, 'i': 4, ..., 'bless': 1}
