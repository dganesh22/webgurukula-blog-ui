import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
           <Link className="logo" to={`/`}>
              <img src="logo.svg" alt="" />
           </Link>
           <div className="links">
              <Link className="link" to={`/?cat=html`}>
                  <h6>HTML</h6>
              </Link>
              <Link className="link" to={`/?cat=css`}>
                  <h6>CSS</h6>
              </Link>
              <Link className="link" to={`/?cat=javascript`}>
                  <h6>JavaScript</h6>
              </Link>
              <Link className="link" to={`/?cat=react`}>
                  <h6>React</h6>
              </Link>
              <Link className="link" to={`/?cat=bootstrap`}>
                  <h6>Bootstrap</h6>
              </Link>
              <span>Ganesh</span>
              <span>Logout</span>
              <span className="write">
                  <Link className='link' to={`/write`}>Write</Link>
              </span>
           </div>
        </div>
    </div>
  )
}

export default Navbar
