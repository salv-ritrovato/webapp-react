import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import { useLoader } from "../context/LoaderContext";

export default function DefaultLayout() {
  const { isLoading } = useLoader();

  return (
    <>
      <AppHeader />
      {isLoading && <Loader />}
      <main className="container py-4">
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
}