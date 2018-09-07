const defaultState = {
    loadedGraph: null
}

const state = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_IN_GRAPH': {
            return {
                ...state,
                loadedGraph: action.graph
            }
        }

        default: {
            return state
        }

    }
}

export default state