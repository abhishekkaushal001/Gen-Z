import imagePlaceHolder from "../assets/No-Image-Placeholder.svg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return imagePlaceHolder;

  const startIndex = url.indexOf("media/");
  const restUrl = url.indexOf("games/");
  const final =
    url.slice(0, startIndex) + "media/crop/600/400/" + url.slice(restUrl);
  return final;
};

export default getCroppedImageUrl;
