import React from 'react'
import imagestore from '../utilities/ImageStore'

const imageCard = () => {
  return <>
    {imagestore.map((item, index) => (
      <div className='selling-card' key={index}>
        <img src={item.url} />
        <h4>{item.name}</h4>
        <div className='price'>
          <span>{item.price}</span>
          <div className='star'>
            <i className='bi bi-star' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
          </div>
        </div>
      </div>
    ))}
  </>
}

export default imageCard
