import '../../sass/Form.scss';
import Input from './Input';
import OperationContext from '../Context/OperationContext';
import Select from './Select';
import ButtonClose from './CloseButton';
import UpdateButton from '../Operation/UpdateButton';
import NewOperationButton from '../Operation/NewOperationButton';

function OperationForm({ title, show, closeModal, item, update }) {
  if (!show) return null;
  return (
    <OperationContext>
      <div className="modal">
        <form className="form-wrap">
          <div className="form-info">
            <h3 className="op-title">{title}</h3>
            <ButtonClose closeModal={closeModal} />
          </div>
          <Input name="amount" item={item} />
          <Input name="date" item={item} />
          <Input name="concept" item={item} />
          <Select type={item && item.type} />
          {update ? <UpdateButton id={item.id} /> : <NewOperationButton />}
        </form>
      </div>
    </OperationContext>
  );
}

export default OperationForm;
