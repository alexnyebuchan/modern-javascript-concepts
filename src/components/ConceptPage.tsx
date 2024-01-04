import { useEffect, useState } from 'react';

import styles from '../styles/ConceptPage.module.scss'

import { useParams } from 'react-router-dom';

import conceptData from '../../data/concepts.json'

import ReactEmbedGist from 'react-embed-gist';


const ConceptPage = () => {
    const {categoryId, subId, conceptId} = useParams()
    const [concept, setConcept] = useState({})

    useEffect(() => {
        findConcept(conceptId)
    }, [conceptId])


    function findConcept(id:string) {
        const foundConcept = conceptData.filter(concept => concept.title === id)[0]
        setConcept(foundConcept)
    }

    const body = {__html:concept.content};


  return (
    <div className={styles.container}>
        <h3>{subId}: <span>{conceptId}</span></h3>
        <div className={styles.body} dangerouslySetInnerHTML={body}></div>
        {concept.gist && (
            <ReactEmbedGist
            gist={concept.gist}
            contentClass={styles.gistContent}
            titleClass={styles.gistTitle}
            errorClass="gist__error"
            />
        )}
        <p>{categoryId} {subId}: {conceptId}</p>
    </div>
  )
}

export default ConceptPage