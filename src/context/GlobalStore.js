import {useReducer, createContext} from 'react';
import userCategoryReducer from '../reducers/userCategoryReducer';

import userReducer from '../reducers/userReducer';
import modalReducer from './../reducers/modalReducer';
import userExpensesReducer from './../reducers/userExpensesReducer';

export const globalContext = createContext();

const GlobalProvider = ({children}) => {
    const [modal, setModal] = useReducer(modalReducer, {display: false, modalComponent: false});
    const [userData, setUserData] = useReducer(userReducer, {
        budget: 100
    });
    const [userExpenses , setUserExpenses] = useReducer(userExpensesReducer, [
        {
            id: "1",
            date: "2020-07-22",
            name: "Kurs Wędkowania",
            category: 1,
            cost: 130
        },
        {
            id: "1",
            date: "2020-07-23",
            name: "Samochód",
            category: 2,
            cost: 1500
        },
        {
            id: "1",
            date: "2020-07-24",
            name: "Karma dla kota",
            category: 2,
            cost: 29.99
        },
        {
            id: "1",
            date: "2020-07-25",
            name: "Ziemniaki",
            category: 1,
            cost: 6.99
        },
    ])
    const [userCategory, setUserCategory] = useReducer(userCategoryReducer, [
        {
            id: 1,
            name: "Hobby"
        },
        {
            id: 2,
            name: "Rozrywka"
        },
        {
            id: 3,
            name: "Jedzenie"
        },
    ]) 
    return (
        <globalContext.Provider value={
            {
                modal,
                setModal,
                userData,
                setUserData,
                userExpenses,
                setUserExpenses,
                userCategory,
                setUserCategory
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

