import styles from './styles/App.module.scss'
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <div className={styles.container}></div>
      <Sidebar/>
    </>
  )
}

export default App
