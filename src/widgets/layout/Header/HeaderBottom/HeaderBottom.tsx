'use client'

import BurgerClassic from '@/shared/ui/burgers/BurgerClassic/BurgerClassic';
import style from './HeaderBottom.module.scss';
import Link from 'next/link';

import { useBurgerMenuStore } from '@/widgets/modals/BurgerMenuStore/model/BurgerMenuStore';


const HeaderBottom = () =>{

    const onOpen = useBurgerMenuStore(state => state.onOpen);
    const isBurgerOpen = useBurgerMenuStore(state => state.isActive)


    return(
        <div className={`scrollbar-fix ${style.body}`}>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <Link href='/' className={`btn ${style.link}`}>
                            <div className={style.img}>
                                <img src="/img/header/bottom/favorite.svg" alt="" />
                            </div>
                            <p className={`wrap ${style.description}`}>
                                Закладки
                            </p>
                        </Link>
                    </li>

                    <li className={style.item}>
                        <Link href='/' className={`btn ${style.link}`}>
                            <div className={style.img}>
                                <img src="/img/header/bottom/massage.svg" alt="" />
                            </div>
                            <p className={`wrap ${style.description}`}>
                                Уведомления
                            </p>
                        </Link>
                    </li>

                    <li className={style.item}>
                        <Link href='/' className={`btn ${style.link}`}>
                            <div className={style.img}>
                                <img src="/img/header/bottom/main.svg" alt="" />
                            </div>
                            <p className={`wrap ${style.description}`}>
                                Главная
                            </p>
                        </Link>
                    </li>

                    <li className={style.item}>
                        <Link href='/' className={`btn ${style.link}`}>
                            <div className={style.img}>
                                <img src="/img/header/bottom/random.svg" alt="" />
                            </div>
                            <p className={`wrap ${style.description}`}>
                                Аниме по вкусу
                            </p>
                        </Link>
                    </li>

                    <li className={style.item}>
                        <button className={`btn ${style.link}`} onClick={onOpen}>
                            <div className={style.burger}>
                                <BurgerClassic isActive = {isBurgerOpen}/>
                            </div>
                            <p className={`wrap ${style.description}`}>
                                Меню
                            </p>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default HeaderBottom;