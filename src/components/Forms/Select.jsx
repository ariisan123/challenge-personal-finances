import { useContext, useEffect } from 'react';
import { FormContext } from '../Context/FormContext';

const Select = ({ type }) => {
  const [formData, setFormData] = useContext(FormContext);
  useEffect(() => {
    if (type) {
      setFormData((prevState) => ({
        ...prevState,
        values: { ...formData.values, type },
        errors: { ...formData.errors, select: false }
      }));
    }
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      values: { ...formData.values, [e.target.name]: e.target.value },
      errors: { ...formData.errors, select: false }
    });
  };
  return (
    <select
      disabled={!!type}
      name="type"
      defaultValue={type ? type : 'main'}
      className="type-select"
      onChange={handleChange}
    >
      <option value="main" disabled>
        Seleccionar
      </option>
      <option value="in">ingreso</option>
      <option value="out">egreso</option>
    </select>
  );
};

export default Select;
