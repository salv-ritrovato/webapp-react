import { ClipLoader } from "react-spinners";

export default function AppLoader() {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
      <ClipLoader color="#ffffff" size={60} />
    </div>
  );
}