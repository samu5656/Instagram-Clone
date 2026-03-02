import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [sugg, setsugg] = useState([]);
  const [profile, setprofile] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/profile').
      then((data) => data.json()).
      then((data => setprofile(data))).
      catch(err => console.log(err))
  }, []);
  useEffect(() => {
    fetch('http://localhost:3001/Suggestions').
      then((data) => data.json()).
      then((data => setsugg(data))).
      catch(err => console.log(err))
  }, []);

  return (
    <div className="suggestion">
      <div >
        {profile ?
          <div className='d-flex suggestions '>
            <img className=" dp rounded-circle" src={profile.profile_pic} />
            <h5 className="name">{profile.username}</h5>
            <small className="ms-auto text-primary follow ">Switch</small>
          </div> :
          <p>Loading...</p>}
      </div>
      <div className='d-flex head'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See all</b>
      </div>
      <div>
              {
        sugg.length > 0 ? (
          <div>
            {sugg.map((suggestion) => (
              <div key={suggestion.id}>
                <div className='d-flex'>
                  <img className=" dp rounded-circle" src={suggestion.profile_pic} />
                  <h5 className="name">{suggestion.username}</h5>
                  <p className="text-primary ms-auto follow">Follow</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )
      }
      </div>
    </div>
  )
}

export default Suggestions