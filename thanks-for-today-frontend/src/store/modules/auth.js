import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';
import { Storage } from 'lib/storage';

/* 액션 타입 */
export const SIGN_UP = 'auth/SIGN_UP'; //회원가입
export const SIGN_IN = 'auth/SIGN_IN'; //로그인
export const SET_REMEMBER = 'auth/SET_REMEMBER'; //자동로그인 여부
export const SIGN_OUT = 'auth/SIGN_OUT'; //로그아웃

/* 액션 생성자 */
export const signUp = createAction(SIGN_UP, api.signUp);
export const signIn = createAction(SIGN_IN, api.signIn);
export const setRemember = createAction(SET_REMEMBER);
export const signOut = createAction(SIGN_OUT);

/* 초기 상태 정의 */
const initialState = Map({
    isAuthenticated: false,
    rememberMe: false,
});

/* reducer + pender */
export default handleActions(
    {
        [SET_REMEMBER]: (state, action) => {
            return state.set('rememberMe', action.payload);
        },
        [SIGN_OUT]: (state, action) => {
            //토큰 삭제
            if (Storage.local.get('__AUTH__')) {
                Storage.local.remove('__AUTH__');
            }
            if (Storage.session.get('__AUTH__')) {
                Storage.session.remove('__AUTH__');
            }
            //로그인 여부 false, profile 빈 값
            return state.set('isAuthenticated', false).set('profile', Map({}));
        },
        ...pender({
            type: SIGN_IN,
            onSuccess: (state, action) => {
                const data = action.payload.data;
                //access token 저장
                if (state.get('rememberMe')) {
                    Storage.local.set('__AUTH__', data.token);
                } else {
                    Storage.session.set('__AUTH__', data.token);
                }
                //받아온 회원정보 sessionStorage에 저장(사이드바에서 사용될것)
                return state.set('isAuthenticated', true);
            },
            onFailure: (state, action) => {
                const data = action.payload.response.data;
                alert(JSON.stringify(data));
                console.log(data);
                if (data.non_field_errors) {
                    if (data.non_field_errors.includes('Unable to log in with provided credentials.'))
                        alert('존재하지 않는 아이디이거나 잘못된 패스워드입니다.');
                    else if (data.non_field_errors.includes('E-mail is not verified.'))
                        return state.set('isEmailNotCertified', true);
                } else {
                    alert('로그인 에러');
                }
                return state.set('isAuthenticated', false);
            },
        }),
    },
    initialState
);
