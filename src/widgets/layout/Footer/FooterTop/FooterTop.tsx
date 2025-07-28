import style from './FooterTop.module.scss'
import Link from 'next/link';

const FooterTop = () =>{
    return(
        <div className={style.body}>
            <div className={style.nav}>
                <nav className={style.nav_container} aria-label="Навигация по сайту">
                    <h4 className={style.title}>
                        Навигация
                    </h4>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className={style.nav_container} aria-label="Контактная информация">
                    <h4 className={style.title}>
                        Контакти
                    </h4>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className={style.nav_container} aria-label="Аккаунт пользователя">
                    <h4 className={style.title}>
                        Аккаунт
                    </h4>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/' className={`btn ${style.item_link}`}>
                                Текст
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={style.logo}>
                <Link href='/'>
                    <img src="/img/logo/logobig.svg" alt="Лого" className={style.img} />
                </Link>
            </div>
        </div>
    )
}


export default FooterTop;