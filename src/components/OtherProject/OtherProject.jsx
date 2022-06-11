import React from 'react'

const OtherProject = ({ imgUrl, title, role, year, url }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='other-project'>
        <img src={imgUrl} alt={title} />
        <div className='filter'></div>

        <div className="info">
            <h2>{title}</h2>
            <h4>{year}</h4>
        </div>
        <p>{role}</p>
    </a>
  )
}

export default OtherProject