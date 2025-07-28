//ANIME INFO


export interface Genre {
  id: number;
  name: string;
  name_uk: string;
}

export interface Theme {
  id: number;
  name: string;
  name_uk: string;
}

//****111111111111 */

export interface Type {
  id: number;
  name: string;
  name_uk: string;
}

export interface Status {
  id: number;
  name: string;
  name_uk: string;
}
export interface AgeRating {
  id: number;
  name: string;
  name_uk: string;
}

export interface Source {
  id: number;
  name: string;
  name_uk: string;
}

//SLIDER CARD



export interface SlideCardType {
  id: number | string;           // у тебя id — строка в данных, поэтому можно string
  russian: string;
  english: string | null;
  description: string | null;

  poster: PosterUrl;

  score: number;                 // score — число, а не строка
  scoresStats: ScoreStat[];     // массив с деталями голосов
  totalVotes: number;
}

export interface PosterUrl {
  originalUrl?: string;
}

export interface ScoreStat {
  count: number;
}
