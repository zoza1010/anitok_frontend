'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import style from './AnimeSlider.module.scss'

import 'swiper/css';
import AnimeCard from '@/entities/anime/ui/AnimeCard/AnimeCard';

import { SlideCardType } from '@/entities/anime/model/AnimeType';


type AnimeSliderProps = {
  animeList: SlideCardType[];
};

const AnimeSlider = ({ animeList }: AnimeSliderProps) => {

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={'auto'}
      onSlideChange={() => console.log('slide-tyry-ry')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      {animeList.map((item, index) => {
        return(
          <SwiperSlide key={item.id || index} className={style.slide}>
            <AnimeCard animeItem={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default AnimeSlider
