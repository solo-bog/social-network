import {checkAuth} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized:false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:{
            return  {
                ...state,
                initialized: true
            };

        }
        default:
            return state;
    }


}


export const initializedSuccess = () => ({
    type:INITIALIZED_SUCCESS
})

export const initialize = () => (dispatch) => {
    let promise = dispatch(checkAuth())
    debugger
    Promise.all([promise]).then(()=>{
            debugger
            dispatch(initializedSuccess())
        }

    )

}



export default appReducer;