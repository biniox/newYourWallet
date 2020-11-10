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

    
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default userReducer;