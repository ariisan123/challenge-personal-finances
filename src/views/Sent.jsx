import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import OperationList from '../components/Operation/OperationList';
import useSession from '../customHooks/useSession';
function Sent() {
  const { getToken } = useSession();
  const history = useHistory();
  useEffect(() => {
    if (!getToken()) history.push('/');
  }, []);
  return (
    <>
      <Navbar />
      <OperationList endpoint={'/out'} />
    </>
  );
}

export default Sent;
