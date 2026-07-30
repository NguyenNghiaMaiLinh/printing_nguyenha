const posts = [
  {
    id: 1,
    title: "5 lưu ý khi thiết kế Name Card chuyên nghiệp",
    desc: "Những điều cần biết để tạo một chiếc name card ấn tượng và hiệu quả.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    date: "30/07/2026",
    slug: "5-luu-y-thiet-ke-name-card",
  },
  {
    id: 2,
    title: "Nên chọn giấy Couche hay Bristol?",
    desc: "So sánh hai loại giấy phổ biến trong ngành in để lựa chọn phù hợp.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    date: "28/07/2026",
    slug: "giay-couche-va-bristol",
  },
  {
    id: 3,
    title: "Xu hướng thiết kế Catalogue năm 2026",
    desc: "Những phong cách catalogue hiện đại giúp tăng hiệu quả bán hàng.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    date: "25/07/2026",
    slug: "xu-huong-catalogue-2026",
  },
];

export default function News() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
          Tin tức
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Tin tức & Kiến thức in ấn
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Cập nhật xu hướng thiết kế, kỹ thuật in và những kinh nghiệm hữu ích
          dành cho doanh nghiệp.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-slate-500">
                {post.date}
              </p>

              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                {post.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {post.desc}
              </p>

              <a
                href={`/news/${post.slug}`}
                className="mt-6 inline-flex font-medium text-teal-600 hover:text-teal-700"
              >
                Đọc tiếp →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}