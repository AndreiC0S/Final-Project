import React, {createContext, useEffect, useState} from 'react'

export const CartContext = createContext();

export function CartContextProvider({children}) {
    

        const [content, setContent] = useState(JSON.parse(localStorage.getItem("cartItems") || '[]'));
        
        
        // console.log('context',content)
        

        useEffect(() => {
            //    alert('context');
                
                if(content != null) {
                    localStorage.setItem("cartItems", JSON.stringify(content));
                }
                else{
                    localStorage.setItem("cartItems", null);
                }
               
            }, [content]);
            localStorage.setItem("cartItems", JSON.stringify(content))
        return (
            <CartContext.Provider value={{content, setContent}}>
                {children}
            </CartContext.Provider>
          
        )
    
}
