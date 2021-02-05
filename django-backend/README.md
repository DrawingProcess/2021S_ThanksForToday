# Django 기반 Backend서버

## Django 설치

### `pip install django`

## 실행

### `python manage.py runserver`


# API

## 글 생성

POST /create

새 다이어리 글을 작성합니다.

매개변수:
- `date` (필수) - 날짜 (예, 2021-02-04)
- `title` (필수) - 제목
- `weather` (선택) - 날씨
- `body` (선택) - 본문

반환 예시:
```
{
    "message": "success"
}
```

## 글 생성

GET /read

모든 글 또는 조건에 맞는 글을 조회합니다

매개변수:
- `query` (선택) - 검색어 (없을 시 모든 글을 검색합니다.)

반환 예시:
```
[
  {
    "model": "diary.today",
    "pk": 2,
    "fields": {
      "date": "2021-02-01",
      "title": "오늘은 열공한 날",
      "weather": "공부하기에는 너무 화창한날",
      "keywords": "공부, 열공",
      "body": "공부 열공하는날공부 열공하는날공부 열공하는날공부 열공하는날공부 열공하는날공부 열공하는날공부 열공하는날공부 열공하는날공부 열공하는날"
    }
  },
  {
    "model": "diary.today",
    "pk": 3,
    "fields": {
      "date": "2021-02-04",
      "title": "오늘은 내생일",
      "weather": "춥다",
      "keywords": "생일, 해커톤",
      "body": "아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾아아ㅏ앙란오ㅜㅎ피ㅜㅎ쟇퓾"
    }
  }
]
```


## 글 수정

POST /update/ (int: pk)

특정 글을 수정합니다.

매개변수:
- `date` (필수) - 날짜 (예, 2021-02-04)
- `title` (필수) - 제목
- `weather` (선택) - 날씨
- `body` (선택) - 본문

반환 예시:
```
{
    "message": "success"
}
```

## 글 삭제

GET /delete/ (int: pk)

특정 글을 삭제합니다.

매개변수:
없음

반환 예시:
```
{
    "message": "success"
}
```
