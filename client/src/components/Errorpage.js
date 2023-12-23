import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
        <div id="notfound" className='container'>
            <div className="notfound text-center">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p className="md-5">
                    The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                </p>
                <Link to='/'>Back to Home Page</Link>
            </div>
        </div>
    </>
  )
}

export default Errorpage