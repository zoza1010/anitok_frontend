import style from './AnimeCard.module.scss'
import { SlideCardType } from '@/entities/anime/model/AnimeType';

import Image from 'next/image';
import Link from 'next/link';

type AnimeCardProps = {
  animeItem: SlideCardType;
}

const AnimeCard = ({ animeItem }: AnimeCardProps) => {
  return (
    <Link className={style.body} href={`/anime/${animeItem.id}`}>
      <div className={style.poster}>
        <div className={style.img}>
          <Image
            src={animeItem.poster.originalUrl ?? '/fallback-image.png'}
            alt={animeItem.russian || 'poster'}
            fill
          />
        </div>

        <div className={style.poster_hover}>
          <div className={style.rating}>
            <div className={style.score}>
              <div className={style.score_text}>
                {animeItem.score}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 19"
                fill="none"
                className={style.star}
              >
                <path
                  d="M8.5368 1.45181C8.80885 0.476845 10.1911 0.476846 10.4632 1.45181L11.807 6.26768C11.9319 6.71502 12.3482 7.01754 12.8123 6.99802L17.8077 6.7879C18.819 6.74536 19.2462 8.05999 18.403 8.62002L14.2381 11.3863C13.8512 11.6432 13.6922 12.1327 13.8541 12.568L15.5976 17.254C15.9506 18.2027 14.8323 19.0151 14.0391 18.3863L10.1213 15.2801C9.75734 14.9915 9.24266 14.9915 8.87873 15.2801L4.96086 18.3863C4.16769 19.0151 3.04939 18.2027 3.40236 17.254L5.14587 12.568C5.30783 12.1327 5.14878 11.6432 4.76191 11.3863L0.597016 8.62002C-0.246163 8.05999 0.18099 6.74536 1.19231 6.7879L6.18774 6.99802C6.65176 7.01754 7.06814 6.71502 7.19296 6.26768L8.5368 1.45181Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={style.score_count}>
              {animeItem.totalVotes} голосов
            </div>
          </div>
        </div>
      </div>

      <div className={style.text}>
        <h5 className={style.title}>
          {animeItem.russian}
        </h5>
        <p className={style.description}>
          {animeItem.description}
        </p>
      </div>
    </Link>
  )
}

export default AnimeCard;
