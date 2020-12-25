import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Page404 = () => {
    return (
        <div>
            <h1 className='display-1'> Page Not Found</h1>
            <p>
                Go to <Link to="/">HOME</Link>
            </p>
        </div>
    )
}

export default Page404