
import styles from './Text.module.scss';

export default function Text({ section }) {
  return (

      <div className={`${styles.text} container`}>
        <div className={styles.subheader} style={{ color: section.textColor }}>
          {section.title}
        </div>
        <div
          className={styles.text}
          style={{ color: section.textColor }}
          dangerouslySetInnerHTML={{ __html: section.body }}
        />
      </div>

  );
}
