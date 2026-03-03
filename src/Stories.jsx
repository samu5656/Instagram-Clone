import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Stories() {

  const [Stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/stories')
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  }, []);

  let tot = 0;
  tot = Stories.length;

  return (
    <div className='d-flex Story'>

      {
        Stories.length > 0 ? (
          Stories.map((story) => (
            <div key={story.id} onClick={() => (navigate(`/stories/${story.id}/${tot}`))} >
              <div className='gradient'>
                <img src={story.profile_pic} className='Story-dp rounded-circle' />
              </div>
              <p className='text-truncate text-center story-name' style={{ width: "90px", marginTop: "5px" }} >{story.username}</p>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )
      }
    </div>
  )
}

export default Stories