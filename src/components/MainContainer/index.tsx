import classNames from "classnames";
import styles from "./styles.module.scss";

interface IProps {
  classW?: string;
  children: any;
}
const MainContainer = ({ classW, children }: IProps) => {
  return (
    <div className={classNames(classW, styles.wrapContainer)}>{children}</div>
  );
};

export default MainContainer;
