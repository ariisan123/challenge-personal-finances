import useFetch from '../../customHooks/useFetch';
import { endpoints, setUrl } from '../../utils/apiUrl';

const DeleteButton = ({ id, setDeleted }) => {
  const { fetchData } = useFetch();
  const deleteHandler = async () => {
    const token = sessionStorage.getItem('token');
    const response = await fetchData(
      setUrl(endpoints.opDelete(id)),
      'DELETE',
      null,
      token
    );
    if (response.ok) setDeleted(true);
  };

  return (
    <button className="delete" onClick={() => deleteHandler()}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default DeleteButton;
