import React, { useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import { endpoints, setUrl } from '../../utils/apiUrl';
import SubmitButton from '../Forms/SubmitButton';

const NewOperationButton = () => {
  const [msg, setMsg] = useState(false);
  const { fetchData } = useFetch();
  const newOperationHandler = async (e, body) => {
    e.preventDefault();
    setMsg(false);
    const token = sessionStorage.getItem('token');
    const response = await fetchData(
      setUrl(endpoints.opNew),
      'POST',
      JSON.stringify(body),
      token
    );
    if (response.ok) setMsg(true);
    return response;
  };

  return (
    <React.Fragment>
      <SubmitButton callFunction={newOperationHandler} />
      {msg && <p className="ok-msg">Operacion creada.</p>}
    </React.Fragment>
  );
};

export default NewOperationButton;
