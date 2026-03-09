import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Profile() {



    const [profile, setprofile] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/profile')
            .then(data => { setprofile(data.data); console.log(data); })
            .catch(err => console.log(err))

    }, [])

    const [editmode, seteditmode] = useState(false);
    function HandleOnChange(e) {
        setprofile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleclick() {
        seteditmode(true);
    }

    const handleupdate = async () => {
        axios.put('http://localhost:3001/profile', profile)
            .then(console.log("updated")).catch(err => console.log(err));
    }

    return (
        <div>
            {profile ? (
                <div className="container mt-5">
                    <div className="row align-items-center">

                        <div className="col-md-4 text-center">
                            <img
                                className="profile-dp rounded-circle img-fluid"
                                src={profile.profile_pic}
                                alt="profile"
                            />
                        </div>

                        <div className="col-md-8">

                            <h4 className="mb-3">{profile.username}</h4>

                            <div className="d-flex gap-5 mb-3">
                                <div>
                                    <span className="fw-bold fs-5">{profile.posts}</span> Posts
                                </div>
                                <div>
                                    <span className="fw-bold fs-5">{profile.followers}</span> Followers
                                </div>
                                <div>
                                    <span className="fw-bold fs-5">{profile.following}</span> Following
                                </div>
                            </div>

                            <p className="mb-0">{profile.bio}</p>
                            {
                                editmode && (
                                    <div className='mt-3'>
                                        <input type="text" name='username' value={profile.username} className='form-control my-4' onChange={HandleOnChange} />
                                        <input type="text" name="profile_pic" value={profile.profile_pic} className='form-control' onChange={HandleOnChange} />
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <div className='d-flex gap-3 pp'>
                        <h5 className='pfp' onClick={handleclick} >Edit profile</h5>
                        <h5 className='pfp'>View Archive</h5>
                        <button className='btn bg-info text-light' onClick={handleupdate}>Update</button>
                    </div>
                </div>) : <p>Loading...</p>}


        </div>
    )
}

export default Profile