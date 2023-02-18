import PageHeader from "components/PageHeader";
import SideNav from "components/SideNav";
import { RoutePath } from "constants/constant";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.scss";

const ListProduct = lazy(() => import("pages/Product"));
const Dashboard = lazy(() => import("pages/Dashboard"));

export default function PageWrapper() {
  // const isAuthenticated = !!Cookies.get("token");
  // const { profile } = useProfile(isAuthenticated);

  // if (!isAuthenticated) return <Navigate to="/login" />;
  // if (!profile) return null;
  return (
    <div className={styles.pageWrapper}>
      <SideNav />
      <div className={styles.mainWrapper}>
        <PageHeader />
        <div className={styles.pageContent}>
          <Suspense>
            <Routes>
              <Route
                path={RoutePath.PRODUCT_LIST_PATH}
                element={<ListProduct />}
              />
              <Route path={RoutePath.HOME_PATH} element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
