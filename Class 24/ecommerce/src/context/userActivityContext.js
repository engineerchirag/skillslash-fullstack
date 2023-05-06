import { createContext, useState } from "react";


export const UserActivityContext =  createContext();

export const UserActivityProvider = ({ children }) => {
    const [selectedProducts, setSelectedProducts] = useState({});

    const updateCart = (productId) => {
        setSelectedProducts((oldState) => {
          const newState = { ...oldState };
          newState[productId] = true;
          return newState;
        });
      };

    const value = {
        selectedProducts,
        updateCart
    }
    return (
        <UserActivityContext.Provider value={value}>
            { children }
        </UserActivityContext.Provider>
    )
}