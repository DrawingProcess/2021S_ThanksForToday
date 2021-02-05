# Django 기반 Backend서버

## 환경구성

### Django 설치

#### `pip install django`
#### `pip install django-cors-headers`

### DB

#### `python manage.py makemigrations`
#### `python manage.py migrate`

### konlpy
konlpy 사용 위해 java, jdk, jpype 설치 필요 => https://beausty23.tistory.com/54 참조

### wordcloud
#### `pip install wordcloud`
#### `pip install palettable`

### 실행

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


## WordCloud용 데이터 조회

GET /words

사용자가 생성한 모든 단어 데이터를 조회합니다

매개변수:
없음

반환 예시:
```
{
    "words": "가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스 가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스 가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스 가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스 가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스 가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스 가 나 다 라 마 바 사 아 자 차 카 타 파 하 오디오 기러기 토마토 스위스"
}
```



## WordCloud 이미지

GET /wordcloud

WordCloud 프로세싱후 이미지를 리턴합니다.

매개변수:
없음

반환 예시:
```
RAW_PNG
```
