import style from './FooterSocial.module.scss'


const FooterSocial = () =>{
    return(
        <div className={style.body}>
            <ul className={style.list}>
                <li className={style.item}>
                    <a className={style.item_link} href='https://www.youtube.com/' target="_blank">
                        <img src="/img/social/telegram.svg" alt="telegram" className={style.img}/>
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.item_link} href='https://www.youtube.com/' target="_blank">
                        <img src="/img/social/tiktok.svg" alt="telegram"  className={style.img}/>
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.item_link} href='https://www.youtube.com/' target="_blank">
                        <img src="/img/social/youtube.svg" alt="telegram" className={style.img}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default FooterSocial;