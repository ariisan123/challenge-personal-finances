import React, { useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import { endpoints, setUrl } from '../../utils/apiUrl';
import SubmitButton from './SubmitButton';

const SignupButton = () => {
  const { fetchData } = useFetch();
  const [msg, setMsg] = useState(false);
  const handleSignup = async (e, body) => {
    e.preventDefault();
    const user = await fetchData(
      setUrl(endpoints.signup),
      'POST',
      JSON.stringify(body)
    );
    user.ok ? setMsg(true) : setMsg(false);
    return user;
  };

  return (
    <React.Fragment>
      <SubmitButton callFunction={handleSignup} />
      {msg && <p className="ok-msg">Usuario creado, inicia sesión</p>}
    </React.Fragment>
  );
};

export default SignupButton;
