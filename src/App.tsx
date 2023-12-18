import styles from './styles/App.module.scss'
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage"
import ConceptPage from "./components/ConceptPage"


function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Sidebar/>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ConceptPage />} />
          <Route path="/:id/:id" element={<ConceptPage />} />
        </Routes>
        </Router>

    </div>
  )
}

export default App
