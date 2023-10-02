import React from 'react';
import LoginPopup from './LoginPopup';
import { useState } from 'react';

export default function Login({isUser}) {

  

    const [visible, setVisible] = useState(false);
  
    const handleToggle = () => {
      setVisible((current) => !current);
    };
  
    
  return (
    <>
    
    <button onClick={handleToggle} class="  mr-5 font-medium hover:text-amber-300">
      Login
    </button> 
    
    
    {visible && (
        <LoginPopup
        toggle = {handleToggle}
        isUser = {isUser}
        
        />
        )}
        
    
    
    
    </>
  )
}
