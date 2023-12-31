import ParentPlatforms from "../interfaces/parentPlatforms";
import useData from "./useData";

const usePlatforms = () => useData<ParentPlatforms>("/platforms/lists/parents");

export default usePlatforms;
