// obiekt akcji :
// {
//     type,
//     payload
// }

const userPurposeReducer = (prev, action) => {
    let {payload} = action;
    switch (action.type) {
        
        // case 'ADD':
        //     payload.id = prev.length;
        //     return [...prev, payload];
        // break;

        case 'EDIT':
            prev.forEach(item => {
                if(item.id == payload.id) {
                    item.name = payload.name? payload.name : item.name;
                    item.money = payload.money? payload.money : item.money;
                    item.moneySave = payload.moneySave? payload.moneySave : item.moneySave;
                }
            });
            return prev;
        break;
            
            
        default:
            throw new Error('Please type a valid action type')
        break;
    }
}


export default userPurposeReducer;