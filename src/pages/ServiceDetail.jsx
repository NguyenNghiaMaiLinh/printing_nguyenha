import { useParams } from "react-router-dom";

export default function ServiceDetail() {
  const { slug } = useParams();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">
        {slug.replaceAll("-", " ")}
      </h1>

      <p className="text-lg text-slate-600">
        Nội dung chi tiết dịch vụ sẽ được cập nhật sau.
      </p>
    </div>
  );
}