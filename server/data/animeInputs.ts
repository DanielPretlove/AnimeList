import { Anime } from "../types";

const animes: Anime[] = [];


export const AddAnime = (newAnime: Anime) => {
    animes.push(newAnime)
    console.log(newAnime)
    console.log(animes)
}
