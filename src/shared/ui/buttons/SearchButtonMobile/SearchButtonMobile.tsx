import style from './SearchButtonMobile.module.scss'

import {memo} from 'react'

const SearchButtonMobile = () =>{
    return(
        <button className={style.body}>
            <div className={style.text}>
                Поиск
            </div>
            <div className={style.img}>
                <img src="/img/buttons/search/search.svg" alt="Поиск"/>
            </div>
        </button>
    )
}

export default memo(SearchButtonMobile);