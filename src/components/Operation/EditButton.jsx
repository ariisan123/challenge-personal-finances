import { useState } from 'react';
import OperationForm from '../Forms/OperationForm';

const EditButton = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      {show && (
        <OperationForm
          title="Editar"
          item={item}
          show={show}
          closeModal={handleShow}
          update={true}
        />
      )}
      <button className="edit" onClick={handleShow}>
        Editar <i className="far fa-edit"></i>
      </button>
    </>
  );
};

export default EditButton;
