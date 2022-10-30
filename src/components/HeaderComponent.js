import React from 'react'
import { Link } from 'react-router-dom'


const HeaderComponents = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='#' className='navbar-brand'>Hospital Management Application</a>
                    {/* <Link to={'/patient'} className='btn btn-primary mb-2'>Patient Details</Link> */}

                   
                    
                </div>
            </nav>
            
        </header>
    </div>
  )
}

export default HeaderComponents