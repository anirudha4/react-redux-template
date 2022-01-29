import produce from 'immer';
import { createActions } from 'reduxsauce';

// initial state
const initialState = {
    todos: null,
    loading: false,
    error: null
}

// create actions
export const  { Types: homeTypes, Creators: homeCreators } = createActions({
    requestGetTodos: [],
    successGetTodos: ['payload'],
    errorGetTodos: ['error'],
    clear: []
});

export const homeReducer = (state = initialState, action) => produce(state, draft => {
    switch(action.type) {
        case homeTypes.REQUEST_GET_TODOS:
            draft.loading = true
            draft.error = null
            break;
        case homeTypes.SUCCESS_GET_TODOS:
            draft.loading = false;
            draft.error = null;
            draft.todos = action.payload.todos;
            break;
        case homeTypes.ERROR_GET_TODOS:
            draft.loading = false;
            draft.error = action.payload.error;
            draft.todos = null;
            break;
        case homeTypes.CLEAR:
            return initialState
        default:
            return initialState
    }
})


