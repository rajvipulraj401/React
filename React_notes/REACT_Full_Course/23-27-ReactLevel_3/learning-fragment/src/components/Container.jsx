import styles from "./Container.module.css";

// const Container = (props) => {
const Container = ({ children, asdf }) => {
  //   return <div className={styles.container}>{props.children}</div>;
  return <div className={styles.container}>{children}</div>;
};

export default Container;
