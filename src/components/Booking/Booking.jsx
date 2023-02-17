import Form from '../Form/Form'
import './Booking.scss'

const Booking = () => {
  return (
    <section className='booking' id='booking'>
        <div className="row">
            <div className="book">
                <div className="book__form">
                  <Form />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Booking
