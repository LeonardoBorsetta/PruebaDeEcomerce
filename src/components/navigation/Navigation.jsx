import React from 'react'
import {Link} from 'wouter'
import './navigation.css'

function Navigation() {

  const tags = ["Deportes", "Electrodomesticos", "Tecnologia","Autopartes"]

  return (
    <div className='nav-container'>
    <ul className='navigation-ul'>
      {
        tags.map((item, index)=>{
          return <Link href={`/category/${item.toLowerCase()}`} replace={true} key={index}>
            <li>{item}</li>
            </Link>
        })
      }
    </ul>
    </div>
)
}

export default Navigation