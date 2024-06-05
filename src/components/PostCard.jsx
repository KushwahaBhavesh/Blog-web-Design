import React from 'react'
import post from '../utilities/post'


const PostCard = () => {
  return <>
    {post.map((item, index) => (
      <div className='post-card' key={index}>
        <div className='post-details'>
          <div className='profile-details'>
            <img src={item.url} />
            <div className='profile-name'>
              <span>{item.name}</span>
              <span>{item.id}</span>
            </div>
          </div>
          <i className='bi bi-three-dots-vertical' />
        </div>

        <div className='post-data'>
          <p>{item.post}<span>Read more</span></p>
          <div className='like-image'>
            <img src={item.image} />
            <i className='bi bi-heart' />
          </div>
        </div>
        <hr />
        <div className='post-reactions'>
          <div className='reaction'>
            <i className='bi bi-heart' /><span>9.8K</span>
          </div>
          <div className='reaction'>
            <i className='bi bi-chat' /><span>9.8K</span>
          </div>
          <div className=' reaction'>
            <i className='bi bi-share' /><span>9.8K</span>
          </div>
        </div>
      </div>
    ))}

  </>
}

export default PostCard
