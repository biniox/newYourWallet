// obiekt akcji :
// {
//     type,
//     payload
// }

const userExpensesReducer = (prev, action) => {
    let {payload} = action;

    switch (action.type) {
        
        case 'ADD':
            payload.id = prev.length;
            return [...prev, payload];
        break;
            
        case 'EDIT':
             return payload;
        break;
            
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default userExpensesReducer;