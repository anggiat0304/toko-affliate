import { PRODUCT_FAILED, PRODUCT_LOADING, PRODUCT_SUCCESS } from "../actions/Types";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const ProductRecucer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                data:null,
                error: action.payload
            }
        default :
            return state   
    }
}

export default ProductRecucer;