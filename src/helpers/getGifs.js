
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=RyEwHFNpQla38ruFFrm5UWdWUOB0A4Z0`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map (img => {
        return {
            id : img.id, 
            title : img.title, 
            url : img.images?.original.url
        }
    })

    return gifs;
   
}