const stats = [
  { value: '120+', label: 'Dự án hoàn thành' },
  { value: '98%', label: 'Khách hàng hài lòng' },
  { value: '24/7', label: 'Hỗ trợ nhanh chóng' },
]

const featuredServices = [
  'Thiết kế website thương mại điện tử',
  'Branding và truyền thông số',
  'Thiết kế UI/UX hiện đại',
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/60 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-700">
            Digital Studio & Creative Agency
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Tạo dấu ấn số cho doanh nghiệp của bạn.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Chúng tôi mang đến giải pháp thiết kế website, thương hiệu và chiến dịch marketing giúp doanh nghiệp bứt phá trên môi trường số.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Xem dự án
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-500/40 hover:text-teal-700"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-teal-500/20 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Tầm nhìn</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Sáng tạo đậm chất thương hiệu</h2>
              <p className="mt-2 text-sm text-slate-600">
                Giải pháp hiện đại, tối giản và hiệu quả cho mọi doanh nghiệp.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredServices.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Danh mục sản phẩm</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Các giải pháp nổi bật dành cho doanh nghiệp</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['Website doanh nghiệp', 'Thiết kế website hiện đại, tối ưu tốc độ và trải nghiệm người dùng.'],
            ['Thiết kế thương hiệu', 'Xây dựng nhận diện thương hiệu nhất quán và chuyên nghiệp.'],
            ['Marketing số', 'Chiến dịch quảng bá, nội dung và tối ưu chuyển đổi khách hàng.'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">In ấn chuyên nghiệp</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Từ danh thiếp đến bao bì, chúng tôi mang lại chất lượng in ấn đỉnh cao.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Mỗi sản phẩm được thiết kế và in ấn cẩn thận, phù hợp cho doanh nghiệp, sự kiện và thương hiệu.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm text-slate-700">Danh thiếp</span>
            <span className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm text-slate-700">Thiệp mời</span>
            <span className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm text-slate-700">Bao bì</span>
            <span className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm text-slate-700">Biển hiệu</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
            alt="Sản phẩm in ấn"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-3xl font-semibold text-teal-600">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Thiết kế in ấn"
            className="h-72 w-full object-cover"
          />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Thiết kế & in ấn</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">Mẫu in chất lượng cao cho thương hiệu của bạn</h3>
          <p className="mt-4 text-slate-600">
            Từ catalog, tờ rơi tới bao bì, mỗi sản phẩm đều được kiểm soát màu sắc và độ sắc nét để tăng hiệu quả truyền thông.
          </p>
          <a href="/products" className="mt-6 inline-flex text-sm font-semibold text-teal-600 hover:text-teal-700">
            Xem tất cả sản phẩm →
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
            alt="Sản phẩm in ấn quảng cáo"
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Sản phẩm in ấn văn phòng"
            className="h-64 w-full object-cover"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Why choose us</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Một đội ngũ thiết kế và phát triển toàn diện</h2>
          </div>
          <a href="/services" className="text-sm font-medium text-teal-600 transition hover:text-teal-700">
            Xem thêm dịch vụ →
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['Tối ưu trải nghiệm', 'Mỗi giao diện được thiết kế để người dùng dễ tiếp cận và ghi nhớ.'],
            ['Tăng hiệu quả kinh doanh', 'Website được tối ưu tốc độ, chuyển đổi và SEO.'],
            ['Hỗ trợ liên tục', 'Đội ngũ luôn sẵn sàng cập nhật và phát triển sản phẩm.'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
