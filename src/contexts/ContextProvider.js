import React, { createContext, useContext, useState} from 'react';

const StateContext =createContext();

const intialState ={
    chart:false,
    userProfile:false,
};

export const ContextProvider =({ children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] =useState(undefined);
    const [currentMode, setCurrentMode] = useState('Light');

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                screenSize, 
                setScreenSize,
                currentMode, setCurrentMode,
            
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =()=> useContext(StateContext);