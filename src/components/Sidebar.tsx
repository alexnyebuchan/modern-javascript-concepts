import styles from '../styles/Sidebar.module.scss'
import { Link } from 'react-router-dom';

import categoryData from '../../data/category.json'
import conceptData from '../../data/concepts.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {useState } from 'react';


const Sidebar = () => {
    // State for pop up menus
    const [hoveredCat, setHoveredCat] = useState('')
    const [hoveredSub, setHoveredSub] = useState('')
    const [concepts, setConcepts] = useState<string[]>([])

    // Functions for handling hover state
    const handleCatHover = (title:string) => {
        setHoveredCat(title)
    } 

    const handleSubHover = (sub:string) => {
        setHoveredSub(sub)
        filterConcepts(sub)
    } 

    const filterConcepts = (sub:string) => {
            const filteredTitles = conceptData
            .filter(concept => concept.category === sub)
            .map(concept => concept.title)
            setConcepts(filteredTitles)
    }

    return (
        <div className={styles.container} >
            <h1>Modern JavaScript Concepts</h1>
            {categoryData.map((cat) => (
                <div key={cat.title} >
                    <Link to={`/${cat.title}`} 
                    onMouseEnter={() => handleCatHover(cat.title)} 
                >
                        <span>{cat.title}</span><FontAwesomeIcon icon={faChevronRight} /></Link>
                    {hoveredCat === cat.title && (
                        <ul className={styles.subMenu} onMouseLeave={() => handleCatHover('')}>
                        {cat.subs.map((sub, index) => (
                            <li key={index}>
                                <Link to={`/${cat.title}/${sub}`} onMouseEnter={() => handleSubHover(sub)}>{sub}<FontAwesomeIcon icon={faChevronRight} /></Link>
                                {hoveredSub === sub && (
                                    <ul className={styles.conceptMenu} onMouseLeave={() => handleSubHover('')}>
                                    {concepts.map((title) => (
                                        <li key={index}>
                                            <Link to={`/${cat.title}/${sub}/${title}`} >{title}</Link>
                                        </li>
                                    ))}
                                    </ul>
                                )}
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