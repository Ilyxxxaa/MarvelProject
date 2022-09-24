import './charList.scss';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const CharList = (props) => {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(197);
    const [charEnded, setCharEnded] = useState(false);

    const [activeElement, setActiveElement] = useState(null);

    const marvelService = useMemo(() => new MarvelService(), []);


    useEffect(() => {
        onRequest();
    }, [])

    const onCharListLoading = useCallback(() => {
        setNewItemLoading(true)
    }, [])

    const onRequest = useCallback((offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }, [onCharListLoading, marvelService])

    const onCharListLoaded = (chars) => {
        let ended = false;
        if (chars.length < 9) {
            ended = true;
        }

        setChars(charsOLd => [...charsOLd, ...chars]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended)
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const renderItems = (chars) => {
        const items = chars.map((item, index) => {
            return (
                <CharComponent src={item.thumbnail}
                    name={item.name}
                    key={item.id}
                    id={item.id}
                    onCharSelected={props.onCharSelected}
                    index={index}
                    activeElement={activeElement}
                    setActiveElement={setActiveElement}
                />
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    const onClickHandler = useCallback(() => {
        onRequest(offset);
    }, [onRequest, offset]);
 
    const items = renderItems(chars);
    const content = !(loading || error) && items;

    return (
        <div className="char__list" >
            {error && <ErrorMessage />}
            {loading && <Spinner />}
            {content}
            <button className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={onClickHandler}>
                <div className="inner">load more</div>
            </button>
        </div >
    )
}





const CharComponent = ({
    src,
    name,
    id,
    onCharSelected,
    activeElement,
    setActiveElement
}) => {

    const ref = useRef();
    const onClick = useCallback(() => {
        onCharSelected(id);
        ref.current.focus();
        setActiveElement(id);
    }, [id, onCharSelected, setActiveElement])

    let imgStyle = { 'objectFit': 'cover' };
    if (src === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'unset' };
    }

    return (
        <li onClick={onClick}
            className={`char__item ${activeElement === id && 'char__item_selected'}`}
            key={id}
            ref={ref}>

            <img src={src} alt={name} style={imgStyle} />
            <div className="char__name">{name}</div>
        </li >
    )
}

export default CharList;