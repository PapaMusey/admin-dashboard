import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    message: false,
    cart: false,
    userProfileIcon: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [ activeMenu, setActiveMenu ] = useState (true);
    const [ isClicked, setIsClicked ] = useState (initialState);
    const [ screenSize, setScreenSize ] = useState (undefined);
    
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider
        value={{ activeMenu: activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);