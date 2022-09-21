import loader from '../../resources/img/loader.gif'
import './spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner__container">
            <img src={loader} alt="loader" />
        </div>
    )
}


export default Spinner;