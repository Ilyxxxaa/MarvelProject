import error from "../../resources/img/error.gif";

const ErrorMessage = () => {
    return (
        <img src={error} alt="error" style={{
            display: 'block', width: 250, height: 250, margin: '0 auto', objectFit: 'contain'
        }} />
    )
}

export default ErrorMessage;