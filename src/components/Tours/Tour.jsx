import './Tour.scss'

const Tour = ({ card_number , heading, picture_number, heading_span, item1, item2, item3, item4, item5}) => {
  return (
    <article className='row'>
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture ${picture_number}`}>&nbsp;</div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span ${heading_span}`}>{heading}</span>    
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>{item1}</li>
                            <li>{item2}</li>
                            <li>{item3}</li>
                            <li>{item4}</li>
                            <li>{item5}</li>
                        </ul>
                    </div>
                </div>
                <div className={`card__side card__side--back ${card_number}`}>Back side</div>
            </div>
        </div>
        <div className="col-1-of-3">col 1 of 3</div>
        <div className="col-1-of-3">col 1 of 3</div>
    </article>
  )
}

export default Tour