import numpy as np
import random   # numpy와 random, palettable은 font 색 설정
from PIL import Image   # mask 이미지를 처리
from wordcloud import WordCloud, STOPWORDS  # wordcloud는 이 모든 것을 이용해서 word cloud를 그릴 때 이용
# https://jiffyclub.github.io/palettable/
# from palettable.colorbrewer.qualitative import Dark2_8 # random color
from palettable.cartocolors.sequential import BluGrn_7

def color_func(word, font_size, position, orientation, random_state=None, **kwargs):
    return tuple(BluGrn_7.colors[random.randint(0,6)])
    # return tuple(Dark2_8.colors[random.randint(0,7)])
font = "BMHANNA_11yrs_ttf"
font_path = "%s.ttf" % font

# https://pixlr.com/kr/editor/ - Translate Transparent(alpha) Image
# https://dramahdg.tistory.com/1 - Search Transparent(alpha) Image
icon = "Tree"
icon_path = "%s.png" % icon
with open("AppleCar.txt", 'rt', encoding="utf-8") as f:
    message = f.read()
    print(message)

icon = Image.open(icon_path)
mask = Image.new("RGB", icon.size, (255,255,255)) # backgraound: white(255,255,255)
mask.paste(icon,icon)
mask = np.array(mask)
wc = WordCloud(font_path=font_path, background_color="white", max_words=2000, mask=mask,
               max_font_size=200, random_state=42, stopwords=stopwords, contour_width=3, contour_color='firebrick')

# generate word cloud
wc.generate_from_text(message)
wc.recolor(color_func=color_func, random_state=3)
wc.to_file("WordCloud_Tree.png")