import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
}