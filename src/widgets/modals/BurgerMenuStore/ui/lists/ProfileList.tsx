import DropDownButton from '@/shared/ui/buttons/DropDownButton/DropDownButton';
import style from './ProfileList.module.scss'

import Link from 'next/link';
import { useBurgerMenuStore } from '../../model/BurgerMenuStore';

import { useMemo, memo } from 'react';

const ProfileList = () =>{

    const closeBurger = useBurgerMenuStore(state => state.onClose);

    //items
    const mainPage = () =>{
        return(
            <Link className={style.item} href='/' onClick={closeBurger}>
                Главная
            </Link>
        )
    }
    const catalogPage = () =>{
        return(
            <Link className={style.item} href='/catalog' onClick={closeBurger}>
                Каталог
            </Link>
        )
    }
    const selectModePage = () =>{
        return(
            <Link className={style.item} href='/select-mode' onClick={closeBurger}>
                Аниме по вкусу
            </Link>
        )
    }
    const authPage = () =>{
        return(
            <Link className={style.item} href='/auth' onClick={closeBurger}>
                Вход / Регистрация
            </Link>
        )
    }

    //list
    const items = useMemo(() => [
        mainPage(),
        catalogPage(),
        selectModePage(),
        authPage(),
        
    ], []);

    return(
        <div className={style.body}>
            <DropDownButton
                items={items}
                step={4}
                title="Навигация по сайту" 
            />
        </div>
    )

}


export default memo(ProfileList);