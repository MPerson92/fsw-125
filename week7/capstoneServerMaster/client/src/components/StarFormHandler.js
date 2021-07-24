import { useState } from 'react';

function StarFormHandler({submit, btnText, firstName, lastName, doesExist, starNumber, type, _id}) {
    const initialInputs = { firstName: firstName || '', lastName: lastName || '', doesExist: doesExist || '', starNumber: starNumber || '', type: type || '' };
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder='First Name' />
            <input
                type='text'
                name='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder='Last Name' />
            <input
                type='text'
                name='doesExist'
                value={inputs.doesExist}
                onChange={handleChange}
                placeholder='This star exists' />
            <input
                type='text'
                name='starNumber'
                value={inputs.starNumber}
                onChange={handleChange}
                placeholder='Star Number' />
            <input
                type='text'
                name='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='Type' />

                <button>{btnText}</button>
        </form>
    )
}

export default StarFormHandler;