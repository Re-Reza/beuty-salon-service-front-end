function reserveReducer(state, action){

    switch(action.type){

        case "SET_SERVICE":
            return {
                date : {
                    day:null,
                    month: null,
                    year: null
                },
                employee:{
                    value: {},
                    // complited: false,     
                },
                serviceType : action.payload
            };

        case "SET_EMPLOYEE": 
            
            return {
                ...state,
                employee : {
                    value : action.payload
                }   
            };

        case "SET_DATE": 
            return {
                ...state,
                date : action.payload
            };

        default: 
            return state;
    }


}

export default reserveReducer;