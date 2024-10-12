import "./home.css";

import { useTranslation } from 'react-i18next';
import Languages from "../../translations/languages"

function Header() {

    const [t, i18n] = useTranslation("global");

    return (
        <div className='header'>
            <h1> {t("header.title")}</h1>
            <select name="" id="" >
                {
                    Languages.map((language) => (
                        < option key={language.sym} onClick={() => i18n.changeLanguage(language.sym)}>{language.lan}</option>
                    ))
                }
            </select>
        </div >
    )
}

export default Header;
