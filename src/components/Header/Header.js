const Header = (props) => {
    const { title } = props;

    return (
        <>
            <h1 className='font-semibold text-2xl text-center my-10'>{title}</h1>
        </>
    )
}

export default Header;