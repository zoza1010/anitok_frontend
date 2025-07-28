
export interface RateScoreStat {
  name: number;   
  value: number;  
}

export interface Genre {
  id: number;
  name: string;
  russian: string;
}

export interface AnimeInfo {
  id: number;
  russian: string;
  imageOriginal: string | null;
  score: number | null;          
  status: string;
  episodes: number | null;       
  episodes_aired: number | null; 
  duration: number | null;       
  description_html: string;
  rates_scores_stats: RateScoreStat[];
  genres: Genre[];
}
