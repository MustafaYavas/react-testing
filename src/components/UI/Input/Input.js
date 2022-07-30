const Input = (props) => {
    const { className, labelFor, labelValue, inputType, placeholder, value, onChange } = props;
    
    return (
        <div className='flex flex-col mb-5'>
            <label className='text-center font-medium' htmlFor={labelFor}>{labelValue}</label>
            <input className={className} id={labelFor} type={inputType} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}

export default Input;