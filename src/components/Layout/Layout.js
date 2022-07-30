import Navigation from '../UI/Navigation/Navigation';
import Header from '../Header/Header';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = (props) => {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        location.pathname.includes('login') ? setTitle('Login') : setTitle('Counter');
    }, [location])

    return (
        <>
            <Navigation/>
            <Header title={title}/>
            {props.children}
        </>
    )
}

export default Layout