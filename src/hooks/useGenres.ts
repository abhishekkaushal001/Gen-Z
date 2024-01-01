import genres from "../data/genres";
import Genres from "../interfaces/genres";
import useDataQueryExt from "./useDataQueryExt";

const useGenres = () => useDataQueryExt<Genres>("/genres", genres);

export default useGenres;
