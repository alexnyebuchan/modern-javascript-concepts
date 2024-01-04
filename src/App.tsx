import styles from './styles/App.module.scss'
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage"
import MainCategoryPage from "./components/MainCategoryPage"
import SubCategoryPage from './components/SubCategoryPage';
import ConceptPage from './components/ConceptPage';
import Nav from './components/Nav';


function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Sidebar/>
        <Nav />
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryId" element={<MainCategoryPage />} />
          <Route path="/:categoryId/:subId" element={<SubCategoryPage />} />
          <Route path="/:categoryId/:subId/:conceptId" element={<ConceptPage />} />
        </Routes>
        </Router>

    </div>
  )
}

export default App
