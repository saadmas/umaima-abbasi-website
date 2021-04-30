import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import TimelineCard from '../TimelineCard/TimelineCard';
import { experienceData } from './experience';

import styles from './Timeline.module.scss';

const Timeline = () => {


  const getEvenItemStyleProps = () => ({
    contentArrowStyle: { borderRight: '7px solid #667db6' }
  });

  const getOddItemStyleProps = () => ({
    contentArrowStyle: { borderRight: '7px solid #93291E' }
  });

  const renderTimelineElements = () => {
    const timelineElements = experienceData.map((experience, index) => {
      const isEven = index % 2 === 0;
      const styleProps = isEven ? getEvenItemStyleProps() : getOddItemStyleProps();
      const textClassName = isEven ? styles.even : styles.odd;
      const key = `experience-${index}-timeline-element`;

      return (
        <VerticalTimelineElement
          id={key}
          key={key}
          date={experience.dates}
          dateClassName={styles.date}
          textClassName={styles.timelineElement}
          // icon={getIcon(index)} ///
          // iconStyle={{ background: '#0A0A0A' }}
          contentArrowStyle={{ borderRight: '7px solid #667db6' }}
        >
          <TimelineCard cardData={experience} />
        </VerticalTimelineElement>
      );
    });

    return timelineElements;
  };

  return (
    <section className={styles.timeline}>
      <VerticalTimeline className={styles.verticalTimeline}> 
        {renderTimelineElements()}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;