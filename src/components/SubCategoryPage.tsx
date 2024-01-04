import styles from '../styles/SubCategoryPage.module.scss'
import { useParams } from 'react-router-dom';
import categoryData from '../../data/category.json'
import conceptData from '../../data/concepts.json'
import { useEffect, useState } from 'react';


const SubCategoryPage = () => {
    const {categoryId, subId} = useParams()
    const [concept, setConcept] = useState({})



    useEffect(() => {
        findConcept(subId)
    }, [subId])


    function findConcept(id:string) {
        const foundConcept = conceptData.filter(concept => concept.title === id)[0]
        setConcept(foundConcept)
    }


  return (
    <div className={styles.container}>
        <h3>{subId}</h3>
        <p>{concept.content}</p>
    </div>
  )
}

export default SubCategoryPage