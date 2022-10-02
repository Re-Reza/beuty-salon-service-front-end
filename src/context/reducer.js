function reducer(state, {type, payload}) {

    switch (type) {

        case "SET_DATA":

            return {
                ...state,
                date : payload.date,
                fName : payload.data.fName,
                lName : payload.data.lName,
                phone : payload.data.phone,
                profileImg : payload.data.profileImg
            }

        case "DELETE_DATA":
            return {
                date : null,
                fName : null,
                lName : null,
                phone : null,
                profileImg : null
            }

        default : 
            return state;
    }

}

export default reducer;