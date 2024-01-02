import styles from '../styles/Sidebar.module.scss'
import { Link } from 'react-router-dom';

import data from '../../data/category.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const Sidebar = () => {

const [hoveredLink, setHoveredLink] = useState(null)

   const handleHover = (title) => {
    setHoveredLink(title)
   } 

  return (
    <div className={styles.container} >
        <h1>Modern JavaScript Concepts</h1>
        {data.map((cat) => (
            <div key={cat.title} >
                <Link to={`/${cat.title}`} 
                onMouseEnter={() => handleHover(cat.title)} 
               >
                    <span>{cat.title}</span><FontAwesomeIcon icon={faChevronRight} /></Link>
                {hoveredLink === cat.title && (
                    <ul className={styles.subMenu} onMouseLeave={() => handleHover(null)}>
                    {cat.subs.map((sub, index) => (
                        <li key={index}>
                            <Link to={`/${cat.title}/${sub}`}>{sub}<FontAwesomeIcon icon={faChevronRight} /></Link>
                        </li>
                    ))}
                </ul>
                )}
            </div>
        ))}
    </div>
  )
}

export default Sidebar