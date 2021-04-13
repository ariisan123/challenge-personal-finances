import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { FormContext } from '../Context/FormContext';
import InvalidSubmit from './InvalidSubmit';

const SubmitButton = ({ callFunction }) => {
  const [buttonState, setButtonState] = useState(true);
  const [formData, setFormData] = useContext(FormContext);
  const history = useHistory();

  const isValid = ({ errors, values }) => {
    if (Object.entries(errors).length !== Object.entries(values).length) return;
    let errorArray = [];
    for (const fieldname in errors) {
      errorArray.push(errors[fieldname]);
    }
    const disable = errorArray.filter((value) => value === true);
    if (disable.length > 0) {
      setButtonState(true);
      return;
    }
    setButtonState(false);
    return;
  };

  const submitHandler = async (e) => {
    const response = await callFunction(e, formData.values);
    if (response.token) {
      sessionStorage.setItem('token', response.token);
      history.push('/dashboard');
      return;
    }
    if (response.ok) {
      setFormData({
        ...formData,
        submitErr: false
      });
      return;
    } else {
      setFormData({
        ...formData,
        submitErr: true
      });
      return;
    }
  };

  useEffect(() => isValid(formData), [formData]);

  return (
    <>
      <button
        className="btn submit"
        disabled={buttonState}
        onClick={submitHandler}
      >
        Enviar
      </button>
      <InvalidSubmit />
    </>
  );
};

export default SubmitButton;
