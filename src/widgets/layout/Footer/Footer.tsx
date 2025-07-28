import style from './Footer.module.scss'
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';


const Footer = () =>{
    return(
        <div className={style.body}>
            <div className={`container ${style.container}`}>
                <div className={style.top}>
                    <FooterTop/>
                </div>
                <span className={style.line}>

                </span>
                <div className={style.bottom}>
                    <FooterBottom/>
                </div>
            </div>
        </div>
    )
}


export default Footer;