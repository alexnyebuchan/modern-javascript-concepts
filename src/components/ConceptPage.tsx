import styles from '../styles/ConceptPage.module.scss'
import {useParams } from 'react-router-dom';

import data from '../../data/category.json'


const ConceptPage = () => {
    const params = useParams()
    const cat = data.filter(cat => cat.title === params.id );
    const { title, subs, icon } = cat[0];

  return (
    <div className={styles.container}>
        <h1>{title} <img className={styles.icon} src={icon} alt="" /></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam corrupti. Eos similique dolorem qui. Ipsum, soluta maiores optio eaque sed perspiciatis, iste consectetur omnis, aspernatur tenetur dolor fuga officia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam corrupti. Eos similique dolorem qui. Ipsum, soluta maiores optio eaque sed perspiciatis, iste consectetur omnis, aspernatur tenetur dolor fuga officia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam corrupti. Eos similique dolorem qui. Ipsum, soluta maiores optio eaque sed perspiciatis, iste consectetur omnis, aspernatur tenetur dolor fuga officia.</p>
    </div>
  )
}

export default ConceptPage