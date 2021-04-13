import '../sass/HomeBody.scss';
import { useState } from 'react';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';

function HomeBody() {
  const [clicked, setClicked] = useState({ login: false, signup: false });
  const handleClick = (button) => {
    if (button === 'login') {
      setClicked({ signup: false, login: true });
    } else {
      setClicked({ signup: true, login: false });
    }
  };

  return (
    <div className="homebody">
      <h2>Crea una cuenta o inicia sesión para comenzar.</h2>
      <div className="home-buttons">
        <button className="btn login" onClick={() => handleClick('login')}>
          Iniciar sesión
        </button>
        <button className="btn signup" onClick={() => handleClick('signup')}>
          Nuevo usuario
        </button>
      </div>
      {clicked.login ? <LoginForm /> : false}
      {clicked.signup ? <SignupForm /> : false}
    </div>
  );
}

export default HomeBody;
