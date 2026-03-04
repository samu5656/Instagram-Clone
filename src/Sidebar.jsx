import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const Navigate=useNavigate();
    return (
        <div className='m-3 position-fixed'>
            <div className='side d-flex flex-column gap-3'>
                <img className="logo-text" src='/OIP.webp' />
                <div><i className="bi bi-house-add-fill"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-camera-reels-fill"></i>Reels</div>
                <div><i className="bi bi-send-arrow-up"></i>Messages</div>
                <div><i className="bi bi-heart"></i>Notifications</div>
                <div><i className="bi bi-plus-lg"></i>Create</div>
                <div className='sidebar' onClick={()=>Navigate('/profile')}><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className='side position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
                <div><i className="bi bi-threads"></i>Threads</div>
                <div><i className="bi bi-justify"></i>More</div>
            </div>
        </div>

    )
}

export default Sidebar