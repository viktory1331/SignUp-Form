import SignUp from '../signUp/SignUp';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';
import styles from './Form.module.scss';
import Gender from '../gender/Gender';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.textStyle}>Sign Up with email</h1>
      <Logo />
      <Gender />
      <SignUp />
    </div>
  );
};

export default Form;
