import { useState } from 'react';

function BountyFormHandler({submit, btnText, firstName, lastName, living, bountyAmount, type, _id}) {
    const initialInputs = { firstName: firstName || '', lastName: lastName || '', living: living || '', bountyAmount: bountyAmount || '', type: type || '' };
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
                name='living'
                value={inputs.living}
                onChange={handleChange}
                placeholder='Is Living' />
            <input
                type='text'
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Amount' />
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

export default BountyFormHandler;