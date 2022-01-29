import { get } from '@services/todoService';
import { takeLatest, call, put } from 'redux-saga/effects';
import { homeCreators, homeTypes } from './reducer';

export function* getTodos() {
    const data = yield call(get, null);
    yield put(homeCreators.successGetTodos({ todos: data }));
}

export function* homeWatcher() {
    yield takeLatest(homeTypes.REQUEST_GET_TODOS, getTodos)
}