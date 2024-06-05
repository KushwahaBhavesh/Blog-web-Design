import React from 'react'
import Artist from '../utilities/ArtistData'


const ProfileCard = () => {
  return <>
    {Artist.map((item, index) => (
      <div className='card' key={index}>
        <img src={item.image} className='images' />
        <div className='image-overlay'>
          <img src={item.url} alt='#' />
          <div className='creator-info'>
            <span>{item.name}</span>
            <p>{item.id}</p>
          </div>
        </div>
      </div>
    ))}

  </>
}

export default ProfileCard
