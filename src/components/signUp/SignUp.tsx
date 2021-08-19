import { ReactComponent as Eye } from '../../assets/image/eye.svg';
import { useForm } from 'react-hook-form';
import styles from './SignUp.module.scss';

interface Form {
  email: String;
  password: String;
  passwordConfirmation: String;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    alert(`email: ${data.email}; password: ${data.password}`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.emailStyleElement}>E-mail</h2>
      <input
        className={styles.emailInput}
        placeholder="Email"
        {...register('email', {
          pattern: new RegExp(
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          ),
        })}
      />
      {errors.email && <span>Sam loh</span>}
      <h2 className={styles.createPasswordElement}>Create Password</h2>
      <div className={styles.inputContainer}>
        <input
          placeholder="Password"
          type="password"
          {...register('password', { maxLength: 6 })}
        />
        {errors.password && <span>This field is required</span>}
        <i className={styles.faEyeIcon}>
          <Eye />
        </i>
      </div>
      <h2 className={styles.confirmPasswordElement}>Confirm Password</h2>
      <div className={styles.confirmPasswordContainer}>
        <input
          placeholder="Confirm your password"
          type="password"
          {...register('passwordConfirmation', {
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Passwords should match!';
              },
            },
          })}
        />
        {errors.passwordConfirmation && <span>Dolbaeb</span>}
        <i className={styles.faEyeConfirmIncon}>
          <Eye />
        </i>
      </div>
      <input className={styles.submitButton} type="submit" value="Sign Up" />
      <p className={styles.descriptionStyle}>
        Already have an account?{' '}
        <a href="." className={styles.linkStyle}>
          Log In
        </a>
      </p>
      <p className={styles.descriptionStyle}>
        Review privacy and disclosures here{' '}
        <a href="." className={styles.linkStyle}>
          Here
        </a>
      </p>
    </form>
  );
};

export default SignUp;
