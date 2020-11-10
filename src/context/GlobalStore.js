import {useReducer, createContext} from 'react';

import userReducer from '../reducers/userReducer';
import modalReducer from './../reducers/modalReducer';

export const globalContext = createContext();

const GlobalProvider = ({children}) => {
    const [modal, setModal] = useReducer(modalReducer, {display: false, modalComponent: false});
    const [userData, setUserData] = useReducer(userReducer, {
        budget: 100
    })

    return (
        <globalContext.Provider value={
            {
                modal,
                setModal,
                userData,
                setUserData
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

