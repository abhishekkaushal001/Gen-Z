import Game from "./game";

export default interface GamesApiResponse {
    count: number;
    results: Game[];
  };