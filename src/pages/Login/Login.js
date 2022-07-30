import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { userActions } from '../../store/user-slice';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.length === 0 || password.length === 0) return alert('Input fields can not be left blank!');

        dispatch(userActions.loginHandler());
        navigate('/', {replace: true});
    }

    const changeNameHandler = (e) => {
        setName(e.target.value)
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    
    return (
        <div className='flex justify-center items-center border-t'>
            <div className='mt-10 w-1/4'>
                <form onSubmit={submitHandler}>
                    <Input 
                        className='mt-1 mb-2 border border-red-700 rounded-xl p-1 pr-4 pl-8'
                        labelFor='name'
                        labelValue='Name'
                        inputType='text'
                        placeholder='Name'
                        value={name}
                        onChange={changeNameHandler}
                    />

                    <Input  
                        className='mt-1 mb-2 border border-red-700 rounded-xl p-1 pr-4 pl-8'
                        labelFor='password'
                        labelValue='Password'
                        inputType='password'
                        placeholder='Password'
                        value={password}
                        onChange={changePasswordHandler}
                    />

                    <Button
                        type='submit'
                        className='border-2 rounded-xl border-amber-500 py-1 px-2 hover:bg-amber-500 hover:text-white w-full'
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login;