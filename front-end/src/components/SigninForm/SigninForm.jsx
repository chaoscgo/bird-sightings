import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import Hawk from '../../assets/images/hawk-1853120_640.jpg';
import './SigninForm.css';

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      console.log(user);
      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main className="container">
    <section>
      <div>
     <img src={Hawk} alt="A hawk sitting on a pole" />
     <p>Background image designed by <a class="attribution" href="https://pixabay.com">Pixabay</a></p>
     </div>
    </section>
    <section>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <p>{message}</p>
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Sign In</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
      </section>
    </main>
  );
};

export default SigninForm;