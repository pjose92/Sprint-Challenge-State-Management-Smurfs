import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE} from '../actions'

const initialState ={
    smurfs:[],
    isFetching: false,
    isPosting: false,
    error: ''
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true,
                error: ''
            }

        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false
            }

        case POST_SMURF_FAILURE:
            return {
                ...state, 
                isPosting: false,
                error: action.payload
                
            }
        default:
            return state;
    }
}