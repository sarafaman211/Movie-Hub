import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState(0)

    const history = useHistory()

    const handleClick = ()=>{

        if(value === 0)history.push('/')

       window.scroll(0,0)
    }


    useEffect(() => {
        handleClick()
    }, [value])
    return (
        <div>
           <h1 className='mainHeading' onClick={handleClick}>Entertianment Hub <i className="fas fa-film text-primary"></i></h1> 
        </div>
    )
}

export default Header
