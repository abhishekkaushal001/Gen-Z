import Genres from "../interfaces/genres";
import useData from "./useData";

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
