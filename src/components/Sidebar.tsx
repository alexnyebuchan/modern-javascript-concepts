import styles from '../styles/Sidebar.module.scss'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <h1>Modern JavaScript Concepts</h1>
        <Link to='/js'>Javascript</Link>
        <Link to='/react'>React</Link>
        <Link to='/typescript'>TypeScript</Link>
    </div>
  )
}

export default Sidebar