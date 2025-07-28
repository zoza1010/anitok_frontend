import style from './FooterBottom.module.scss'
import FooterSocial from './FooterSocial/FooterSocial';

const FooterBottom = () =>{
    return(
        <div className={style.body}>
            <div className={style.description}>
                <p className={style.text}>
                    Весь материал на сайте представлен исключительно для ознакомления в домашних условиях.
                    В случаях нарушения авторских прав обращайтесь на почту: copyrights@example.top.
                    Для связи с нами по вопросам рекламы и сотрудничества: contact@example.top.
                </p>
                <span className={style.copyright}>
                    &copy; 2025 &bull; AniTok
                </span>
            </div>
            <div className={style.social}>
                <FooterSocial/>
            </div>
        </div>
    )
}

export default FooterBottom;