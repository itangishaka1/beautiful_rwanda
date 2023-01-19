import './Button.scss'


const Button = ({ className, text }) => {
  return (
    <a href='#top' className={`${className} btn btn-animated`}>{text}</a>
  )
}

export default Button