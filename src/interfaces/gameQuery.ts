import Genres from "./genres";
import ParentPlatforms from "./parentPlatforms";

export default interface GameQuery {
  genre?: Genres;
  platform?: ParentPlatforms;
  sort?: string;
  search?: string;
}
