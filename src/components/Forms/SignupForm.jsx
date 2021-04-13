import '../../sass/Form.scss';
import SignupContext from '../Context/SignupContext';
import Input from './Input';
import SignupButton from './SignupButton';

const SignupForm = () => {
  return (
    <SignupContext>
      <form className="form-wrap">
        <Input name="name" />
        <Input name="email" />
        <Input name="password" />
        <SignupButton />
      </form>
    </SignupContext>
  );
};

export default SignupForm;
