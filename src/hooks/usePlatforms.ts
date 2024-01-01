import platforms from "../data/platforms";
import ParentPlatforms from "../interfaces/parentPlatforms";
import useDataQueryExt from "./useDataQueryExt";

const usePlatforms = () =>
  useDataQueryExt<ParentPlatforms>("/platforms/lists/parents", platforms);

export default usePlatforms;
