// obiekt akcji :
// {
//     type,
//     value
// }

const userReducer = (prev, action) => {
    switch (action.type) {
        case 'EDIT_BUDGET':
            return {budget: action.value};
        break;

        case 'ADD_EXPENSE':
            return {
                budget: prev.budget,
                actualBudget: prev.actualBudget - action.value,
                currentExpense: prev.currentExpense + action.value,
                lastMonthSavings: prev.lastMonthSavings,
                sumOfSavings: prev.sumOfSavings,
                sumOfExpense: prev.sumOfExpense + action.value,
        };
        break;

        case 'ADD_LASTMONTHSAVINGS':
            return {
                budget: prev.budget,
                actualBudget: prev.actualBudget,
                currentExpense: prev.currentExpense,
                lastMonthSavings: prev.lastMonthSavings + action.value,
                sumOfSavings: prev.sumOfSavings + action.value,
                sumOfExpense: prev.sumOfExpense,
        };
        break;
    
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default userReducer;