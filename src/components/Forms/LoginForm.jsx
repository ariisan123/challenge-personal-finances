import '../../sass/Form.scss';
import LoginContext from '../Context/LoginContext';
import Input from './Input';
import LoginButton from './LoginButton';

const LoginForm = () => {
  return (
    <LoginContext>
      <form className="form-wrap">
        <Input name="email" />
        <Input name="password" />
        <LoginButton />
      </form>
    </LoginContext>
  );
};

export default LoginForm;
