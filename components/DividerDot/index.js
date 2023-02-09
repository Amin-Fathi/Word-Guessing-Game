import styles from "./DividerDot.module.scss";

const DividerDot = () => (
  <div className={styles.DividerDot}>
    <div className={`${styles.__Dot} ${styles.orange1}`} />
    <div className={`${styles.__Dot} ${styles.orange2}`} />
    <div className={`${styles.__Dot} ${styles.orange2}`} />
    <div className={`${styles.__Dot} ${styles.orange2}`} />
  </div>
);

export default DividerDot;
