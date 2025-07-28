import PopularSection from '@/pages/main/ui/PopularSection';
import style from './MainPage.module.scss'


const MainPage = () =>{
    return(
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.popular}>
                    <PopularSection/>
                </div>
            </div>
        </div>
    )
}


export default MainPage;