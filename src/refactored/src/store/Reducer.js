const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            };
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;