import {fork} from "redux-saga/effects";
import watchSelectedOption from "./watcher";

export default function* start(){
    
    yield fork(watchSelectedOption);
}