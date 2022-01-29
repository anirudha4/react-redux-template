import { all } from 'redux-saga/effects'
import { homeWatcher } from "@pages/Home/saga";

const sagaRegistry = [
    homeWatcher()
]

export function* coreSaga() {
    yield all(sagaRegistry)
}