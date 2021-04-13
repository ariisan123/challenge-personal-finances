import { useContext, useEffect } from 'react';
import { FormContext } from '../Context/FormContext';
import ValidateInput from './ValidateInput';

const Input = ({ name, item }) => {
  const [formData, setFormData] = useContext(FormContext);

  useEffect(() => {
    if (item) {
      setFormData((prevState) => ({
        ...prevState,
        values: { ...formData.values, [name]: item[name] }
      }));
    }
    return;
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      values: { ...formData.values, [e.target.name]: e.target.value }
    });
  };
  return (
    <>
      <input
        readOnly={name === 'date' ? true : false}
        className="inp"
        name={name}
        type={formData.inputs[name].type}
        placeholder={formData.inputs[name].placeholder}
        onChange={handleChange}
        defaultValue={
          (name === 'date' && formData.values[name]) || (item && item[name])
        }
      />
      <ValidateInput name={name} />
    </>
  );
};

export default Input;
