import { Link } from 'react-router-dom';
import styles from './BirdList.module.css';
import SkyBirds from '../../assets/images/nature-2746726_640.jpg';

const BirdList = (props) => {
  return (
    <>
      <div>
        <img src={SkyBirds} alt="Birds flying silhouetted against a sunset" />
        <p>Image designed by <a className="attribution" href="https://pixabay.com">Pixabay</a></p>
      </div>
      <h1>Bird Sightings:</h1>
  
      <main className={styles.container}>
        {props.birds.map((bird) => (
          <Link key={bird._id} to={`/birds/${bird._id}`}>
            <article>
              <header className={styles.header}>
                <h2>{bird.name}</h2>
                <p>
                  {bird.author.username} posted on&nbsp;
                  {new Date(bird.createdAt).toLocaleDateString()}
                </p>
              </header>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
};
  
export default BirdList;