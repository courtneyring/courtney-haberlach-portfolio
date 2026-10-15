import styles from './Gallery.module.scss';

export default function Gallery({ section }) {
  return (
    <div className={`${styles.gallery} container`}>
      {section.images.map((image) => (
        <img key={image} src={image} alt="" />
      ))}
    </div>
  );
}
