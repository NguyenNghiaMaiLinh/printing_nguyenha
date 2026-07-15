const services = [
  {
    title: 'Thiết kế và in danh thiếp',
    desc: 'Mẫu thiết kế tinh tế, in sắc nét trên giấy chất lượng cao cho doanh nghiệp và sự kiện.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Thiệp mời và giấy mời',
    desc: 'Thiệp cưới, thiệp sự kiện và giấy mời được thiết kế riêng theo ý tưởng của bạn.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'In ấn quảng cáo',
    desc: 'Tờ rơi, poster, banner và standee giúp doanh nghiệp tăng độ nhận diện thương hiệu.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Bao bì và nhãn sản phẩm',
    desc: 'Bao bì carton, tem nhãn và decal giúp sản phẩm nổi bật trên kệ hàng.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function Services() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Dịch vụ in ấn</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Giải pháp in ấn chuyên nghiệp cho doanh nghiệp và sự kiện.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Từ bản in nhỏ như danh thiếp cho tới các ấn phẩm quảng cáo lớn, chúng tôi mang đến chất lượng, tốc độ và sự sáng tạo tối ưu.
          </p>
          <a href="/contact" className="mt-6 inline-flex rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700">
            Yêu cầu báo giá
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
            alt="Dịch vụ in ấn"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-4 text-slate-600">{service.desc}</p>
              <a href="/contact" className="mt-6 inline-flex text-sm font-medium text-teal-600 hover:text-teal-700">
                Tư vấn ngay →
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
