import { AddAnime } from "../data/animeInputs";
import { Handler } from "../types";

export const anime: Handler = (req, res) => {
    const { title, episode, status, rating, synopsis, type } = req.body;

    AddAnime({title, episode, status, rating, synopsis, type})
    res.status(201).send("Anime Created")
}