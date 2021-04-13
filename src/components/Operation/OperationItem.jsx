import { useState } from 'react';
import '../../sass/Operation_Item.scss';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
const OperationItem = ({ item }) => {
  const [deleted, setDeleted] = useState(false);
  const { amount, type, concept, date, id } = item;

  return (
    <li className={deleted ? 'item-disabled' : 'item'}>
      <div className="item-container">
        <span className="amount">${amount}</span>
        <div className="type-container">
          <span className="type">{type === 'in' ? 'Ingreso' : 'Egreso'}</span>
          <i
            className={type === 'in' ? 'fas fa-arrow-down' : 'fas fa-arrow-up'}
          ></i>
        </div>
      </div>
      <div className="item-detail">
        <span className="concept">Concepto: {concept}</span>
        <span className="date">Fecha: {date}</span>
        <div className="buttons">
          <EditButton id={id} item={item} />
          <DeleteButton id={id} setDeleted={setDeleted} />
        </div>
      </div>
    </li>
  );
};

export default OperationItem;
