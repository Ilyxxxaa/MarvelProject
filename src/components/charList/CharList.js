import './charList.scss';
import { useState, useEffect, useRef } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const CharList = (props) => {


    const [chars, setChars] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(197);
    const [charEnded, setCharEnded] = useState(false);
    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (chars) => {
        let ended = false;
        if (chars.length < 9) {
            ended = true;
        }

        setChars(charsOLd => [...charsOLd, ...chars]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended)
    }

    const renderItems = (chars) => {
        const items = chars.map((item, index) => {
            return (
                <CharComponent src={item.thumbnail}
                    name={item.name}
                    key={item.id}
                    id={item.id}
                    onCharSelected={props.onCharSelected}
                    index={index} />
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(chars);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list" >
            {errorMessage}
            {spinner}
            {items}
            <button className="button button__main button__long"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div >
    )
}




let itemRefs = [];
const CharComponent = (props) => {
    const { src, name, id, onCharSelected, index } = props;

    itemRefs = useRef([]);

    const focusOnItem = (id) => {
        console.log(itemRefs)
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    let imgStyle = { 'objectFit': 'cover' };
    if (src === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'unset' };
    }

    return (
        <li onClick={() => {
            onCharSelected(id);
            focusOnItem(index);
        }}
            className="char__item"
            key={id}
            ref={el => itemRefs.current[index] = el}>

            <img src={src} alt={name} style={imgStyle} />
            <div className="char__name">{name}</div>
        </li >
    )
}

export default CharList;