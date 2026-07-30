const services = [
  {
    title: "In tờ rơi",
    desc: "In tờ rơi quảng cáo nhiều kích thước, giấy Couche, Bristol, Ford với màu sắc sắc nét.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
    link: "/services/to-roi",
  },
  {
    title: "In Name Card",
    desc: "Name Card cao cấp với nhiều lựa chọn giấy, ép kim, phủ UV, bo góc.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80",
    link: "/services/name-card",
  },
  {
    title: "In Catalogue",
    desc: "Thiết kế và in catalogue giới thiệu doanh nghiệp, sản phẩm chuyên nghiệp.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    link: "/services/catalogue",
  },
  {
    title: "In Túi giấy",
    desc: "Túi giấy thời trang, mỹ phẩm, quà tặng với nhiều chất liệu và kích thước.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80",
    link: "/services/tui-giay",
  },
  {
    title: "In Hộp giấy",
    desc: "Hộp giấy, hộp carton, hộp mỹ phẩm và hộp quà theo yêu cầu.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
    link: "/services/hop-giay",
  },
  {
    title: "In Bao thư",
    desc: "Bao thư A4, A5, A6 đồng bộ bộ nhận diện thương hiệu.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80",
    link: "/services/bao-thu",
  },
  {
    title: "In Giấy tiêu đề",
    desc: "Giấy tiêu đề doanh nghiệp, in offset chất lượng cao.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    link: "/services/giay-tieu-de",
  },
];

export default function ServicesV2() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
          Dịch vụ
        </p>

        <h1 className="mt-3 text-5xl font-bold text-slate-900">
          Dịch vụ in ấn chuyên nghiệp
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          Chúng tôi cung cấp đầy đủ các dịch vụ in ấn dành cho doanh nghiệp,
          cửa hàng và cá nhân với chất lượng cao, thời gian nhanh và giá cạnh
          tranh.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <a
            key={service.title}
            href={service.link}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {service.desc}
              </p>

              <span className="mt-6 inline-flex font-semibold text-teal-600">
                Xem chi tiết →
              </span>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}