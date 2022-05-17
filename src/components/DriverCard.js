import './DriverCard.css'
import Rating from './Rating'

const DriverCard = (props) => {

    const { name, rating, img, car } = props
    

    return (
        <div className='driverContainer'>
            <div className='driverCard'>
                <div className='driverPhoto'>
                    <img src={img} alt='driver'/>
                </div>
                <div className='driverInfo'>
                    <p className='driverName'>{name}</p>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}

export default DriverCard