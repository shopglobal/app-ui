import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = ({ name = "language" }) => {
    const { i18n } = useTranslation()
    const changeLanguage = (value) => {
        i18n.changeLanguage(value)
    }
    const data = [
        {
            name: "EN",
            value: "en"
        },
        {
            name: "CN",
            value: "cn"
        },
        {
            name: "ARA",
            value: "ara"
        }
    ]
    const currLang = ["en", "cn", "ara"].indexOf(i18n.language) === -1 ? "en" : i18n.language

    return (
        <div className="lang-warp">
            {
                data.map((lang, index) => {
                    return <div key={lang.value} className="wrap-item">
                        <div onClick={() => changeLanguage(lang.value)} className={currLang === lang.value ? "active item" : "item"}>{lang.name} </div>
                        {data.length !== index + 1 && <span>/</span>}
                    </div>
                })
            }
        </div>
    )
}

export default LanguageSelector
