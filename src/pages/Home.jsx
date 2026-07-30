const stats = [
  { value: '500+', label: 'Đơn hàng hoàn thành' },
  { value: '98%', label: 'Khách hàng hài lòng' },
  { value: '24/7', label: 'Hỗ trợ nhanh chóng' },
]

const featuredServices = [
  'In danh thiếp chuyên nghiệp',
  'In catalogue doanh nghiệp',
  'In túi giấy & hộp giấy',
]

export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <section className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/60 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">

        <div className="space-y-6">

          <span className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-700">
            Xưởng in ấn chuyên nghiệp
          </span>


          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Tạo dấu ấn thương hiệu
            <br />
            qua từng sản phẩm in ấn.
          </h1>


          <p className="max-w-2xl text-lg text-slate-600">
            In Nguyên Hà cung cấp giải pháp thiết kế và in ấn chuyên nghiệp:
            danh thiếp, tờ rơi, catalogue, bao bì, túi giấy và các sản phẩm
            nhận diện thương hiệu cho doanh nghiệp.
          </p>


          <div className="flex flex-wrap gap-4">

            <a
              href="/services"
              className="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Xem dịch vụ
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Năng lực in ấn
              </p>


              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                Chất lượng tạo nên thương hiệu
              </h2>


              <p className="mt-2 text-sm text-slate-600">
                Quy trình in chuyên nghiệp, màu sắc chuẩn, sản phẩm sắc nét
                và đảm bảo tiến độ.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {featuredServices.map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* Danh mục */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">

        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
              Danh mục sản phẩm
            </p>


            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Các sản phẩm in ấn nổi bật
            </h2>

          </div>

        </div>


        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            [
              'In ấn văn phòng',
              'Danh thiếp, bao thư, giấy tiêu đề, hồ sơ doanh nghiệp.',
            ],
            [
              'In quảng cáo',
              'Tờ rơi, poster, catalogue, brochure giúp tăng nhận diện thương hiệu.',
            ],
            [
              'In bao bì sản phẩm',
              'Túi giấy, hộp giấy, tem nhãn giúp sản phẩm chuyên nghiệp hơn.',
            ],
          ].map(([title, desc]) => (

            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >

              <h3 className="font-semibold text-slate-900">
                {title}
              </h3>


              <p className="mt-2 text-sm text-slate-600">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* Banner */}
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">

        <div className="flex flex-col justify-center">

          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
            In ấn chuyên nghiệp
          </p>


          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Từ danh thiếp đến bao bì, mọi sản phẩm đều được chăm chút.
          </h2>


          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Mỗi sản phẩm được thiết kế và in ấn cẩn thận, phù hợp cho doanh
            nghiệp, cửa hàng và thương hiệu.
          </p>


          <div className="mt-6 flex flex-wrap gap-3">

            {[
              'Danh thiếp',
              'Tờ rơi',
              'Catalogue',
              'Bao bì',
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm text-slate-700"
              >
                {item}
              </span>

            ))}

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



      {/* Stats */}
      <section className="grid gap-4 md:grid-cols-3">

        {stats.map((item) => (

          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
          >

            <p className="text-3xl font-semibold text-teal-600">
              {item.value}
            </p>


            <p className="mt-2 text-sm text-slate-600">
              {item.label}
            </p>

          </div>

        ))}

      </section>



      {/* Hình ảnh + giới thiệu */}
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Thiết kế in ấn"
            className="h-72 w-full object-cover"
          />

        </div>


        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
            Thiết kế & in ấn
          </p>


          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            Mẫu in chất lượng cao cho thương hiệu của bạn
          </h3>


          <p className="mt-4 text-slate-600">
            Từ catalogue, tờ rơi tới bao bì, mỗi sản phẩm đều được kiểm soát
            màu sắc và độ sắc nét để tăng hiệu quả truyền thông.
          </p>


          <a
            href="/services"
            className="mt-6 inline-flex text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            Xem tất cả dịch vụ →
          </a>

        </div>

      </section>



      {/* Why choose */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-teal-600">
            Vì sao chọn chúng tôi
          </p>


          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Đối tác in ấn đáng tin cậy cho doanh nghiệp
          </h2>

        </div>


        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            [
              'Chất lượng sản phẩm',
              'Kiểm soát màu sắc, giấy in và độ hoàn thiện trong từng sản phẩm.',
            ],
            [
              'Sản xuất linh hoạt',
              'Nhận đơn hàng nhỏ và số lượng lớn theo nhu cầu.',
            ],
            [
              'Hỗ trợ tận tâm',
              'Tư vấn thiết kế, chất liệu và giải pháp phù hợp.',
            ],
          ].map(([title, desc]) => (

            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <h3 className="font-semibold text-slate-900">
                {title}
              </h3>


              <p className="mt-2 text-sm text-slate-600">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </section>


    </div>
  )
}