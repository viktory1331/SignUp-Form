import SignUp from '../signUp/SignUp';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.textStyle}>Sign Up with email</h1>
      <Logo />
      <SignUp />
    </div>
  );
};

export default Form;
