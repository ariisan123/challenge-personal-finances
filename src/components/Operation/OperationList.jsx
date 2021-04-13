import '../../sass/Operation_List.scss';
import { Circles } from '@agney/react-loading';
import useFetch from '../../customHooks/useFetch';
import OperationItem from './OperationItem';
import OperationHead from './OperationHead';
import { useEffect, useState } from 'react';
import Balance from './Balance';
import { endpoints, setUrl } from '../../utils/apiUrl';
const OperationList = ({ endpoint = '' }) => {
  const token = sessionStorage.getItem('token');
  const { isLoading, data, fetchData } = useFetch();
  const [total, setTotal] = useState(0);

  useEffect(async () => {
    console.log(setUrl(endpoints.operations(endpoint)));
    const items = await fetchData(
      setUrl(endpoints.operations(endpoint)),
      'GET',
      null,
      token
    );
    setTotal(getTotal(items.data));
  }, []);

  const { pathname } = window.location;
  const getTotal = (data) => {
    if (!data) return;
    switch (pathname) {
      case '/dashboard':
        return data.reduce((prev, item) => {
          if (item.type === 'in') {
            return (prev += item.amount);
          }
          return (prev -= item.amount);
        }, 0);
      case '/received':
        return data.reduce((prev, item) => {
          if (item.type === 'in') {
            return (prev += item.amount);
          }
        }, 0);
      case '/sent':
        return data.reduce((prev, item) => {
          if (item.type === 'out') {
            return (prev += item.amount);
          }
        }, 0);
      default:
        break;
    }
  };
  return (
    <div className="operation-container">
      <OperationHead title="Ultimas Operaciones" />
      <Balance total={total} />
      <ul className="operation-list">
        {isLoading ? (
          <Circles width="75" />
        ) : (
          data.data
            .slice(0)
            .reverse()
            .map((item) => {
              return <OperationItem key={item.id} item={{ ...item }} />;
            })
        )}
        {!isLoading && data.data.length === 0 && (
          <p className="no-data">No se encontraron transacciones</p>
        )}
      </ul>
    </div>
  );
};

export default OperationList;
