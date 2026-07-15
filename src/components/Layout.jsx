import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-in-nguyen-ha-new.svg'

const navItems = [
  { name: 'Trang chủ', to: '/' },
  { name: 'Về chúng tôi', to: '/about' },
  { name: 'Dịch vụ', to: '/services' },
  { name: 'Bảng giá', to: '/projects' },
  { name: 'Sản phẩm', to: '/products' },
  { name: 'Liên hệ', to: '/contact' },
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="In Nguyên Hà logo" className="h-10 w-auto" />
          </NavLink>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-teal-600'
                    : 'transition hover:text-slate-900'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <a
            href="/contact"
            className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-500/20"
          >
            Đặt lịch tư vấn
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 In Nguyên Hà. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <a href="/about" className="transition hover:text-slate-900">
              Về chúng tôi
            </a>
            <a href="/services" className="transition hover:text-slate-900">
              Dịch vụ
            </a>
            <a href="/contact" className="transition hover:text-slate-900">
              Liên hệ
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
