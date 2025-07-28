'use client'


import style from './AuthSwitcher.module.scss'
import AuthForm from '../AuthForm/AuthForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm'

import { useState } from 'react'

const AuthSwitcher = () =>{

    const [activeTab, setActiveTab] = useState(0);
    
    const tabsConfig = [
        {
        title: 'Вход',
        component: AuthForm,
        },
        {
        title: 'Регистрация',
        component: RegisterForm,
        },
        {
        title: 'Сброс пароля',
        component: ResetPasswordForm,
        },
    ];

    const ActiveComponent = tabsConfig[activeTab].component

    return(
        <div className={style.body}>
            <div className={style.tabs}>
                {
                    tabsConfig.map((item, index) => {
                        return(
                            <button 
                                className={`${style.tab} ${index === activeTab ? style.active : ''}`}
                                key={item.title}
                                onClick={() => setActiveTab(index)}
                            >
                                {item.title}
                            </button>
                        )
                    })
                }
            </div>

            <div className={style.forms}>
                <ActiveComponent />
            </div>

        </div>
    )
}

export default AuthSwitcher;