import { useState } from 'react';
import { FormContext } from './FormContext';

const SignupContext = ({ children }) => {
  const [formData, setFormData] = useState({
    values: { name: '', email: '', password: '' },
    errors: {},
    inputs: {
      email: { type: 'email', placeholder: 'email' },
      password: { type: 'password', placeholder: 'contraseña' },
      name: { type: 'text', placeholder: 'nombre' }
    }
  });

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};

export default SignupContext;
