import { useReducer, createContext} from 'react';
import userCategoryReducer from '../reducers/userCategoryReducer';
import userPurposeReducer from '../reducers/userPurposeReducer';

import userReducer from '../reducers/userReducer';
import modalReducer from './../reducers/modalReducer';
import userExpensesReducer from './../reducers/userExpensesReducer';

export const globalContext = createContext();

const GlobalProvider = ({children}) => {
    const [modal, setModal] = useReducer(modalReducer, {display: false, modalComponent: false});
    const [userData, setUserData] = useReducer(userReducer, {
        budget: 100,
        actualBudget: 80,
        currentExpense: 20,
        lastMonthSavings: 150,
        sumOfSavings: 1400,
        sumOfExpense: 500,
    });
    const [userExpenses , setUserExpenses] = useReducer(userExpensesReducer, [
        {
            id: "1",
            date: "6.11.2020",
            product: "Kurs Wędkowania",
            category: 1,
            cost: 130
        },
        {
            id: "1",
            date: "6.11.2020",
            product: "Samochód",
            category: 2,
            cost: 1500
        },
        {
            id: "1",
            date: "6.11.2020",
            product: "Karma dla kota",
            category: 2,
            cost: 29.99
        },
        {
            id: "1",
            date: "6.11.2020",
            product: "Ziemniaki",
            category: 3,
            cost: 6.99
        },
        {
            date: '6.11.2020',
            product: 'Wódeczka',
            category: 1,
            cost: 70
        },
        {
            date: '5.11.2020',
            product: 'Komputer',
            category: 2,
            cost: 800
        },
        {
            date: '4.11.2020',
            product: 'fajeczki',
            category: 3,
            cost: 70
        },
        {
            date: '3.11.2020',
            product: 'Cyberpunk 2077',
            category: 2,
            cost: 199.99
        },
        {
            date: '2.11.2020',
            product: 'Bułeczki',
            category: 1,
            cost: 12.67
        },
        {
            date: '1.11.2020',
            product: 'Wódeczka',
            category: 3,
            cost: 70
        },
        {
            date: '31.10.2020',
            product: 'Komputer',
            category: 1,
            cost: 800
        },
        {
            date: '30.10.2020',
            product: 'fajeczki',
            category: 2,
            cost: 70
        },
        {
            date: '29.10.2020',
            product: 'Cyberpunk 2077',
            category: 1,
            cost: 199.99
        },

        {
            date: '28.10.2020',
            product: 'Bułeczki',
            category: 2,
            cost: 12.67
        },
        {
            date: '27.10.2020',
            product: 'Wódeczka',
            category: 1,
            cost: 70
        },
        {
            date: '26.10.2020',
            product: 'Komputer',
            category: 1,
            cost: 800
        },
        {
            date: '25.10.2020',
            product: 'fajeczki',
            category: 1,
            cost: 70
        },
        {
            date: '24.10.2020',
            product: 'Cyberpunk 2077',
            category: 2,
            cost: 199.99
        },
        {
            date: '23.10.2020',
            product: 'kiełbasa',
            category: 3,
            cost: 12.99
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


    const [userPurpose, setUserPurpose] = useReducer(userPurposeReducer, [ 
        {
            id: 1,
            name: "KONIK",
            moneySave: "70", 
            money: 80 
        },
        {
            id: 2,
            name: "Mydło", 
            moneySave: 60, 
            money: 80 
        },
        {
            id: 3,
            name: "Waga", 
            moneySave: 20, 
            money: 100 
        },
        {
            id: 4,
            name: "zegar", 
            moneySave: 100, 
            money: 100 
        }
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
                setUserCategory,
                userPurpose, 
                setUserPurpose,
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

