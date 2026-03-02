import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/posts').
      then((data) => data.json()).
      then((data => setposts(data)))
      .catch((err) => console.log(err))
  }, []);
  return (
    <div className='d-flex justify-content-center'>
      {
        posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <div className='d-flex'>
                  <img className=" dp rounded-circle" src={post.user.profile_pic} />
                  <h5 className="name">{post.user.username}</h5>
                </div>
                <img className="post" src={post.image} />
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div>
                  <b className='likes'>{post.likes} likes</b>
                </div>
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )
      }
    </div>
  )
}

export default Posts