import './Button.scss';

const Button = ({children, onClick}) => {
    return (
        <div onClick={onClick} className="ButtonWrapper" >
            {children}
        </div>
    )
}

export default Button
