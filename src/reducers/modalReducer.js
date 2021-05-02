import AddBudget from "../modalComponents/AddBudget/AddBudget";
import AddCategory from "../modalComponents/AddCategory/AddCategory";
import AddExpense from "../modalComponents/AddExpense/AddExpense";
import AddPurpose from "../modalComponents/AddPurpose/AddPurpose";

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

        case 'ADD_CATEGORY':
            return {display: true, modalComponent: <AddCategory/>};
            break;
        case 'EDIT_CATEGORY':
            return {display: true, modalComponent: <AddCategory toEdit={action.payload} />};
            break;

        case 'ADD_PURPOSE':
            return {display: true, modalComponent: <AddPurpose/>};
            break;
        case 'EDIT_PURPOSE':
            return {display: true, modalComponent: <AddPurpose toEdit={action.payload} />};
            break;

    
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default modalReducer