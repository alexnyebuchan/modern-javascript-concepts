import styles from '../styles/SubCategoryPage.module.scss'
import { useParams } from 'react-router-dom';
import conceptData from '../../data/concepts.json'
import { useEffect, useState } from 'react';
import ReactEmbedGist from 'react-embed-gist';

interface conceptType {
  title: string;
  category: string;
  content: string;
  gist: any;
}

const SubCategoryPage = () => {
    const {categoryId, subId} = useParams<string>()
    const [concept, setConcept] = useState<conceptType>({} as conceptType)
    const [body, setBody] = useState({__html:""})
    const [example, setExample] = useState({__html:""})

    useEffect(() => {
        if(subId){
          findConcept(subId)
        }
    }, [subId])


    function findConcept(id:string) {
        const foundConcept = conceptData.filter(concept => concept.title === id)[0]
        setConcept(foundConcept)
        splitText(foundConcept.content)
    }

    function splitText (text:string) {
      const textSplit = text.lastIndexOf('<p>')
      const mainSection = text.substring(0, textSplit)
      const exampleSection = text.substring(textSplit)
      setBody({__html:mainSection})
      setExample({__html:exampleSection})
    }
      
    
    
    
    

  return (
    <div className={styles.container}>
        <h3>{subId}</h3>
        <div className={styles.body} dangerouslySetInnerHTML={body}></div>
        {concept.gist && (
            <div className={styles.gistContainer}>
              <div className={styles.exampleP} dangerouslySetInnerHTML={example}></div>
              <ReactEmbedGist
                  gist={concept.gist}
                  contentClass={styles.gistContent}
                  titleClass={styles.gistTitle}
                  errorClass="gist__error"
                  wrapperClass={styles.gistWrap}
            />
            </div>
        )}

        <p>{categoryId} {subId}</p>
    </div>
  )
}

export default SubCategoryPage


