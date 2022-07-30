const Button = (props) => {
    const { type, className, onClick } = props;

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;