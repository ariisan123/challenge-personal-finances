import { useState } from 'react';
import '../../sass/NewButton.scss';
import OperationForm from '../Forms/OperationForm';
const NewButton = () => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <>
      {show && (
        <OperationForm
          title="Nueva Operación"
          show={show}
          closeModal={handleModal}
          update={false}
        />
      )}
      <button className="btn-new" onClick={handleModal}>
        Crear
      </button>
    </>
  );
};

export default NewButton;
