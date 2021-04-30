import Divider from '@material-ui/core/Divider';

import styles from './TimelineCard.module.scss';

const TimelineCard = ({ cardData }) => {
  const { keyPoints, org, title } = cardData;

  const renderKeyPoints = () => {
    const keyPointElements = keyPoints.map((keyPoint, index) => (
      <li
        className={styles.keyPoint}
        key={`keyPoint-${index}`}
      >
        {keyPoint}
      </li>
    ));
    return (
      <ul className={styles.keyPointsList}>
        {keyPointElements}
      </ul>
    );
  };

  return (
    <section className={styles.timelineCard}>
      <div className={styles.org}>{org}</div>
      <div className={styles.title}>{title}</div>
      <Divider className={styles.divider} />
      <div>{renderKeyPoints()}</div>
    </section>
  );
};

export default TimelineCard;