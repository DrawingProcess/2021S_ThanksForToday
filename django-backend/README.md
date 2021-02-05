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

## 글 조회

GET /read

모든 글 또는 조건에 맞는 글을 조회합니다

매개변수:
- `query` (선택) - 검색어 (없을 시 모든 글을 검색합니다.)

반환 예시:
```
[
  {
    "id": 1,
    "title": "오늘은 열공한",
    "allDay": true,
    "start": "new Date(2021,2,1)",
    "end": "new Date(2021,2,1)"
  },
  {
    "id": 1,
    "title": "오늘은 열공한",
    "allDay": true,
    "start": "new Date(2021,2,1)",
    "end": "new Date(2021,2,1)"
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
