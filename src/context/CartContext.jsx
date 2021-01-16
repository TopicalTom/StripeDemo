import React, { createContext, useReducer} from 'react';
import cartReducer from '../utils/cartReducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const addProduct = (product) => dispatch({type: 'ADD_ITEM', payload: product});
    const increase = (product) => dispatch({type: 'INCREASE', payload: product});
    const decrease = (product) => dispatch({type: 'DECREASE', payload: product});
    const remove = (product) => dispatch({type: 'REMOVE', payload: product});
    
    const contextValues = {
        ...state,
        addProduct,
        increase,
        decrease,
        remove
    }

    return (
        <CartContext.Provider value={ contextValues }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;