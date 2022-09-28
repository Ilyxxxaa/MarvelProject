import { useHttp } from '../hooks/http.hook.js'


const useMarvelService = () => {
    const { loading, request, error, clearError, setLoading } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKEY = 'apikey=05cc59364374d4f0369a60eed8bf2e89';
    const _baseOffset = 197;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKEY}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKEY}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getComics = async (offset = 12) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&offset=${offset}&limit=8&${_apiKEY}`);
        return res.data.results.map(_transformComics)
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            price: comics.prices[0].price,
            url: comics.urls[0].url,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
        }
    }

    return { loading, error, getAllCharacters, getCharacter, setLoading, clearError, getComics }
}

export default useMarvelService;