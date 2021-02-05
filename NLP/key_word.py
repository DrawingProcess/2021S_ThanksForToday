#-*- coding: utf-8 -*-

from summa.summarizer import summarize
from summa import keywords
from konlpy.tag import Komoran
from hanspell import spell_checker
import re



# konlpy 사용 위해 java, jdk, jpype 설치 필요 => https://beausty23.tistory.com/54 참조


def Morpheme(sentence):
    komoran = Komoran()
    morphs = komoran.pos(sentence)
    #print(morphs)

    noun_morph = []
    for morph in morphs:
        if morph[1] == 'NNP':
            noun_morph.append(morph[0]) # 명사만 추출

    return noun_morph


# 핵심 단어 추출
def Get_key(sentence):
    key_word = keywords.keywords(sentence, ratio=0.3)  # 핵심 단어 30% 추출
    key_word_noun = Morpheme(key_word)  # 핵심 단어에서 명사만 추출
    #print("key_word_noun : ", key_word_noun)

    # 핵심 문장의 명사 단어 중 핵심 단어의 명사 단어와 겹치는 것의 빈도 수 측정
    word_cnt = {}
    for i, noun in enumerate(key_word_noun):
        if noun in word_cnt.keys():
            word_cnt[noun] += 1
        else:
            word_cnt[noun] = 1

    # 빈도 수가 높은 순서로 정렬
    sorted_word_cnt = sorted(word_cnt.items(), reverse=True, key=lambda item: item[1])  # 리스트
    #print("sorted : ", sorted_word_cnt)

    num = min(5, len(sorted_word_cnt))      # 핵심 단어는 최대 5개
    final_key_word = []
    final_key_word.append([sorted_word_cnt[i][0] for i in range(num)])
    final_key_word = final_key_word[0]
    #print("final: ", final_key_word)

    return final_key_word


def Preprocessing(sentence):
    # 특수기호 제거
    pre_sentence = re.sub('[-=.><#/?:$~!^&*()_+}]', '', sentence)
    # 불필요한 글자 제거
    pre_sentence = pre_sentence.replace("ㅋ", "")
    pre_sentence = pre_sentence.replace("ㅎ", "")
    pre_sentence = pre_sentence.replace("ㅠ", "")
    pre_sentence = pre_sentence.replace("ㅜ", "")
    pre_sentence = pre_sentence.replace("ㅡ", "")
    pre_sentence = pre_sentence.replace("ㅏ", "")


    pre_result = str()
    for i in range(len(pre_sentence)//500+1):
        pre_part = pre_sentence[i*500:i*500+500]   # 500자씩 가져옴 (500 넘어가면 spell_checker 작동하지 않음)

        # 띄어쓰기 처리, 불용어 제거
        pre_dict = spell_checker.check(pre_part).as_dict()
        pre_result += pre_dict['checked']

    return pre_result



if __name__ == '__main__':
    sent = "전에 먹었던 누메로도스의 마스카포네바질피자가 그리워져서 점심으로 먹기위해 뚝섬역에서 만났당! 누메로도스는 다른거보다 피자맛집이라서 바질피자랑 양배추찐게 들어간 새로운피자 하나를 도전해봣는데 나는완전별로였다ㅋㅋㅋㅋ 바질피자는 여전히 존맛..😋 다먹고 그근처를 걷는데 너무 예뻤다!!! 가게 하나하나가 되게 고급스럽거나 독특하고 분위기가 최고였당☺️ 나중에 놀러오기로했는데 뚝섬역 근처에 놀곳이나 이어져있는곳이 딱히 없어서 안갈것같긴하다ㅋㅋㅋㅋ 애견카페를 가기 위해 어린이대공원역에 있는 히릿~!~!을 갔당 우리가 좋아하던 불독은 없어졌지만ㅠㅠㅠ 전에 봣던 아가들이 꽤있었당 다른애견카페들은 간식에 맛들려서 간식만 찾아다니는 영악(?)한 애들이 많은데 히릿은 간식만 찾아다니지않고 간식이 없어도 곁에 와주는 댕댕이들이 많아서 넘좋당! 귀여웡😆 배고파져서 집에가서 떡볶이를 시켜먹기로했다! 떡볶이 오는 동안 생일선물 개봉식을 했당!! 요즘 빈티지 패션에 빠져서 목걸이,팔찌,신발 이런 것들을 막 찾아보고 사고싶어했는데 딱 빈티지 컬렉션으로다가 준비를 해뒀당ㅋㅋㅋㅋ 취향저격 선물개봉식을 마치고 오랜만에 배달떡볶이를 먹으면서 응팔을 봣다ㅋㅋㅋ 애견카페를 갔다와서 그런지 어제보다 더 알찬 하루였다ㅎㅎ"

    print("전처리 전 : ", sent)
    pre_sent = Preprocessing(sent)
    print("전처리 후 : ", pre_sent)

    key_word = Get_key(pre_sent)  # 핵심 단어 (최대) 5개
    print("핵심 단어 : ", key_word)


