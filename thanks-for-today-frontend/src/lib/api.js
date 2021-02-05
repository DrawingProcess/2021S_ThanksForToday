import axios from 'axios';

import { Storage } from 'lib/storage';
import { API_BASE_URL } from 'constants/index.js';

/* Auth */
const getToken = () => {
    return Storage.local.get('__AUTH__') || Storage.session.get('__AUTH__');
};

const getAccesesToken = () => {
    if (getToken()) return 'jwt ' + getToken();
};

export const isUserLoggedIn = () => {
    const token = getToken();
    if (token) {
        return true;
    }

    return false;
};

//회원가입
export const signUp = (formdata) => axios.post(`${API_BASE_URL}/rest-auth/registration`, formdata);

//로그인
export const signIn = (username, password) =>
    axios.post(`${API_BASE_URL}/rest-auth/login`, {
        username,
        password,
    });


//게시판 목록
export const getDiaryList = () =>
    axios.get(`${API_BASE_URL}/read`, {
    });

//글추가
export const addDiary = (formdata) =>
    axios.post(`${API_BASE_URL}/create`, formdata, {
    });

//글수정
export const updateDiary = (diary_num, formdata) =>
    axios.put(
        `${API_BASE_URL}/update/${diary_num}`,
        formdata,
    );

//글 삭제
export const deleteDiary = (diary_num) =>
    axios.delete(`${API_BASE_URL}/delete/${diary_num}`, {
    });