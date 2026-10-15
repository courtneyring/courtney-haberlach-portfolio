
import styles from './Image.module.scss';

export default function Image({ contentId, sectionImage }) {
  return (

      <div className={`${styles.media} container`}>
        <img
          src={`/work/${contentId}/${sectionImage}`}
          alt={`mockup-${contentId}`}
        />
      </div>

  );
}
