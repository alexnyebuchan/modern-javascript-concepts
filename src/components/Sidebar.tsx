import styles from '../styles/Sidebar.module.scss'
import { Link } from 'react-router-dom';

import data from '../../data/category.json'

const Sidebar = () => {
    console.log(data)

  return (
    <div className={styles.container}>
        <h1>Modern JavaScript Concepts</h1>
        {data.map((cat) => (
            <Link key={cat.title} to={`/${cat.title}`}>{cat.title}</Link>
        ))}
    </div>
  )
}

export default Sidebar