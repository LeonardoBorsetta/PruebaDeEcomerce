import React, { useState } from 'react'
import './galerryInDetail.css'

function GalleryInDetail({pics}) {

  const [headPhoto, setHeadPhoto] = useState(pics[0].url)
  

  return (
    <div className='gallery-container'>
      <div className='headPhoto-gallery-container'>
        <img src={headPhoto} className='headPhoto-gallery'/>
      </div>
      <div className='mini-photo-container'>
        {pics.map((pic)=>{
          return (
            <div className="each-photo-container" key={pic.id}>
              <img src={pic.url} className='mini-photo' onClick={()=>{setHeadPhoto(pic.url)}}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GalleryInDetail