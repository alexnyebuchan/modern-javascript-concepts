import styles from '../styles/SubCategoryPage.module.scss'
import { useParams } from 'react-router-dom';
import categoryData from '../../data/category.json'
import conceptData from '../../data/concepts.json'
import { useEffect, useState } from 'react';
import ReactEmbedGist from 'react-embed-gist';



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

    const body = {__html:concept.content};

  return (
    <div className={styles.container}>
        <h3>{subId}</h3>
        <div className={styles.body} dangerouslySetInnerHTML={body}></div>
        {concept.gist && (
            <ReactEmbedGist
            gist={concept.gist}
            contentClass={styles.gistContent}
            titleClass={styles.gistTitle}
            errorClass="gist__error"
            />
        )}
        <p>{categoryId} {subId}</p>
    </div>
  )
}

export default SubCategoryPage