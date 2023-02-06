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
        </form>
    )
}

export default Form