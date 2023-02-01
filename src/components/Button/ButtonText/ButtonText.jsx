import './ButtonText.scss'


const ButtonText = ({ text, href, className, id }) => {
  return (
    <a href={href} className={`${className} btn-text`} id={id}>
        {text}
    </a>
  )
}

export default ButtonText
