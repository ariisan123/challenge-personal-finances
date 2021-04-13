import React, { useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import { endpoints, setUrl } from '../../utils/apiUrl';
import SubmitButton from '../Forms/SubmitButton';

const UpdateButton = ({ id }) => {
  const [msg, setMsg] = useState(false);
  const { fetchData } = useFetch();
  const updateHandler = async (e, body) => {
    e.preventDefault();
    setMsg(false);
    const token = sessionStorage.getItem('token');
    const response = await fetchData(
      setUrl(endpoints.opEdit(id)),
      'PUT',
      JSON.stringify(body),
      token
    );
    if (response.ok) setMsg(true);
    return response;
  };

  return (
    <React.Fragment>
      <SubmitButton callFunction={updateHandler} />

      {msg && <p className="ok-msg">Actualización correcta.</p>}
    </React.Fragment>
  );
};

export default UpdateButton;
