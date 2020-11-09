import {useState, createContext} from 'react'

export const modalContext = createContext();

const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false);

    return (
        <modalContext.Provider value={{modal, setModal}}>
            {children}
        </modalContext.Provider>
    )
}

export default ModalProvider


// const modalReducer = (state, action) => {
//     switch (action) {
//         case 'Add_Expense':
//             return
//             break;
    
//         default:
//             break;
//     }
// }