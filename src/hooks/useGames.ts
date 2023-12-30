import Game from "../interfaces/game";
import useData from "./useData";

const useGames = () => useData<Game>("/games");

export default useGames;
