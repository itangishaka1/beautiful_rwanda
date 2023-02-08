import './Button.scss'


const Button = ({ className, text, id }) => {
  return (
    <a href={`#${id}`} className={`${className} btn btn--animated`}>{text}</a>
  )
}

export default Button