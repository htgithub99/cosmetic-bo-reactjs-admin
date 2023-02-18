import styles from "./styles.module.scss";

const PageHeader = () => {
  return (
    <>
      <div className={styles.wrapPageHeader}>
        <div className={styles.pageHeader_left}>
          <div className={styles.left__logo}>
            <img
              src="https://htmldemo.net/brancy/brancy/assets/images/logo.webp"
              alt="logo"
            />
          </div>
          <div className={styles.left_ul}>
            <ul>
              <li>
                <a href="Home">Home</a>
              </li>
              <li>
                <a href="Home">About</a>
              </li>
              <li>
                <a href="Home">Shop</a>
              </li>
              <li>
                <a href="Home">Blog</a>
              </li>
              <li>
                <a href="Home">Pages</a>
              </li>
              <li>
                <a href="Home">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.pageHeader_right}>
          <div className={styles.right_item}>
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className={styles.right_item}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
          <div className={styles.right_item}>
            <span className="material-symbols-outlined">person_filled</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
