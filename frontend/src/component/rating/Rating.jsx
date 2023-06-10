import "./rating.css";

const Rating = ({rating , reviews}) => {
  return (
    <div className="rating-wrabber">
      <b className="rating">
           {rating} <i className="bi bi-star-fill"></i>
      </b>
      <span>
        {reviews} تقيمات
      </span>
    </div>
  )
}

export default Rating;