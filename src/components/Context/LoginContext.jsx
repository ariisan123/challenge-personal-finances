import { useState } from 'react';
import { FormContext } from './FormContext';

const LoginContext = ({ children }) => {
  const [formData, setFormData] = useState({
    values: { email: '', password: '' },
    errors: {},
    inputs: {
      email: { type: 'email', placeholder: 'email' },
      password: { type: 'password', placeholder: 'contraseña' }
    }
  });

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};

export default LoginContext;
