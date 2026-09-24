import styles from "./Header.module.scss";

const Header = ({ title,  tag = "h3" }) => {
  const Tag = tag === "h1" ? "h1" : "h3";

  return (
    <div className={styles.header__container}>
      <Tag className={styles.header__title}>{title}</Tag>
      <div className={styles.header__divider} />
    </div>
  );
};

export default Header;
