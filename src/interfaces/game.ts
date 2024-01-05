import Genres from "./genres";
import Platform from "./platform";
import Publisher from "./pulisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genres[];
  rating_top: number;
  description_raw: string;
  publishers: Publisher[];
}
