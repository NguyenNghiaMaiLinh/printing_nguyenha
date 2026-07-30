const article = {
  title: "5 lưu ý khi lựa chọn dịch vụ in ấn chuyên nghiệp",
  date: "30/07/2026",
  image:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
};

export default function NewsDetail() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
          Tin tức
        </p>

        <h1 className="mt-3 text-5xl font-bold text-slate-900">
          {article.title}
        </h1>

        <p className="mt-3 text-slate-500">
          Đăng ngày {article.date}
        </p>
      </div>

      <img
        src={article.image}
        alt={article.title}
        className="h-[420px] w-full rounded-3xl object-cover"
      />

      <div className="space-y-6 text-lg leading-8 text-slate-600">
        <p>
          Chất lượng in ấn không chỉ phụ thuộc vào máy móc mà còn phụ thuộc vào
          chất liệu giấy, quy trình gia công và kinh nghiệm của đơn vị thực
          hiện.
        </p>

        <p>
          Khi lựa chọn đơn vị in, doanh nghiệp nên xem trước mẫu thực tế, lựa
          chọn đúng định lượng giấy và kiểm tra màu sắc trước khi sản xuất số
          lượng lớn.
        </p>

        <h2 className="text-3xl font-semibold text-slate-900">
          Những tiêu chí quan trọng
        </h2>

        <ul className="list-disc space-y-3 pl-6">
          <li>Máy in công nghệ mới.</li>
          <li>Màu sắc ổn định.</li>
          <li>Gia công sắc nét.</li>
          <li>Tiến độ nhanh.</li>
          <li>Giá thành hợp lý.</li>
        </ul>

        <p>
          In Nguyên Hà luôn kiểm soát quy trình từ thiết kế, in ấn đến gia công
          nhằm mang đến sản phẩm chất lượng và đúng tiến độ cho khách hàng.
        </p>
      </div>
    </div>
  );
}