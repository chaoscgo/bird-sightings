import styles from './Loading.module.css';
import Hawk from '../../assets/images/hawk-1853120_640.jpg';

const Loading = () => {
  return (
    <main className={styles.container}>
      <div>
        <img src={Hawk} alt="A hawk sitting on a pole" />
        <p>Background image designed by <a className="attribution" href="https://pixabay.com">Pixabay</a></p>
      </div>
    </main>
  );
};

export default Loading;