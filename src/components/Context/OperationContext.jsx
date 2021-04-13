import { useState } from 'react';
import { FormContext } from './FormContext';
import moment from 'moment';

const OperationContext = ({ children }) => {
  const [formData, setFormData] = useState({
    values: {
      amount: '',
      concept: '',
      date: moment().format('YYYY-MM-DD')
    },
    errors: { date: false, select: true },
    inputs: {
      amount: { type: 'number', placeholder: 'monto' },
      concept: { type: 'text', placeholder: 'concepto' },
      date: { type: 'text', placeholder: 'fecha' }
    }
  });

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};

export default OperationContext;
