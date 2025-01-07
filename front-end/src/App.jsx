import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService'; 
import BirdList from './components/BirdList/BirdList';
import * as birdService from './services/birdService';
import BirdDetails from './components/BirdDetails/BirdDetails';
import BirdForm from './components/BirdForm/BirdForm';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());

  const [birds, setBirds] = useState([]);

  const navigate = useNavigate();

  const handleAddBird = async (birdFormData) => {
    const newBird = await birdService.create(birdFormData);
    setBirds([newBird, ...birds]);
    navigate('/birds');
  };

  useEffect(() => {
    const fetchAllBirds = async () => {
      const birdsData = await birdService.index();
      setBirds(birdsData);
    };
    if (user) fetchAllBirds();
  }, [user]);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/birds" element={<BirdList birds={birds} />} />
              <Route path="/birds/:birdId" element={<BirdDetails />} />
              <Route path="/birds/new" element={<BirdForm handleAddBird={handleAddBird} />} />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
