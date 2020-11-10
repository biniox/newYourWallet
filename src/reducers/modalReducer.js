import Plate from "../components/plate/plate";
import AddBudget from "../modalComponents/AddBudget/AddBudget";

const modalReducer = (state, action) => {
    switch (action.type) {
        case 'HIDE':
            return {display: false, modalComponent: false};
            break;
        case 'ADD_EXPENSE':
            return {display: true, modalComponent: <Plate/>};
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