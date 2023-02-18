import PageHeader from "components/PageHeader";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.scss";

const Home = lazy(() => import("pages/Home"));

export default function PageWrapper() {
  // const isAuthenticated = !!Cookies.get("token");
  // const { profile } = useProfile(isAuthenticated);

  // if (!isAuthenticated) return <Navigate to="/login" />;
  // if (!profile) return null;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <PageHeader />
        <div className={styles.pageContent}>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
