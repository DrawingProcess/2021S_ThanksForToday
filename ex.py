in_file = open('StopWord.txt', 'r')
 
for line in in_file:
    print(line.strip())
 
in_file.close()
