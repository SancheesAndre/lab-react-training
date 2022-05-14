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

    return (
        <div style={{ backgroundColor:bgColor, color:color}}>
            <p>Text</p>
        </div>
    )
}

export default CreditCard