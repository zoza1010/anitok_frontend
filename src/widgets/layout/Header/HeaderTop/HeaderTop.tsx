import Link from 'next/link';
import style from './HeaderTop.module.scss'
import UserProfile from '@/entities/user/ui/UserProfile/UserProfile';
import SearchButton from '@/shared/ui/buttons/SearchButton/SearchButton';


const HeaderTop = () =>{
    return(
        <div className={`scrollbar-fix ${style.body}`}>
            <div className={`${style.container} container`}>
                <div className={style.left}>
                    <Link href='/' className={style.logo}>
                        <img src="/img/logo/logoDekstop.svg" alt="Logo" className={style.logo_img}/>
                    </Link>
                    <nav className={style.nav}>
                        <ul className={style.list}>
                            <li className={style.item}>
                                <Link href='/' className={`btn ${style.item_link}`}>
                                    Головна
                                </Link>
                            </li>
                            <li className={style.item}>
                                <Link href='/' className={`btn ${style.item_link}`}>
                                    Каталог
                                </Link>
                            </li>
                            <li className={style.item}>
                                <Link href='/' className={`btn ${style.item_link}`}>
                                    Аниме по вкусу
                                </Link>
                            </li>
                            <li className={style.item}>
                                <Link href='/' className={`btn ${style.item_link}`}>
                                    Топ 100
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                <div className={style.center}>
                    <SearchButton/>
                </div>

                <div className={style.right}>
                    <button className={style.search}>
                        <img src="/img/buttons/search/search.svg" alt="" />
                    </button>
                    <span className={style.line}>
                        
                    </span>
                    <div className={style.profile}>
                        <UserProfile/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderTop;