import Layout from './components/Layout/Layout';
import Counter from './pages/Counter/Counter';
import Login from './pages/Login/Login';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
    const user = useSelector(state => state.user);

    return (
        <Layout>
            <Routes>
                <Route path='/' element={user.isLoggedIn ? <Counter /> : <Navigate replace to='/login' />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </Layout>
    )
}

export default App;