import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav className={styles.container}>
         <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/birds'>BIRD SIGHTINGS</Link></li>
            <li><Link to="/birds/new">NEW BIRD</Link></li>

            <li><Link to='' onClick={handleSignout}>SIGN OUT</Link></li>
         </ul>
        </nav>
      ) : (
        <nav className={styles.container}>
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
