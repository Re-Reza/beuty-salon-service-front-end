function reserveReducer(state, action){

    switch(action.type){

        case "SET_CATEGORY":

            return {
                ...state,
                date : {
                    day:null,
                    month: null,
                    year: null
                },
                employee:{
                    value: {},
                    // complited: false,     
                },
                service : {
                    id : null,
                    value : null
                },
                category : action.payload
            };

        case "SET_SERVICE": 
            return{
                ...state,
                service : action.payload
            }

        case "SET_EMPLOYEE": 
            const { employeeId, personId, fName, lName} = action.payload;
            return {
                ...state,
                employee : {
                    employeeId,
                    personId,
                    fName,
                    lName 
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