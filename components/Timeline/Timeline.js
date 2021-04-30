import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';

import TimelineCard from '../TimelineCard/TimelineCard';
import { experienceData } from './experience';

import styles from './Timeline.module.scss';

const Timeline = () => {
  const getIconClassName = (iconClassName) => {
    const iconClasses = [styles.experienceIcon];

    if (iconClassName) {
      iconClasses.push(styles[iconClassName]);
    }

    return iconClasses.join(' ');
  };

  const getIcon = (experience) => {
    const { src, alt, className } = experience.icon;
    return (
      <Image
        src={`/${src}`}
        alt={alt}
        layout="fill"
        className={getIconClassName(className)}
      />
    );
  };

  const renderTimelineElements = () => {
    const timelineElements = experienceData.map((experience, index) => {
      const key = `experience-${index}-timeline-element`;
      return (
        <VerticalTimelineElement
          id={key}
          key={key}
          date={experience.dates}
          dateClassName={styles.date}
          textClassName={styles.timelineElement}
          icon={getIcon(experience)}
          iconStyle={{ boxShadow: 'none' }}
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