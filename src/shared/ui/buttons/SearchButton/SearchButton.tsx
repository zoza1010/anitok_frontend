import style from './SearchButton.module.scss'


const SearchButton = () =>{


    return(
        <button className={style.body}>
            <div className={style.img}>
                <img src="/img/buttons/search/search.svg" alt="Пошук" />
            </div>

            <div className={style.text}>
                Швидкий пошук:
            </div>
        </button>
    )
}


export default SearchButton