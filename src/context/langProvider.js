import {LanguageContext} from "./langContext";


export default function LangProvider({children}){

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const valueLang = getCookie("i18next");
    return(
        <LanguageContext.Provider value={valueLang}>
            {children}
        </LanguageContext.Provider>
    )
}
