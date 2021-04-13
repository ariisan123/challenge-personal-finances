import { useContext } from 'react';
import { FormContext } from '../Context/FormContext';

const InvalidSubmit = () => {
  const [formData] = useContext(FormContext);
  const { submitErr } = formData;

  return submitErr ? <p className="err-msg">Datos incorrectos</p> : null;
};

export default InvalidSubmit;
