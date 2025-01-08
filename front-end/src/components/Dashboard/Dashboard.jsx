import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import styles from './Dashboard.module.css';
import SkyBirds from '../../assets/images/nature-2746726_640.jpg';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
     <main className={styles.container}>
     <section className={styles.splash}>
       <img src={SkyBirds} alt="Birds flying silhouetted against a sunset" />
      </section>
       <section className={styles.about}>
      <h1>Welcome back, {user.username}</h1>
      <p>
        Have you seen a new, cool bird lately?  Come on in
        and let everyone know!
      </p>
      </section>
    </main>
  );
};

export default Dashboard;
