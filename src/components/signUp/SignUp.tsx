import { useForm } from 'react-hook-form';
import { PasswordInput } from '../passwordInput/PasswordInput';
import styles from './SignUp.module.scss';
import cn from 'classnames';

export enum FormFields {
  Email = 'email',
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation',
}

export type FormInputs = {
  [key in FormFields]: string;
};

const EMAIL_VALIDATION_REGEXP =
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

const SignUp = () => {
  const formControl = useForm<FormInputs>({
    mode: 'onChange',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = formControl;

  const onSubmit = (data: FormInputs) => {
    alert(`email: ${data.email}; password: ${data.password}`);
  };

  const hasEmailError = Boolean(errors[FormFields.Email]);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formItemTitle}>E-mail</h2>
      <input
        className={cn(styles.emailInput, {
          [styles.emailInputError]: hasEmailError,
        })}
        placeholder="Email"
        {...register(FormFields.Email, {
          pattern: new RegExp(EMAIL_VALIDATION_REGEXP),
        })}
      />
      {errors.email && (
        <p className={styles.inputErrorTitle}>Enter a valid email</p>
      )}

      <h2 className={styles.formItemTitle}>Create Password</h2>
      <PasswordInput
        formControl={formControl}
        fieldName={FormFields.Password}
        placeholder="Password"
        registerOptions={{ minLength: 6 }}
        errors={errors}
      />

      {errors.password && (
        <p className={styles.inputErrorTitle}>Enter a valid password</p>
      )}

      <h2 className={styles.formItemTitle}>Confirm Password</h2>

      <PasswordInput
        formControl={formControl}
        fieldName={FormFields.PasswordConfirmation}
        placeholder="Confirm your password"
        errors={errors}
        registerOptions={{
          validate: {
            matchesPreviousPassword: (value: string) => {
              const { password } = getValues();
              return password === value || 'Passwords should match!';
            },
          },
        }}
      />

      {errors.passwordConfirmation && (
        <p className={styles.inputErrorTitle}>Passwords should match!</p>
      )}

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
