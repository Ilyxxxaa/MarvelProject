import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class CharList extends Component {

    state = {
        chars: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 197,
        charEnded: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading()
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (chars) => {
        let ended = false;
        if (chars.length < 9) {
            ended = true;
        }

        this.setState((state) => ({
            chars: [...state.chars, ...chars],
            loading: false,
            error: false,
            newItemLoading: false,
            offset: state.offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }


    renderItems = (chars) => {
        const items = chars.map((item, index) => {
            return (
                <CharComponent src={item.thumbnail}
                    name={item.name}
                    key={item.id}
                    id={item.id}
                    onCharSelected={this.props.onCharSelected}
                    index={index} />
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }




    render() {
        const { chars, loading, error, newItemLoading, offset, charEnded } = this.state;
        const items = this.renderItems(chars);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;
        return (
            <div className="char__list" >
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div >
        )
    }

}



const CharComponent = (props) => {
    const { src, name, id, onCharSelected } = props;

    let imgStyle = { 'objectFit': 'cover' };
    if (src === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'unset' };
    }

    return (
        <li className="char__item" key={id} onClick={() => {
            onCharSelected(id);
        }}>
            <img src={src} alt={name} style={imgStyle} />
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;