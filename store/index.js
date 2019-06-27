import { createStore } from 'redux'

const initialState = {
    contentRect: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONTENT_RECT':
            return Object.assign({}, state, {
                contentRect: action.payload
            })
        default: 
            return state
    }
}


export default () => {
    return createStore(reducer)
}
