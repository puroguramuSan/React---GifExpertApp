

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=jbRJvsnZrNtpMerER69i6AdJp92wNYKT&q=${ encodeURI(category) }&limit=16`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(gif => {

        return {
            id: gif.id,
            type: gif.type,
            title: gif.title,
            url: gif.images?.downsized_large.url
        };

    });


    return gifs;
}