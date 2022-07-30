import { useState } from 'react';
import Button from '../../components/UI/Button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const incrementHandler = () => {
		setCounter((prevState) => prevState + 1);
	};

	const decremetnHandler = () => {
		setCounter((prevState) => prevState - 1);
	};

	return (
		<div className='flex flex-col justify- items-center'>
			<p className='my-10 font-semibold text-2xl'>{counter}</p>

			<div className='flex justify-center'>
				<Button
					type='button'
					className='border-2 rounded-xl border-green-500 py-1 px-2 hover:bg-green-500 hover:text-white mr-5'
					onClick={incrementHandler}
				>
					Increment
				</Button>

				<Button
					type='button'
					className='border-2 rounded-xl border-red-500 py-1 px-2 hover:bg-red-500 hover:text-white'
					onClick={decremetnHandler}
				>
					Decrement
				</Button>
			</div>
		</div>
	);
};

export default Counter;
