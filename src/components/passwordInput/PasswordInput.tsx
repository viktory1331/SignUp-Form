import { useState } from 'react';
import {
  UseFormReturn,
  RegisterOptions,
  DeepMap,
  FieldError,
} from 'react-hook-form';
import cn from 'classnames';
import { FormInputs, FormFields } from '../signUp/SignUp';
import { ReactComponent as Eye } from '../../assets/image/eye.svg';
import style from './PasswordInput.module.scss';

interface Props {
  formControl: UseFormReturn<FormInputs>;
  fieldName: FormFields;
  placeholder: string;
  registerOptions: RegisterOptions;
  errors: DeepMap<FormInputs, FieldError>;
}

export const PasswordInput = (props: Props) => {
  const { formControl, fieldName, placeholder, registerOptions, errors } =
    props;
  const { register } = formControl;

  const [canShowPassword, setCanShowPassword] = useState(false);

  const changePasswordVisibility = () => {
    setCanShowPassword(!canShowPassword);
  };

  const hasError = Boolean(errors[fieldName]);

  return (
    <div
      className={cn(style.passwordWrapper, {
        [style.passwordWrapperError]: hasError,
      })}
    >
      <input
        className={cn(style.passwordInput, {
          [style.passwordInputError]: hasError,
        })}
        placeholder={placeholder}
        type={canShowPassword ? 'text' : 'password'}
        {...register(fieldName, registerOptions)}
      />
      <i className={style.passwordEye}>
        <Eye onClick={changePasswordVisibility} />
      </i>
    </div>
  );
};
