const pricingPlans = [
  {
    name: 'Gói Tiết Kiệm',
    price: '99k',
    note: 'Phù hợp khởi đầu',
    description: 'Lựa chọn cơ bản cho quảng cáo nhanh, nhỏ gọn và tối ưu chi phí.',
    features: ['In số lượng từ 50 sản phẩm', 'Thiết kế mẫu đơn giản', 'Hỗ trợ tư vấn 1:1', 'Giao hàng trong 3-5 ngày'],
    buttonText: 'Chọn gói',
    popular: false,
  },
  {
    name: 'Gói Chuẩn',
    price: '299k',
    note: 'Phổ biến nhất',
    description: 'Cân bằng giữa chất lượng in ấn, nhận diện thương hiệu và thời gian xử lý nhanh.',
    features: ['Tùy chỉnh layout theo yêu cầu', 'Hỗ trợ file gốc và mockup', 'Ưu tiên xử lý đơn hàng', 'Bảo hành tư vấn sau in'],
    buttonText: 'Đặt ngay',
    popular: true,
  },
  {
    name: 'Gói Premium',
    price: '599k',
    note: 'Cho doanh nghiệp',
    description: 'Gói chuyên nghiệp với thiết kế nâng cao, sản phẩm ấn tượng và hỗ trợ toàn diện.',
    features: ['Thiết kế thương hiệu chuyên sâu', 'Mẫu in cao cấp và độ bền tốt', 'Hỗ trợ tư vấn chiến lược', 'Đội ngũ chăm sóc ưu tiên'],
    buttonText: 'Yêu cầu báo giá',
    popular: false,
  },
]

const categories = [
  {
    name: 'Danh Thiếp',
    price: 'Từ 85.000đ',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Poster - Standee',
    price: 'Từ 250.000đ',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bao Bì',
    price: 'Từ 390.000đ',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Thiệp Mời',
    price: 'Từ 180.000đ',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  },
]

const highlights = [
  'In nhanh, giao hàng đúng hẹn',
  'Tư vấn thiết kế miễn phí',
  'Đội ngũ hỗ trợ chuyên nghiệp',
  'Báo giá minh bạch rõ ràng',
]

export default function Projects() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-teal-600 via-cyan-600 to-sky-700 text-white shadow-lg">
        <div className="grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-100">Bảng giá</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Giải pháp in ấn toàn diện cho thương hiệu của bạn.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-100">
              Từ danh thiếp, poster, bao bì đến item quảng cáo sự kiện, chúng tôi giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp với chi phí hiệu quả.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Nhận báo giá ngay
              </a>
              <a
                href="/products"
                className="rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Xem sản phẩm
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
              alt="Workshop in ấn"
              className="h-64 w-full rounded-3xl object-cover sm:col-span-2 sm:h-72"
            />
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80"
              alt="Thiết kế marketing"
              className="h-48 w-full rounded-3xl object-cover"
            />
            <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-teal-100">Hotline</p>
              <p className="mt-2 text-2xl font-semibold">0902 31 31 93</p>
              <p className="mt-2 text-sm text-slate-100">Tư vấn 24/7 - báo giá nhanh - hỗ trợ thiết kế.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Danh mục phổ biến</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Các sản phẩm được khách hàng lựa chọn nhiều nhất</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <img src={category.image} alt={category.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{category.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Thiết kế chuyên nghiệp, phù hợp chiến dịch thương hiệu và sự kiện.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Vì sao chọn chúng tôi</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Từ ý tưởng đến sản phẩm hoàn thiện, mọi bước đều rõ ràng.</h2>
          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <span className="mt-1 text-lg text-teal-600">✓</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-sm lg:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-300">Quy trình</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-teal-200">01</p>
              <p className="mt-2 font-semibold">Khảo sát nhu cầu</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-teal-200">02</p>
              <p className="mt-2 font-semibold">Lên ý tưởng & thiết kế</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-teal-200">03</p>
              <p className="mt-2 font-semibold">In ấn & giao hàng</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Bảng giá</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Chọn gói phù hợp với chiến dịch của bạn</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-sm transition duration-200 ${
                plan.popular
                  ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-[0.3em] text-teal-600">{plan.note}</p>
                {plan.popular && (
                  <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">Nổi bật</span>
                )}
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-4 text-slate-600">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-500">/ gói</span>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-teal-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-2xl px-4 py-3 font-semibold transition ${
                  plan.popular
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
