import { Link } from 'react-router-dom';
import styles from './BirdList.module.css';

const BirdList = (props) => {
    return (
        <main className={styles.container}>
           {props.birds.map((bird) => (
             <Link key={bird._id} to={`/birds/${bird._id}`}>
                <article>
                 <header>
                     <h2>{bird.name}</h2>
                     <p>
                        {bird.author.username} posted on 
                        {new Date(bird.createdAt).toLocaleDateString()}
                     </p>
                 </header>
                 <p>{bird.text}</p>
              </article>
             </Link>
    ))}
        </main>
      );
  };
  
  export default BirdList;