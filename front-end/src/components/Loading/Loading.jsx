
import styles from './Loading.module.css'
import Hawk from '../../assets/images/hawk-1853120_640.jpg';

const Loading = () => {
  return (
    <main className={styles.container}>
       <img src={Hawk} alt="A hawk sitting on a pole" />
    </main>
  )
}

export default Loading
