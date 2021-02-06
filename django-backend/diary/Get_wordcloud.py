
import numpy as np
import random   # numpy�� random, palettable�� font �� ����
from PIL import Image   # mask �̹����� ó��
from wordcloud import WordCloud, STOPWORDS  # wordcloud�� �� ��� ���� �̿��ؼ� word cloud�� �׸� �� �̿�
from palettable.cartocolors.sequential import BluGrn_7
import diary.asas as NLP
# https://jiffyclub.github.io/palettable/
# from palettable.colorbrewer.qualitative import Dark2_8 # random color

def color_func(word, font_size, position, orientation, random_state=None, **kwargs):
    return tuple(BluGrn_7.colors[random.randint(0,6)])
    # return tuple(Dark2_8.colors[random.randint(0,7)])


def Get_wordcloud(sentence):
    pre_sent = NLP.Preprocessing(sentence)         # ��ó��
    freq_list = NLP.frequent_list(pre_sent, 500)   # �� �� ���� �ܾ� ����


    font = "diary/BMHANNA_11yrs_ttf"
    font_path = "%s.ttf" % font

    # https://pixlr.com/kr/editor/ - Translate Transparent(alpha) Image
    # https://dramahdg.tistory.com/1 - Search Transparent(alpha) Image
    icon = "diary/Tree"
    icon_path = "%s.png" % icon

    # �ҿ�� ����
    stopwords = []
    with open("./diary/StopWord.txt", 'rt', encoding='UTF8') as f:
        while True:
            line = f.readline().rstrip('�n')
            if not line: break
            stopwords.append(line)

    icon = Image.open(icon_path)
    mask = Image.new("RGB", icon.size, (255, 255, 255))  # backgraound: white(255,255,255)
    mask.paste(icon, icon)
    mask = np.array(mask)

    # wordcloud ����
    wc = WordCloud(font_path=font_path, background_color="rgba(255, 255, 255, 0)", mode="RGBA", max_words=2000,
                   mask=mask,
                   max_font_size=250, random_state=42, stopwords=stopwords)
    #wc.generate_from_text(message) # ���ڿ��� ����
    wc.generate_from_frequencies(dict(freq_list))
    wc.recolor(color_func=color_func, random_state=3)
    wc.to_file("static/WordCloud_Tree.png")    # �̹��� ����




if __name__ == '__main__':
    #sent = "�۳� ũ�������� ������ ���� ������ ô���Ϸ� �ı⸦ �������� �����..! ��� ���α׿� �� ����� �ߴµ� ���� ���� �ƽ��ϴ� �ı⸦ ������� �ּ� 2�������� ����� �� �Ŀ� ������� �ʰڽ��ϱ�!! ���� �ٷ� �ı� ������ �ҰԿ� ���� īī���� ������ ������ �����߽��ϴ�! �ֳĸ� 7000�� ����? �����ϰ� �־��� �����Դϴ� ������ 79,000�� �Դϴ� ���������� ô���Ϸ� 1970s �������� ���� :) ++ ������ ���� ���ΰ� �; īī���� ����� ���ôµ� �������Դϴ�! �̿� ��°� �����ؼ� �� �����ϰ� ��� ��� ������ ���� �� ����� 240�̱� ������ �׳� 240���� ����! + ���� �ߺ��� ���� ���ε�, 240���� ��ϱ� �ߺ��� �´µ� �޲�ġ�� ���� �混�ŷȾ�� �Ф� �׷��� ����Ŀ��� ���� ũ�� �ž�� �ϴϱ�! ++ �ߺ� ������ �е��� 5 ������ ���� �۰� �Ͻô°� ���� �� ���ƿ�! ������ �Ź� ������ ���̷��� ��Ƽ(...) ���İ� ����� �ϼ̽��ϴ� �ФоƸ� �� �κ��� ���� �����ΰ� ������ ��¦��¦ ������ �׷� �� ���ƿ� �׷��� �����Ѱ� ����... �� ���νŹ����� �˰ڱ��� �Ƹ� ���� ���ʰ��� ���� �� ���ƿ�!! ���� ��� ������ �ý�Ÿ �� 1970s �� �߿� �� ���.. ������ �ϰ��־��µ� 1970s �� �� ���� �� ���ƿ� (���� ���� �� �������...) ������ ���� �����ߴٴ� �� ��ǰ! ���� ��ǰ�� ��Ȯ�� ��ǰ���� �𸣰ڳ׿� ��ư ������ ���� (���) �κ��� �� �о��� �� ���ƿ� �ణ... ���� ����Ŀ�� ����?! (�۳� ������ ������ �ߴ�!) ������ ���� ������ (....) �� ��µ� �ı⸦ ���ܺ����� �ϰڽ��ϴ� �ϴ� �ž������� �ǰ� �������ϴ� �� ... ���밨�� �ϴ� �� �������� �ݽ����ٴ� �ξ� ������ �� ���ƿ�,, �ֳĸ� �Ź��� ���ſ��� �ٴҶ��� �ణ ������ ���� ���� �ִµ� �׷��� �ƿ� �� ���Ű� �ٴϰڴ�-- �������� �ƴϱ���! �ٵ� �� �տ��� ���ߵ��� �ߺ��� �������̶� �ߺ����� ó���� ���Ͱ� �Фб׳� �Ű� �ٴҶ��� �޲�ġ�� �鸮�� ���簡 �߻��߽��ϴ�.... ���������� ������ �� �����ƿ� �ݽ�>>>>>> ������ �������� ���ֽø� �ǰڽ��ϴ� ���� �⺻���̶� ���� �ƹ����Գ� �Ծ �߾�︮�� ���ƿ� Ư�� �� ���� �л��̱� ������ ������ �ַ� �Դµ� �������� �� ��︮�� ��! ��ü ������ �ű�ٸ� �� �� ���� ��..? ����! �̰� ������ �ı⸦ ��ġ���� �ϰڽ��ϴ�! �� �ְ����� �ı�ϱ� ���ſ� ������ �Ǿ����� ���ڳ׿� ũ���� ��"

    # �ؽ�Ʈ�� ���Ϸ� �о�� ���
    with open("diary1.txt", encoding='UTF-8') as f:
        sent = f.read()
        f.close()
    with open("diary2.txt", encoding='UTF-8') as f:
        sent += f.read()
        f.close()

    Get_wordcloud(sent)

