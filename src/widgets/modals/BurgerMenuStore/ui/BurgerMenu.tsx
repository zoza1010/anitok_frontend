import style from './BurgerMenu.module.scss';

import { useBurgerMenuStore } from '@/widgets/modals/BurgerMenuStore/model/BurgerMenuStore';
import { useScrollLock } from '@/shared/hooks/useScrollLock';
import CrossCloseButton from '@/shared/ui/cross/CrossCloseButton/CrossCloseButton';
import SearchButtonMobile from '@/shared/ui/buttons/SearchButtonMobile/SearchButtonMobile';
import LogoutButton from '@/entities/user/ui/LogoutButton/LogoutButton';


import { useEffect } from 'react';
import ProfileList from './lists/ProfileList';
import UserProfileMobile from '@/entities/user/ui/UserProfileMobile/UserProfileMobile';

const BurgerMenu = () =>{
    

    const isOpen = useBurgerMenuStore(state => state.isActive);
    const onClose = useBurgerMenuStore(state => state.onClose);
    useScrollLock(isOpen);
    

    useEffect(() => {
        console.log('BurgerMenu render');
    });
    return(
        <div 
            className={`${isOpen ? style.show : ''} ${style.body}`} 
            onClick={onClose}
        >
            <div className={style.container} onClick={(e) => e.stopPropagation()}>
                <div className={style.top}>
                    <div className={`cross ${style.close}`}>
                        <button className={style.close_button} onClick={onClose}>
                            <div className={style.close_text}>
                                Закрыть
                            </div>
                            <div className={style.cross}>
                                <CrossCloseButton/>
                            </div>
                        </button>
                    </div>
                    <ul className={style.top_list}>
                        <li className={style.item}>
                            <SearchButtonMobile/>
                        </li>
                    </ul>
                </div>

                <ul className={style.list}>
                    <li className={`${style.item}`}>
                        <UserProfileMobile/>
                    </li>
                    <li className={style.item}>
                        <ProfileList/>
                    </li>
                    <li className={style.item}>
                        <LogoutButton/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu;