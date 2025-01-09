import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.about}>
          <h1>Welcome back, {user.username}!</h1>
          <p>
            Have you seen a cool, new bird lately?
            <br></br>
            <br></br>
            Come on in and let everyone know!
          </p>
        </section>
      </main>
      <footer>Background image designed by <a className="attribution" href="https://pixabay.com">Pixabay</a></footer>
    </>
  );
};

export default Dashboard;