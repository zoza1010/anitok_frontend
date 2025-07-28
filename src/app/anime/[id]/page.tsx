import { fetchAnimeInfo } from "@/entities/anime/api/AnimeApi";
import AnimeInfoSection from "@/widgets/AnimeInfoSection/ui/AnimeInfoSection";



export default async function Page({params,}: {params: Promise<{ id: string }>}) 
{
  const { id } = await params
   const anime = await fetchAnimeInfo(id);
  return (
    <div>
        Аниме {anime.russian}, с айди {anime.id} <img src={anime.imageOriginal ? anime.imageOriginal : ''} alt="123" />
        <AnimeInfoSection/>
    </div>
  )
}