import { useState } from 'react'
import StarFormHandler from "./StarFormHandler";


function Star({deleteStar, editStar, firstName, lastName, doesExist, starNumber, type, _id}){
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="star">
            {   !editToggle ?
                <>
                    <h1>First Name: {firstName}</h1>
                    <h1>Last Name: {lastName}</h1>
                    <p>Does Exist: {doesExist}</p>
                    <p>Star Number: {starNumber}</p>
                    <p>Type: {type}</p>

                    <button 
                        onClick={() => deleteStar(_id)} 
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
                    <StarFormHandler 
                        firstName={firstName}
                        lastName={lastName}
                        doesExist={doesExist}
                        starNumber={starNumber}
                        type={type}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={editStar} />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close   
                    </button>
                </>
            }
        </div>
    )
}

export default Star;