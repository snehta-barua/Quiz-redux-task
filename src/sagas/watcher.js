import {  put, takeEvery } from "redux-saga/effects";
import { SAGA_SELECTED_OPT_ID, SELECTED_OPTION } from "../Constants/optionConst";

 export function* sagaSelectedOpt(id){
    yield put({type:SAGA_SELECTED_OPT_ID,index:id.payload});
}
export default function* watchSelectedOption(){
    yield takeEvery(SELECTED_OPTION, sagaSelectedOpt);
}