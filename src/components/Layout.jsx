import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-in-nguyen-ha-new.svg'

const menuItems = [
  { name: 'Trang chủ', to: '/' },
  { name: 'Bảng báo giá', to: '/projects' },
  { name: 'Dịch vụ', to: '/services' },
  { name: 'Tin tức', to: '/news' },
]

const serviceItems = [
  'In tờ rơi',
  'In Namecard',
  'In Catalogue',
  'In túi giấy',
  'In hộp giấy',
  'In bao thư',
  'In giấy tiêu đề',
]

export default function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-800">

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          {/* LOGO CLICK MỞ MENU */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="In Nguyên Hà logo"
              className="h-10 w-auto"
            />
          </button>


          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">

            <NavLink
              to="/"
              className="transition hover:text-teal-600"
            >
              Trang chủ
            </NavLink>

            <NavLink
              to="/about"
              className="transition hover:text-teal-600"
            >
              Về chúng tôi
            </NavLink>

            <NavLink
              to="/services"
              className="transition hover:text-teal-600"
            >
              Dịch vụ
            </NavLink>

            <NavLink
              to="/projects"
              className="transition hover:text-teal-600"
            >
              Bảng giá
            </NavLink>

            <NavLink
              to="/products"
              className="transition hover:text-teal-600"
            >
              Sản phẩm
            </NavLink>

            <NavLink
              to="/contact"
              className="transition hover:text-teal-600"
            >
              Liên hệ
            </NavLink>

          </nav>


          <NavLink
            to="/contact"
            className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-500/20"
          >
            Đặt lịch tư vấn
          </NavLink>

        </div>



        {/* MENU XỔ XUỐNG KHI BẤM LOGO */}

        {openMenu && (

          <div className="border-t border-slate-200 bg-white shadow-xl">

            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">


              <div className="grid gap-4 md:grid-cols-4">

                {menuItems.map((item) => (

                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpenMenu(false)}
                    className="rounded-xl border border-slate-200 p-4 font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                  >
                    {item.name}
                  </NavLink>

                ))}

              </div>



              <div className="mt-6 rounded-2xl bg-slate-50 p-6">

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  Dịch vụ in ấn
                </h3>


                <div className="grid gap-3 md:grid-cols-3">

                  {serviceItems.map((item) => (

                    <NavLink
                      key={item}
                      to="/services"
                      onClick={() => setOpenMenu(false)}
                      className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                    >
                      {item}
                    </NavLink>

                  ))}

                </div>

              </div>


            </div>

          </div>

        )}

      </header>




      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {children}
      </main>




      <footer className="border-t border-slate-200 bg-slate-50">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <p>
            © 2026 In Nguyên Hà. Tất cả quyền được bảo lưu.
          </p>


          <div className="flex gap-4">

            <NavLink to="/about">
              Về chúng tôi
            </NavLink>

            <NavLink to="/services">
              Dịch vụ
            </NavLink>

            <NavLink to="/contact">
              Liên hệ
            </NavLink>

          </div>

        </div>

      </footer>





      {/* NÚT ZALO + ĐIỆN THOẠI */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">


        <a
          href="https://zalo.me/0909123456"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg transition hover:scale-110"
        >
          Zalo
        </a>


        <a
          href="tel:0909123456"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-lg transition hover:scale-110"
        >
          ☎
        </a>


      </div>


    </div>
  )
}