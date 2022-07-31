const Header = (props) => {
    const { title } = props;

    return (
        <>
            <h1 data-testid='header-element' className='font-semibold text-2xl text-center my-10' title='header'>
                {title}
            </h1>
        </>
    )
}

export default Header;