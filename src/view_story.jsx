import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
function View_story() {

  const { id, tot } = useParams();

  const [story, setstory] = useState(null);

  const navigate = useNavigate();

  const currid = Number(id);
  const currtot = Number(tot);
  useEffect(() => {
    fetch(`http://localhost:3001/stories/${id}`)
      .then(data => data.json())
      .then(data => setstory(data))
      .catch(err => console.log(err))

    if (currid > currtot || currid < 1) {
      navigate('/')
    }
  }, [currid, currtot, navigate]
  );


  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      {
        story ? <div className="position-relative story-frame">

          <div className="story-header d-flex align-items-center">
            <img
              src={story.profile_pic}
              className="story-pfp"
              alt="profile"
            />
            <span className="fw-semibold">{story.username}</span>
          </div>

          <Link to={`/stories/${Number(id) - 1}/${tot}`} className="story-arrow left-arrow"><i className="bi bi-arrow-left-circle-fill"></i></Link>
          <img className='vh-100 story-img' src={story.story_image} />
          <Link className="story-arrow right-arrow" to={`/stories/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div> : <p>loading...</p>
      }
    </div>
  )
}

export default View_story