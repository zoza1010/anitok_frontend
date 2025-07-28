import style from './LogoutButton.module.scss'

import { useUserStore } from '@/entities/user/model/userStore'
import { memo } from 'react';



const LogoutButton = () =>{
    const token  = useUserStore(state => state.token);
    const logout = useUserStore(state => state.logout);

    if (!token) return null

    return(
        <button className={style.body} onClick={logout}>
            <img src="/img/buttons/exit/exit.png" alt="" className={style.img} />
            <p className={style.text}>
                Выйти из аккаунта
            </p>
        </button>
    )
}


export default memo(LogoutButton);