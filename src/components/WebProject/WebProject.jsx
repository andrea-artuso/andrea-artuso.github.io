import './WebProject.css'
import { GithubFill } from 'akar-icons';

const WebProject = ({ imgUrl, title, year, description, links }) => {
  return (
    <div className='web-project'>
        <div className='img-container'>
            <img src={imgUrl} alt={title + ' cover image'} className='project-image' />
            <div className='filter'></div>
        </div>

        <div className='info'>
            <div className='inline-info'>
                <h2>{title}</h2>
                <h3>{year}</h3>
            </div>
            <br />
            <p>{description}</p>
            <div className='inline-links'>
                {links.length === 2 ? 
                    <>
                        <a href={links[0]} className='first-button'>Visit website</a>
                        <a href={links[1]} className='secondary-button'> <GithubFill strokeWidth={2} size={20} /> </a>
                    </>
                    : <a href={links[0]} className='first-button'>Visit website</a>
                }
            </div>
        </div>
    </div>
  )
}

export default WebProject