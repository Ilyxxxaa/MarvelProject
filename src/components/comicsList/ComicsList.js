import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useMemo, useState } from 'react';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';






const ComicsList = () => {
    const { getComics, error, loading, clearError } = useMarvelService();

    const [comics, setComics] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(12);
    const [comicsEnded, setComicsEnded] = useState(false);

    useEffect(() => {
        onRequest(offset, true)
    }, []);

    const onRequest = (offset, initial) => {
        clearError();
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getComics(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (comics) => {
        let ended = false;
        if (comics.length < 8) {
            ended = true;
        }

        setComics(comicsOld => [...comicsOld, ...comics]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setComicsEnded(charEnded => ended);
    }

    const renderComics = (arr) => {
        const items = arr.map((item, index) => {
            return (
                < li className="comics__item" key={index}>
                    <a href={item.url}>
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img" />
                        <div className="comics__item-name">{item.name}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a></li >
            )
        })
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const spinner = loading ? <Spinner /> : null
    const comicsItems = renderComics(comics);
    const errorMessage = error ? <ErrorMessage /> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {comicsItems}

            <button onClick={() => onRequest(offset)}
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;