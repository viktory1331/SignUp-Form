import styles from './GenderItem.module.scss';
import cn from 'classnames';

interface Props {
  text: string;
  icon: JSX.Element;
  id: number;
  selectedGender?: number;
  setSelectedGender: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const GenderItem = (props: Props) => {
  const { icon, text, id, selectedGender, setSelectedGender } = props;

  const isSelectedGender = selectedGender === id;

  const onClick = () => {
    setSelectedGender(id);
  };

  return (
    <div
      className={cn(styles.genderContainer, {
        [styles.selectedGender]: isSelectedGender,
      })}
      onClick={onClick}
    >
      {icon}
      <p
        className={cn(styles.genderText, {
          [styles.selectText]: isSelectedGender,
        })}
      >
        {text}
      </p>
    </div>
  );
};
