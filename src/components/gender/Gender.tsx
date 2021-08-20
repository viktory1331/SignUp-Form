import styles from './Gender.module.scss';
import { ReactComponent as Male } from '../../assets/image/male.svg';
import { ReactComponent as Female } from '../../assets/image/female.svg';
import { ReactComponent as Other } from '../../assets/image/other.svg';

const Gender = () => {
  return (
    <div>
      <h2 className={styles.genderTitle}>Gender</h2>
      <div className={styles.genderMainContainer}>
        <div className={styles.genderContainer}>
          <Male />
          <p className={styles.genderText}>Male</p>
        </div>
        <div className={styles.genderContainer}>
          <div className={styles.genderContainer}>
            <Female />
            <p className={styles.genderText}>Female</p>
          </div>
        </div>
        <div className={styles.genderContainer}>
          <div className={styles.genderContainer}>
            <Other />
            <p className={styles.genderText}>Other</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
