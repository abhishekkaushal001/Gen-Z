
const getCroppedImageUrl = (url: string) => {

    // Demo URL to edit.
    //"https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"

    const startIndex = url.indexOf('media/');
    const restUrl = url.indexOf('games/');
    const final = url.slice(0, startIndex) + 'media/' + 'crop/600/400/' +url.slice(restUrl);
    return final;
};

export default getCroppedImageUrl;