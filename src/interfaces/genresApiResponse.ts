import Genres from "./genres";

export default interface GenresApiResponse {
    count: number;
    results: Genres[];
};