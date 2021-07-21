import { useState } from 'react'
import BountyFormHandler from "./BountyFormHandler";


function Bounty({deleteBounty, editBounty, firstName, lastName, living, bountyAmount, type, _id}){
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            {   !editToggle ?
                <>
                    <h1>First Name: {firstName}</h1>
                    <h1>Last Name: {lastName}</h1>
                    <p>Living: {living}</p>
                    <p>Bounty Amount: {bountyAmount}</p>
                    <p>Type: {type}</p>

                    <button 
                        onClick={() => deleteBounty(_id)} 
                        className='delete-btn'>
                        Delete
                    </button>

                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                        className='edit-btn'>
                        Edit
                    </button>
                </>
                :
                <>
                    <BountyFormHandler 
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bountyAmount={bountyAmount}
                        type={type}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={editBounty} />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close   
                    </button>
                </>
            }
        </div>
    )
}

export default Bounty;