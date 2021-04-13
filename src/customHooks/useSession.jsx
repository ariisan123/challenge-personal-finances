const useSession = () => {
  function setToken(token) {
    sessionStorage.setItem('token', token);
    return;
  }

  function getToken() {
    const token = sessionStorage.getItem('token');
    return token;
  }

  return { setToken, getToken };
};

export default useSession;
