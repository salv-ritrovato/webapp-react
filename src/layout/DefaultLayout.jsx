import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <AppHeader />

      <main className="container py-4">
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
}