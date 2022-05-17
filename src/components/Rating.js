import './Rating.css'

const Rating = (props) => {

    const rating = Math.ceil(props.children)

    return (
        <div>
            {rating === 0 && <p className="stars">☆☆☆☆☆</p>}
            {rating === 1 && <p className="stars">★☆☆☆☆</p>}
            {rating === 2 && <p className="stars">★★☆☆☆</p>}
            {rating === 3 && <p className="stars">★★★☆☆</p>}
            {rating === 4 && <p className="stars">★★★★☆</p>}
            {rating === 5 && <p className="stars">★★★★★</p>}
        </div>
    )
}

export default Rating