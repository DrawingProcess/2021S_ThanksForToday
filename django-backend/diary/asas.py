#-*- coding: utf-8 -*-

from summa import keywords
from hanspell import spell_checker
import re
from collections import Counter
import requests

import json


# 커먼컴퓨터 API 'KoNLPy-gRPC' 이용
# 명사 추출 (Mecab 형태소 분석기)
def Get_noun_list(sentence):
    #print(sentence)
    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }

    data = '{ "payload": "'
    data += sentence
    data += '"}'

    response = requests.post('https://master-ko-nl-py-g-rpc-minhoryang.endpoint.ainize.ai/v0alpha/mecab/nouns',
                             headers=headers, data=data.encode('utf-8'))
    response_data = response.json()
    #print(data)
    #print(response_data)
    return response_data['results']


# 전처리
def Preprocessing(sentence):
    # 특수기호 제거
    pre_sent1 = re.sub('[-=.><#/?:$~!^&*()_+}]', '', sentence)
    # 불필요한 글자 제거
    pre_sent1 = pre_sent1.replace("ㅋ", "")
    pre_sent1 = pre_sent1.replace("ㅎ", "")
    pre_sent1 = pre_sent1.replace("ㅠ", "")
    pre_sent1 = pre_sent1.replace("ㅜ", "")
    pre_sent1 = pre_sent1.replace("ㅡ", "")
    pre_sent1 = pre_sent1.replace("ㅏ", "")

    pre_sent2 = ""
    for i in range(len(pre_sent1) // 500 + 1):
        pre_part = pre_sent1[i * 500:i * 500 + 500]  # 500자씩 가져옴 (500 넘어가면 spell_checker 작동하지 않음)

        # 띄어쓰기 처리, 불용어 제거
        pre_dict = spell_checker.check(pre_part).as_dict()
        pre_sent2 += pre_dict['checked']

    # 불용어 제거
    pre_sent2_list = pre_sent2.split(' ')
    pre_sent3 = ""

    with open("./diary/StopWord.txt", 'rt', encoding='UTF8') as f:
        stopwords = f.read().split('\n')  # 리스트
        f.close()
    for word in pre_sent2_list:
        if word not in stopwords:
            pre_sent3 += word
            pre_sent3 += ' '

    return pre_sent3


# 핵심 단어 추출
def Get_keyword(sentence):
    pre_sent = Preprocessing(sentence)  # 전처리

    key_word = keywords.keywords(pre_sent, ratio=0.3)  # 핵심 단어 30% 추출   (문자열)
    key_word = ' '.join(key_word.splitlines())  # keywords() 함수에서 생긴 개행 문자들 제거
    
    key_word_noun = Get_noun_list(key_word)  # 핵심 단어에서 명사만 추출 (리스트)
    #key_word_noun = key_word.split(' ') # 임시 코드

    for i, noun in enumerate(key_word_noun):  # 한 글자인 단어는 제거
        if len(noun) < 2:
            del key_word_noun[i]
    # print("key_word_noun : ", key_word_noun)

    # 핵심 문장의 명사 단어 중 핵심 단어의 명사 단어와 겹치는 것의 빈도 수 측정
    word_cnt = {}
    for i, noun in enumerate(key_word_noun):
        if noun in word_cnt.keys():
            word_cnt[noun] += 1
        else:
            word_cnt[noun] = 1

    # 빈도 수가 높은 순서로 정렬
    sorted_word_cnt = sorted(word_cnt.items(), reverse=True, key=lambda item: item[1])  # 리스트
    # print("sorted : ", sorted_word_cnt)

    num = min(5, len(sorted_word_cnt))  # 핵심 단어는 최대 5개
    final_key_word = []
    final_key_word.append([sorted_word_cnt[i][0] for i in range(num)])
    final_key_word = final_key_word[0]
    # print("final: ", final_key_word)

    return final_key_word


# 빈도 수 높은 단어 추출
def frequent_list(sentence, word_num):
    pre_sent = Preprocessing(sentence)  # 전처리
    noun_list = Get_noun_list(pre_sent)  # 명사만 추출
    #noun_list = pre_sent.split(' ')  # 임시 코드

    for noun in noun_list:  # 한 글자인 단어는 제거  (완벽히 제거 안됨)
        if len(noun) < 2:
            del noun_list[noun_list.index(noun)]

    counter = Counter(noun_list)
    noun_list = counter.most_common(min(len(noun_list), word_num))  # 빈도 수 높은 순
    # print(noun_list)

    return noun_list


if __name__ == '__main__':
    # sent = "작년 크리스마스 선물로 받은 컨버스 척테일러 후기를 이제서야 남긴닷..! 계속 블로그에 글 써야지 했는데 이제 쓰게 됏습니다 후기를 남길려면 최소 2개월정도 사용해 본 후에 써야하지 않겠습니까!! 지금 바로 후기 쓰도록 할게욧 저는 카카오톡 컨버스 스토어에서 구입했습니다! 왜냐면 7000원 정도? 할인하고 있었기 때문입니다 원가는 79,000원 입니다 ㅎㅎ컨버스 척테일러 1970s 블랙으로 구입 :) ++ 아직도 세일 중인가 싶어서 카카오톡 스토어 들어가봤는데 세일중입니다! 이왕 사는거 세일해서 더 저렴하게 사면 기분 좋겠죠 원래 발 사이즈가 240이기 때문에 그냥 240으로 샀어요! + 저는 발볼이 넓은 편인데, 240으로 사니까 발볼은 맞는데 뒷꿈치가 조금 헐렁거렸어요 ㅠㅠ 그래도 스니커즈는 조금 크게 신어야 하니까! ++ 발볼 좁으신 분들은 5 사이즈 정도 작게 하시는게 좋을 것 같아요! 엄마가 신발 보고는 왜이렇게 싼티(...) 나냐고 뭐라고 하셨습니다 ㅠㅠ아마 흰 부분이 고무 재질인것 같은데 반짝반짝 빛나서 그런 것 같아요 그래도 영롱한거 보면... 왜 국민신발인지 알겠구요 아마 사진 수십개는 찍은 것 같아요!! ㅋㅋ 사실 컨버스 올스타 랑 1970s 둘 중에 뭘 살까.. 고민을 하고있었는데 1970s 이 더 예쁜 것 같아요 (물론 조금 더 비싸지만...) 참고로 제가 고민했다던 두 상품! 왼쪽 제품은 정확한 상품명을 모르겠네요 암튼 왼쪽은 앞코 (흰색) 부분이 더 넓었던 것 같아요 약간... 슈펜 스니커즈 느낌?! (작년 여름에 포스팅 했던!) 아하하 슈펜 컨버스 (....) 를 샀는데 후기를 남겨보도록 하겠습니다 일단 신었을때는 되게 예뻤슴니다 발 ... 착용감은 일단 제 기준으로 반스보다는 훨씬 불편한 것 같아요,, 왜냐면 신발이 무거워서 다닐때도 약간 불편한 감이 조금 있는데 그래도 아예 막 못신고 다니겠다-- 이정도는 아니구요! 근데 전 앞에서 말했듯이 발볼이 넓은편이라서 발볼쪽이 처음에 아팠고 ㅠㅠ그냥 신고 다닐때는 뒷꿈치가 들리는 참사가 발생했습니다.... 무슨일인지 지금은 또 괜찮아요 반스>>>>>> 컨버스 이정도로 봐주시면 되겠습니다 하핫 기본템이라서 옷을 아무렇게나 입어도 잘어울리고 좋아요 특히 전 아직 학생이기 때문에 교복을 주로 입는데 교복에도 잘 어울리고 넵! 전체 점수를 매긴다면 전 별 세개 반..? 정도! 이걸 끝으로 후기를 마치도록 하겠습니당! 뭐 주관적인 후기니까 구매에 참고가 되었으면 좋겠네요 크하하 핫 "
    with open("diary2.txt", encoding='UTF-8') as f:
        sent = f.read()
        f.close()

    print("원 문장 : ", sent)

    # 전처리
    pre_sent = Preprocessing(sent)
    print("전처리 후 : ", pre_sent)

    # 전처리 - 핵심 단어 추출(최대 5개)
    key_word = Get_keyword(sent)
    print("핵심 단어 : ", key_word)

    # 전처리 - 빈도 높은 단어 추출(최대 500개)
    noun_list = frequent_list(sent, 500)
    print("빈도 수 높은 단어 : ", noun_list)