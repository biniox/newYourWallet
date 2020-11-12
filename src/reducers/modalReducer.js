import AddBudget from "../modalComponents/AddBudget/AddBudget";
import AddExpense from "../modalComponents/AddExpense/AddExpense";

const modalReducer = (state, action) => {
    switch (action.type) {
        case 'HIDE':
            return {display: false, modalComponent: false};
            break;
        case 'ADD_EXPENSE':
            return {display: true, modalComponent: <AddExpense/>};
            break;
        case 'ADD_BUDGET':
            return {display: true, modalComponent: <AddBudget/>};
            break;

    
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default modalReducer