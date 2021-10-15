import { ReactComponent as Female } from '../../assets/image/female.svg';
import { ReactComponent as Other } from '../../assets/image/other.svg';
import { ReactComponent as Male } from '../../assets/image/male.svg';

export const EMAIL_VALIDATION_REGEXP =
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

export enum FormFields {
  Gender = 'gender',
  Email = 'email',
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation',
}

export const GENDER_ITEMS = [
  { text: 'Male', icon: <Male /> },
  { text: 'Female', icon: <Female /> },
  { text: 'Other', icon: <Other /> },
];
