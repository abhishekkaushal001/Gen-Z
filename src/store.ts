import { create } from "zustand";
import Genres from "./interfaces/genres";
import ParentPlatforms from "./interfaces/parentPlatforms";

interface GameQuery {
  genre?: Genres;
  platforms?: ParentPlatforms;
  sort?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genres) => void;
  setPlatform: (platform: ParentPlatforms) => void;
  setSort: (sort: string) => void;
  setSearch: (search: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre: genre } })),
  setPlatform: (platform) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platforms: platform },
    })),
  setSort: (sort) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sort: sort } })),
  setSearch: (search) => set(() => ({ gameQuery: { search: search } })),
}));

export default useGameQueryStore;
