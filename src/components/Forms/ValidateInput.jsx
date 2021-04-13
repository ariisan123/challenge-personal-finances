import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../Context/FormContext';

const ValidateInput = ({ name }) => {
  const [formData, setFormData] = useContext(FormContext);
  const [msg, setMsg] = useState('');

  const setData = (fieldname, err, msg = null) => {
    setFormData((prevState) => ({
      ...prevState,
      errors: { ...formData.errors, [fieldname]: err }
    }));
    if (msg) setMsg(msg);
  };

  const validate = (fieldname, value) => {
    if (
      (value.length <= 1 && fieldname != 'amount') ||
      (fieldname === 'amount' && value < 1)
    ) {
      return;
    }
    switch (fieldname) {
      case 'amount':
        const amountDecimal = value
          .toString()
          .match(/^\s*-?\d+(\.\d{1,2})?\s*$/);
        if (amountDecimal && amountDecimal[0].length <= 10) {
          setData(fieldname, false);
          break;
        }
        setData(fieldname, true, 'Máximo diez digitos/dos decimales');
        break;

      case 'name':
        const validName = value.match(/^[a-zA-Z ]+$/);
        if (validName[0].length >= 4) {
          setData(fieldname, false);
          break;
        }
        setData(fieldname, true, 'Ingresa tu nombre completo');
        break;

      case 'concept':
        const validConcept = value.match(/^[a-zA-Z ]+$/);
        if (
          validConcept &&
          validConcept[0].length <= 10 &&
          validConcept[0].length >= 3
        ) {
          setData(fieldname, false);
          break;
        }
        setData(
          fieldname,
          true,
          'Máximo 10 carácteres alfabéticos, mínimo tres'
        );
        break;

      case 'email':
        const validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (validEmail) {
          setData(fieldname, false);
          break;
        }
        setData(fieldname, true, 'Introduzca un email válido');
        break;

      case 'password':
        if (value.length >= 5) {
          setData(fieldname, false);
          break;
        }
        setData(fieldname, true, 'Debe tener un minimo de 5 caracteres');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    validate(name, formData.values[name]);
  }, [formData.values[name]]);

  return formData.errors[name] ? <p className="err-msg">{msg}</p> : null;
};

export default ValidateInput;
