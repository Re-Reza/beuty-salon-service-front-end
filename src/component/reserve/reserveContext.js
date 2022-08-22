import React from "react";

const reserveContext = React.createContext({
    serviceType: {  
        value: "",
        // complited: false,            
    },
    employee:{
        value: "",
        // complited: false,     
    },
    date:{
        day:null,
        month: null,
        year: null  
    } 
});

export default reserveContext;