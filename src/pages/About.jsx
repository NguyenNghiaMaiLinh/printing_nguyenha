const values = [
  ['Sứ mệnh', 'Chúng tôi giúp doanh nghiệp hiện diện chuyên nghiệp và tạo cảm hứng bằng trải nghiệm số.'],
  ['Giá trị cốt lõi', 'Tận tâm, minh bạch và luôn đặt lợi ích khách hàng lên hàng đầu.'],
  ['Phương pháp', 'Kết hợp tư duy chiến lược, thiết kế và công nghệ để tạo ra giải pháp thực tế.'],
]

export default function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Về chúng tôi</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Chúng tôi là đối tác xây dựng thương hiệu số đáng tin cậy.</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Từ ý tưởng ban đầu đến triển khai hoàn chỉnh, chúng tôi đồng hành cùng khách hàng nhằm tạo ra những sản phẩm có tính thẩm mỹ cao, hiệu quả và dễ mở rộng.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Đội ngũ chuyên nghiệp</h2>
          <p className="mt-4 text-slate-600">
            Chúng tôi gồm các chuyên gia thiết kế, lập trình và chiến lược nội dung, sẵn sàng biến ý tưởng thành trải nghiệm vượt trội.
          </p>
        </div>
        <div className="grid gap-4">
          {values.map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
