import { useReducer } from "react";

import '../../public/styles/globals.css';//must be after bootsrap to apply css reset
import "bootstrap/dist/css/bootstrap.min.css"

import ContextStore from "../context/contextStore";
import reducer from "../context/reducer";

import Head from "next/head"; 

function App({ Component, pageProps }) {

  const [ state, dispatch ] = useReducer( reducer, {
    date : null,
    fName : null,
    lName : null,
    phone : null,
    profileImg : null
  });
  

  return <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    
    <ContextStore.Provider value={{
      contextState : state,
      dispatch
    }}>
      <Component {...pageProps} />
    </ContextStore.Provider>
   
  </>
}

export default App;
