import React, { createContext, useState } from "react";
export const LanguageContext = createContext();

const LanguageContextProvider =({children}) =>{
    const [lang,setLang] = useState('english')
    return(
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}
export default LanguageContextProvider