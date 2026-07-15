const products = [
  {
    name: 'Danh thiếp',
    desc: 'Thiết kế và in danh thiếp chất lượng cao cho doanh nghiệp.',
    price: 'Từ 200.000đ/100 tờ',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Thiệp mời',
    desc: 'Thiệp cưới, thiệp sinh nhật, thiệp sự kiện với phong cách riêng.',
    price: 'Từ 350.000đ/100 tờ',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tờ rơi',
    desc: 'In tờ rơi quảng cáo đẹp mắt, nhiều định dạng và kích thước.',
    price: 'Từ 180.000đ/500 tờ',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Brochure',
    desc: 'Brochure, catalog và cuốn giới thiệu sản phẩm chuyên nghiệp.',
    price: 'Từ 650.000đ/100 cuốn',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Poster',
    desc: 'Poster kích thước lớn cho sự kiện, khuyến mãi và quảng bá.',
    price: 'Từ 280.000đ/1 tấm',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Banner & Băng rôn',
    desc: 'Banner, băng rôn, pano quảng cáo ngoài trời và nội thất.',
    price: 'Từ 450.000đ/1 tấm',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Standee',
    desc: 'Standee, backdrop và hình ảnh trưng bày chuyên nghiệp.',
    price: 'Từ 700.000đ/1 bộ',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Decal & Sticker',
    desc: 'Tem nhãn, decal dán cửa, sticker quảng cáo và nhãn sản phẩm.',
    price: 'Từ 120.000đ/100 tờ',
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bao bì carton',
    desc: 'Hộp carton, hộp đựng sản phẩm và bao bì thương mại.',
    price: 'Từ 1.200.000đ/100 hộp',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Menu & Thực đơn',
    desc: 'Menu nhà hàng, thực đơn quán cafe và menu sự kiện.',
    price: 'Từ 250.000đ/100 tờ',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bao thư',
    desc: 'Bao thư, phong bì, thư tín và tài liệu doanh nghiệp.',
    price: 'Từ 180.000đ/100 phong bì',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Hóa đơn & Biểu mẫu',
    desc: 'In hóa đơn, phiếu thu, phiếu chi và tài liệu nội bộ.',
    price: 'Từ 90.000đ/200 tờ',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sổ tay & Notebook',
    desc: 'Sổ tay, sổ ghi chú, planner và cuốn notes.',
    price: 'Từ 320.000đ/50 cuốn',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kẹp file & Folder',
    desc: 'Folder, bìa hồ sơ, kẹp tài liệu và bìa đựng giấy.',
    price: 'Từ 150.000đ/50 cái',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lịch treo tường',
    desc: 'Lịch năm, lịch treo tường và lịch bàn làm việc.',
    price: 'Từ 220.000đ/50 tờ',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Biển hiệu',
    desc: 'Biển tên, bảng hiệu, biển quảng cáo và bảng thông tin.',
    price: 'Từ 1.500.000đ/1 bảng',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tem nhãn sản phẩm',
    desc: 'Tem nhãn, mã vạch, nhãn sản phẩm và nhãn vận chuyển.',
    price: 'Từ 160.000đ/500 tem',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Products() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Danh mục sản phẩm</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
          Tất cả các sản phẩm in ấn dành cho doanh nghiệp và sự kiện
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Chúng tôi cung cấp đa dạng các loại sản phẩm in ấn từ vật liệu văn phòng, quảng cáo đến bao bì thương hiệu.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-teal-600">{product.price}</span>
                <a href="/contact" className="text-sm font-medium text-slate-700 transition hover:text-teal-600">
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
