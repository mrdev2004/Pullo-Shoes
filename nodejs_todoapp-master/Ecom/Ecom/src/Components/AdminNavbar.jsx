import React from 'react'
import "../Components/AdminNav.css"
import { useLocation, useNavigate } from 'react-router-dom'
const AdminNavbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    return (
        <div>
            <nav className="navbar">
                <h1>Pullo Shoes</h1>
                <ul>
                    <li> <a className='me-4' href="" onClick={() => { navigate('/admin/vuser') }} style={{ backgroundColor: location.pathname == "/admin/vuser" && "#ffc107" }}>View Users</a>
                    </li>
                    <li>  <a className='me-4' href="" onClick={() => { navigate('/admin/insert') }} style={{ backgroundColor: location.pathname == "/admin/insert" && "#ffc107" }}>Insert Data</a>
                    </li>
                    <li><a className='me-4' href="" onClick={() => { navigate('/admin/vprod') }} style={{ backgroundColor: location.pathname == "/admin/vprod" && "#ffc107" }}>View Items</a>
                    </li>
                    <li><a href="" onClick={() => { navigate('/') }} >Log Out</a></li>
                </ul>
            </nav>

            <div className="content">
                {/* This is where your dynamic content will be rendered */}
            </div>
        </div>
    )
}

export default AdminNavbar