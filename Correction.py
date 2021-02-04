from hanspell import spell_checker
result = spell_checker.check(u'안녕하세요.저는한국인입니다.이문장은한글로작성됬습니다.')
print(result.as_dict())