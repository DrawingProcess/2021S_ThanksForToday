import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";
import { pender } from "redux-pender";

import * as api from "lib/api";

/* 액션 타입 */
export const LIST_DIARY = "diary/LIST_DIARY"; //게시판 목록 가져오기
export const ADD_DIARY = "diary/ADD_DIARY"; //r글추가
export const UPDATE_DIARY = "diary/UPDATE_DIARY"; //글 수정
export const DELETE_DIARY = "diary/DELETE_DIARY"; //글 삭제
export const WORD_CLOUD = "diary/WORD_CLOUD";//워드클라우드 사진

/* 액션 생성자 */
export const getDiaryList = createAction(LIST_DIARY, api.getDiaryList); //게시판 목록 가져오기
export const addDiary = createAction(ADD_DIARY, api.addDiary); //글 추가
export const updateDiary = createAction(UPDATE_DIARY, api.updateDiary); //글 수정
export const deleteDiary = createAction(DELETE_DIARY, api.deleteDiary); //글삭제
export const wordCloud = createAction(WORD_CLOUD, api.wordCloud); //워드 클라우드 

/* 초기 상태 정의 */
const initialState = Map({
    diaryList: Map([]),
    diary: '',
    wordCloud: '',
});

/* reducer + pender */
export default handleActions(
    {
        ...pender({
            type: LIST_DIARY,
            onSuccess: (state, action) => {
                const data = action.payload.data;
                console.log(data + "fffff");
                return state.set("diaryList", data);
            },
            onFailure: (state, action) => {
                const data = action.payload.response.data;
                console.log(data);
                alert(JSON.stringify(data));
                return state;
            },
        }),
        ...pender({
            type: ADD_DIARY,
            onSuccess: (state, action) => {
                //추가된 게시판 정보가 반환됨
                const data = Map(action.payload.data);
                console.log("허허api가 들어왔나");
                alert(JSON.stringify(data));
                return state
            },
            onFailure: (state, action) => {
                const data = action.payload.response.data;
                console.log(data);
                alert(JSON.stringify(data));
                return state;
            },
        }),
        ...pender({
            type: UPDATE_DIARY,
            onSuccess: (state, action) => {
                //수정된 게시판 정보가 반환됨
                const data = Map(action.payload.data);
                return state
                    .set("diary", data);
            },
            onFailure: (state, action) => {
                const data = action.payload.response.data;
                console.log(data);
                alert(JSON.stringify(data));
                return state;
            },
        }),
        ...pender({
            type: DELETE_DIARY,
            onSuccess: (state, action) => {
                alert("게시판이 삭제되었습니다.");
                return state;
            },
            onFailure: (state, action) => {
                const data = action.payload.response.data;
                console.log(data);
                alert(JSON.stringify(data));
                return state;
            },
        }),
        ...pender({
            type: WORD_CLOUD,
            onSuccess: (state, action) => {
                alert("word_cloud");
                const data = Map(action.payload.data);
                console.log(data);
                return state.set("wordCloud", data);
            },
            onFailure: (state, action) => {
                const data = action.payload.response.data;
                console.log(data);
                alert(JSON.stringify(data));
                return state;
            },
        }),
    },
    initialState
);