import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import styles from './NavBar.module.css';
import Hawk from '../../assets/images/hawk-1853120_640.jpg';


const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav className={styles.container}>
           <Link to='/'><img src={Hawk} alt="A majestic hawk" /></Link>
         <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/birds'>BIRD SIGHTINGS</Link></li>
            <li><Link to="/birds/new">NEW BIRD</Link></li>

            <li><Link to='' onClick={handleSignout}>SIGN OUT</Link></li>
         </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default NavBar;
