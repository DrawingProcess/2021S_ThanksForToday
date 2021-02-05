let url;

//개발 운영 api 주소 분기
if (process.env.NODE_ENV === 'production') {
} else {
    url = 'http://localhost:8000';
}

export const API_BASE_URL = url;
