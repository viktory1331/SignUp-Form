import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../components/passwordInput/PasswordInput';
import styles from './SignUp.module.scss';
import cn from 'classnames';
import { FormFields, EMAIL_VALIDATION_REGEXP, GENDER_ITEMS } from './constants';
import { GenderItem } from '../../components/genderItem/GenderItem';
import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';

export type FormInputs = {
  [key in FormFields]: string;
};

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

  const [selectedGender, setSelectedGender] = useState<number>();

  const onSubmit = (data: FormInputs) => {
    const foundGender = GENDER_ITEMS.find(
      (genderItem, id) => id === selectedGender
    );
    alert(
      `email: ${data.email}; password: ${data.password}; gender: ${foundGender?.text}`
    );
  };

  const hasEmailError = Boolean(errors[FormFields.Email]);

  const renderGenderItems = () =>
    GENDER_ITEMS.map((genderItem, id) => {
      return (
        <GenderItem
          id={id}
          {...genderItem}
          key={id}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />
      );
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContainer}>
        <div>
          <Logo />
          <h1 className={styles.textStyle}>Sign Up with email</h1>
        </div>

        <div>
          <h2 className={styles.formItemTitle}>Gender</h2>

          <div className={styles.genderContainer}>{renderGenderItems()}</div>

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

          <input
            className={styles.submitButton}
            type="submit"
            value="Sign Up"
          />

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
        </div>
      </div>
    </form>
  );
};

export default SignUp;
