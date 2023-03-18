// import React,{createContext, useReducer} from 'react'
// import { useContext } from 'react';

// export const StateContext = createContext();

// export const StateProvider = ({
//     reducer,initialState, childern})=>(
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {childern}
//     </StateContext.Provider>
// );

// export const useStateValue = () => useContext(StateContext);


import React,{createContext, useReducer,useContext} from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer,initialState, children})=>{
    return( 
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    );
    };

export const useStateValue = () => useContext(StateContext);
