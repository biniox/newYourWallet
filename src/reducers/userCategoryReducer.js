// obiekt akcji :
// {
//     type,
//     payload
// }

const userCategoryReducer = (prev, action) => {
    let {payload} = action;
    switch (action.type) {
        
        case 'ADD':
            payload.id = prev.length;
            return [...prev, payload];
        break;
    
        case 'EDIT':

            prev.forEach(item => { if(item.id == payload.id) item.name = payload.name } );
            return [...prev, payload];
        break;
            
            
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default userCategoryReducer;