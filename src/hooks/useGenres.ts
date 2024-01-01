import Genres from "../interfaces/genres";
import useDataQuery from "./useDataQuery";

const useGenres = () => useDataQuery<Genres>("/genres");

export default useGenres;
