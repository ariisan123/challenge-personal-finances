import HomeBody from '../components/HomeBody';
import Navbar from '../components/Navbar/Navbar';
import useSession from '../customHooks/useSession';
import { Redirect } from 'react-router-dom';

function Home() {
  const { getToken } = useSession();
  if (getToken()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <HomeBody />
    </>
  );
}

export default Home;
