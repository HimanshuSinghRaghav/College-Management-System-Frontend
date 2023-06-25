import React ,{useContext , useEffect , useState} from 'react'
import { createContext } from 'react'

import { useNavigate } from 'react-router-dom';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
const navigate = useNavigate





//student-table




    const Menu = ()=>{
      const mobileSupportMenu = document.getElementById('mobileSupportMenu')
      if(mobileSupportMenu.getAttribute('class')==='hidden'){
        mobileSupportMenu.setAttribute('class','block') 
        mobileSupportMenu.setAttribute('class' , 'sm:flex sm:space-x-7 sm:mt-5 sm:mr-10')       
      } else{
        mobileSupportMenu.setAttribute('class','hidden')
               
      }
    }
  
  return ( <AppContext.Provider value={{Menu  , open }}>
    {children}
  </AppContext.Provider>
    
  )
}




const uasGlobalContext = () => {
  return useContext(AppContext)
   
}

export default uasGlobalContext


export {AppContext ,AppProvider}