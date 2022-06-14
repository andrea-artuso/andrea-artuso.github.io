import React from 'react'

import './OtherProject.css'

const OtherProject = ({ imgUrl, title, role, year, url }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='other-project' >
        <img src={imgUrl} alt={title} />
        <div className='filter'></div>

        <div className="info">
          <div className='info-inline'>
            <h2>{title}</h2>
            <h4>{year}</h4>
          </div>
            <p>{role}</p>
        </div>
    </a>
  )
}

export default OtherProject