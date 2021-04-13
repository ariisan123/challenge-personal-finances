import useFetch from '../../customHooks/useFetch';
import { endpoints, setUrl } from '../../utils/apiUrl';
import SubmitButton from './SubmitButton';

const LoginButton = () => {
  const { fetchData } = useFetch();
  const handleLogin = async (e, body) => {
    e.preventDefault();
    const token = await fetchData(
      setUrl(endpoints.login),
      'POST',
      JSON.stringify(body)
    );
    return token;
  };

  return <SubmitButton callFunction={handleLogin} />;
};

export default LoginButton;
