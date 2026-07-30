export default function Pricing() {
  const prices = [
    ["In Name Card", "300gsm", "Liên hệ"],
    ["In Tờ rơi", "A5 / A4", "Liên hệ"],
    ["In Catalogue", "Theo yêu cầu", "Liên hệ"],
    ["In Túi giấy", "Theo yêu cầu", "Liên hệ"],
    ["In Hộp giấy", "Theo yêu cầu", "Liên hệ"],
    ["In Bao thư", "A5 / A4", "Liên hệ"],
    ["In Giấy tiêu đề", "A4", "Liên hệ"],
  ];

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
          Bảng báo giá
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Báo giá dịch vụ in ấn
        </h1>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left">Dịch vụ</th>
              <th className="px-6 py-4 text-left">Quy cách</th>
              <th className="px-6 py-4 text-left">Giá</th>
            </tr>
          </thead>

          <tbody>
            {prices.map(([name, size, price]) => (
              <tr key={name} className="border-t">
                <td className="px-6 py-4">{name}</td>
                <td className="px-6 py-4">{size}</td>
                <td className="px-6 py-4 font-semibold text-teal-600">
                  {price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}