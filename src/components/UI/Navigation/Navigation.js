import { userActions } from '../../../store/user-slice'

import { GrTest } from 'react-icons/gr'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch(); 

    const logoutHandler = () => {
        dispatch(userActions.logoutHandler());
    }

    return (
        <div className='flex justify-between items-center px-10 py-2 bg-amber-500'>
            <GrTest />
            {
                !user.isLoggedIn &&
                <NavLink 
                    to='/login' 
                    className={({isActive}) => isActive ? 'text-white font-medium' : 'text-black hover:text-white font-medium'}
                >
                    Login
                </NavLink>
            }

            {
                user.isLoggedIn && 
                <NavLink 
                    to='/login' 
                    className={({isActive}) => isActive ? 'text-white font-medium' : 'text-black hover:text-white font-medium'}
                    onClick={logoutHandler}
                >
                    Logout
                </NavLink>
            }
        </div>
    )
}

export default Navigation;