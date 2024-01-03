import styles from '../styles/SubCategoryPage.module.scss'
import { useParams } from 'react-router-dom';
import categoryData from '../../data/category.json'
import conceptData from '../../data/concepts.json'
import { useEffect, useState } from 'react';


const SubCategoryPage = () => {
    const {categoryId, subId} = useParams()
    const [concept, setConcept] = useState({})

    const cat = categoryData.filter(cat => cat.title === categoryId )[0];
    const {title, icon} = cat 


    useEffect(() => {
        findConcept(subId)
    }, [subId])


    function findConcept(id:string) {
        const foundConcept = conceptData.filter(concept => concept.title === id)[0]
        setConcept(foundConcept)
    }


  return (
    <div className={styles.container}>
        <h1>{title} <img className={styles.icon} src={icon} alt="" /></h1>
        <h3>{subId}</h3>
        <p>{concept.content}</p>
    </div>
  )
}

export default SubCategoryPage