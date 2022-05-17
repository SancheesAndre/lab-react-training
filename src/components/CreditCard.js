import './CreditCard.css'
import visa from '../assets/images/visa.png';
import mastercard from "../assets/images/master-card.svg"

const CreditCard = (props) => {

    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props

    const cardNumber = number
    const showLastFourDig = cardNumber.substr(cardNumber.length - 4)

    const expiredYear = expirationYear.toString()
    const minimizedExpiredYear = expiredYear.substr(expiredYear.length - 2)

    return (
        <div className='creditCardContainer' style={{ backgroundColor: bgColor, color: color }}>
            <div className="cardType">
                {type === "Master Card" && <img src={mastercard} alt="mastercardLogo" />}
                {type === "Visa" && <img src={visa} alt="visaLogo" />}
            </div>
            <div className="number"><b>•••• •••• •••• {showLastFourDig}</b></div>
            <div className="expireDate">
                {expirationMonth < 10 && <span>Expires 0{expirationMonth}/{minimizedExpiredYear}</span>}
                {expirationMonth >= 10 && <span>Expires {expirationMonth}/{minimizedExpiredYear}</span>}
                <span className="bankName">{bank}</span>
            </div>
            <div className="owner">{owner}</div>
        </div>
    )
}

export default CreditCard

