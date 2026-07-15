export default function Contact() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Liên hệ</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Hãy bắt đầu hành trình số của bạn.</h1>
        <p className="mt-6 text-slate-600">
          Gửi cho chúng tôi thông tin dự án và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
        <div className="mt-8 space-y-3 text-slate-600">
          <p>📧 hello@innguyenha.com</p>
          <p>📍 Hà Nội, Việt Nam</p>
          <p>📞 +84 999 999 999</p>
        </div>
      </section>

      <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" placeholder="Họ tên" />
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" placeholder="Email" />
        </div>
        <input className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" placeholder="Chủ đề" />
        <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" placeholder="Nội dung dự án" />
        <button className="mt-4 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700">
          Gửi yêu cầu
        </button>
      </form>
    </div>
  )
}
