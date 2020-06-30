import ActionType from './globalActionType'


// buat global state
const globalState = {
    totalOrder: 4
}

// Reducer
const rootReducer = (state = globalState, action) => {
    console.log(ActionType.MINUS_ORDER);

    // untuk handle plus, minus, ini membuat 2 fungsi reducer untuk selanjutnya di dispatch di component Counter
    if (action.type === ActionType.PLUS_ORDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if (action.type === ActionType.MINUS_ORDER) {
        if (state.totalOrder > 0) {
            return {
                ...state,
                totalOrder: state.totalOrder - 1
            }
        }

    }
    return state;
}

export default rootReducer;