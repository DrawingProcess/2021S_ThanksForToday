import jamotools

word = "단러"

def inserts(word):
	""" Takes in a split word, and inserts each Korean character
	between each letter then returns the result in a list """

	letters = "ㅂㅈㄷㄱㅅㅁㄴㅇㄹㅎㅋㅌㅊㅍㅃㅉㄸㄲㅆㅕㅑㅐㅒㅔㅖㅗㅛㅓㅏㅣㅠㅜㅡ"
	insertsret = []
	for i in range(len(word)+1):
		left = word[:i]
		right = word[i:]
		for l in letters:
			insertsret.append(left + l + right)
	return(insertsret)

def removals(word):
	""" This function takes in a split word, and removes each letter from it and
	returns the remaining words with one letter removed in a list """

	removalsret = []
	for i in range(len(word)+1):
		left = word[:i]
		right = word[i:]
		if right:
			removalsret.append(left + right[1:])
	return(removalsret)

def swaps(word):
	""" Takes in a split word, swaps the adjacent letters, and
	then returns them as a list """

	swapsret = []
	for i in range(len(word)+1):
		left=word[:i]
		right=word[i:]
		if len(right)> 1:
			swapsret.append(left + right[1] + right[0] + right[2:])
	return(swapsret)

def replaces(word):
	""" Takes in a split word and switches out each of the 
	letters in the word for each of the other letters in the
	Korean alphabet.  Returns a list of split words which each
	letter swapped. """

	letters = "ㅂㅈㄷㄱㅅㅁㄴㅇㄹㅎㅋㅌㅊㅍㅃㅉㄸㄲㅆㅕㅑㅐㅒㅔㅖㅗㅛㅓㅏㅣㅠㅜㅡ"
	replacesret = []
	for i in range(len(word)+1):
		left = word[:i]
		right = word[i:]
		for l in letters:
			if right:
				replacesret.append(left + l + right[1:])
	return(replacesret)

def dictionarycomparer(wordlist):
	""" Goes through a list of words that contain both real Korean words as well as nonsense words,
	and compares each of them to a dictionary of Korean words.  It then removes the nonsense words,
	and returns a list that only contains real Korean words that are listed in the Korean dictionary. """

	checkerret = []
	f = open("./wordslistUnique.txt", "r", encoding='utf-8')
	f1 = f.read().splitlines()
	for w in wordlist:
		if w in f1:
			checkerret.append(w)
	return(checkerret)

def wordedits(word):
	""" Splits the Korean characters into letters, and simply calls all the other functions 
	getting all inserts, removals, etc. in one list.  It then joins the characters back together
	and returns all of the edits in a single list """

	editsret = []
	alleditsjoined = []
	splitword = jamotools.split_syllables(word)
	alleditssplit = list(inserts(splitword) + removals(splitword) + swaps(splitword) + replaces(splitword))
	for w in alleditssplit:
		alleditsjoined.append(jamotools.join_jamos(w))
	print(alleditsjoined)
	realedits = dictionarycomparer(alleditsjoined)
	return(realedits)

print(wordedits(word))