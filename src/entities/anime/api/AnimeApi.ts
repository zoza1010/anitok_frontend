import type { AnimeInfo } from '@/types/AnimeInfoType';


export async function fetchAnimeInfo(id: string): Promise<AnimeInfo> {
  try {
    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();

    const animeInfo: AnimeInfo = {
      id: data.id,
      russian: data.russian,
      imageOriginal: data.image?.original
        ? `https://shikimori.one${data.image.original}`
        : null,
      score: data.score ?? null,
      status: data.status,
      episodes: data.episodes ?? null,
      episodes_aired: data.episodes_aired ?? null,
      duration: data.duration ?? null,
      description_html: data.description_html,
      rates_scores_stats: data.rates_scores_stats,
      genres: data.genres,
    };

    return animeInfo;
  } catch (error) {
    console.error('Ошибка при fetch: ', error);
    throw error;
  }
}
