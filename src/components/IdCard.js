import './IdCard.css'

const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <div className="card">
            <div>
                <img src={picture} alt="person" />
            </div>
            <div>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>First name:</b> {firstName}</p>
                <p><b>gender:</b> {gender}</p>
                <p><b>height:</b> {height}</p>
                <p><b>birth:</b> {birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard