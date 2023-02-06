import './Form.scss'

const Form = ()=> {
    return (
        <form className='form'>
            <div className="u-margin-bottom-medium">
                <h2 className="section-heading">start booking now</h2>
            </div>
            <div className="form__group">
                <input type="text" className="form__input" placeholder='Full Name' id='name' required />
                <label htmlFor="name" className="form__label">Full Name</label>
            </div>
            <div className="form__group">
                <input type="email" className="form__input" placeholder='Email Address' id='email' required />
                <label htmlFor="email" className="form__label">Email Address</label>
            </div>
            <div className="form__group">
                <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id='small' name='size' />
                    <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-btn"></span>
                        Small tour group
                    </label>
                </div>
                <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id='large' name='size' />
                    <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-btn"></span>
                        Large tour group
                    </label>
                </div>
            </div>
            <div className="form__group button">
                <button  className='btn btn--green btn--animated'> next step &rarr;</button>
            </div>
        </form>
    )
}

export default Form