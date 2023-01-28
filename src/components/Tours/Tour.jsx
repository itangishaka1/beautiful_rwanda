import './Tour.scss'

const Tour = ({ card_number }) => {
  return (
    <article className='row'>
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">Front side</div>
                <div className={`card__side card__side--back ${card_number}`}>Back side</div>
            </div>
        </div>
        <div className="col-1-of-3">col 1 of 3</div>
        <div className="col-1-of-3">col 1 of 3</div>
    </article>
  )
}

export default Tour