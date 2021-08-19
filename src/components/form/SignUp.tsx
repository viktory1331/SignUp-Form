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
      <div className={styles.formContainer}>
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
        <button type="submit" />
      </div>
    </form>
  );
};

export default SignUp;
