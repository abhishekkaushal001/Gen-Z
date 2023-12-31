import Platform from "./platform";

export default interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}
