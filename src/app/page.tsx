import Chatbot from "@/components/Chatbot";

export default function Page() {
  return (
    <>
      {/* 1. Header (TopNavBar) */}
      <header className="bg-[#fcf9f8]/80 dark:bg-[#1c1b1b]/80 backdrop-blur-xl docked full-width top-0 sticky z-50 tonal-shift-surface-container-low">
        <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-headline font-bold text-[#3b4e2a] dark:text-[#fcf9f8]">VN-EXCELLENCE</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#3b4e2a] dark:text-[#fcf9f8] border-b-2 border-[#526640] pb-1 font-headline italic font-medium transition-colors duration-300" href="#">Giải pháp&nbsp;</a>
            <a className="text-[#44483f] dark:text-[#c5c8bc] font-body hover:text-[#3b4e2a] transition-colors duration-300" href="#">Chuyên gia&nbsp;&nbsp;</a>
            <a className="text-[#44483f] dark:text-[#c5c8bc] font-body hover:text-[#3b4e2a] transition-colors duration-300" href="#">Về chúng tôi</a>
            <a className="text-[#44483f] dark:text-[#c5c8bc] font-body hover:text-[#3b4e2a] transition-colors duration-300" href="#">Liên hệ</a>
          </div>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-medium active:scale-95 transition-transform">
            Bắt đầu ngay
          </button>
        </nav>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section className="relative pt-20 pb-32 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-tight mb-16 max-w-4xl">10X ngay hôm nay</h1>
            <div className="relative w-full max-w-6xl mt-8">
              {/* Wide Sage Background Layer */}
              <div className="absolute inset-0 bg-secondary-fixed rounded-lg transform -rotate-1 translate-y-8 h-full w-full"></div>
              {/* Overlapping Dashboard Image */}
              <div className="relative z-10 bg-surface-container-lowest rounded-lg p-4 md:p-8 shadow-sm">
                <img alt="Professional team consultation" className="w-full h-auto object-cover rounded-[24px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2lYgzGBroavgnKUwgFD8A-kn4gO8KAJSojqf5kaC0b88GzZnAz1329IuHDL0AHS62R5Xz-G3aeFdgwm8znyhDkZipvlpQqo8LCVbCPALyW9fotQMcXxV5wsVPB68JylDqdsCfT93N7eWMZHLCzbdiUg3G3aDXgTNZ_MBwds3QeqMg_DKbhqBuchvY3qUzdrLTKTmuuT3ZO-O1TyXUJFgGIvyjWD3vdl_LFiapX0OAD5GyGOr3Yui6qWzzDr9vXUAGYkKOCzDLpuI" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Logo Cloud */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-12">Được tin dùng bởi</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
              <span className="text-2xl font-headline font-bold">ARCANE</span>
              <span className="text-2xl font-headline font-bold">LUMIERE</span>
              <span className="text-2xl font-headline font-bold">NORDIC</span>
              <span className="text-2xl font-headline font-bold">OBSIDIAN</span>
              <span className="text-2xl font-headline font-bold">VERIDIAN</span>
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="font-label text-sm font-bold tracking-[0.2em] text-primary-container">GIẢI PHÁP</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-surface mt-6 max-w-2xl">Tối ưu hoá cấu trúc vận hành doanh nghiệp</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h3 className="text-xl font-bold font-body text-on-surface">LEAN</h3>
                <p className="text-on-surface-variant leading-relaxed">Các giải pháp Lean giúp loại bỏ các hoạt động không tạo ra giá trị, giảm lãng phí, tăng năng suất và hiệu quả.</p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">grid_view</span>
                </div>
                <h3 className="text-xl font-bold font-body text-on-surface">SIX SIGMA</h3>
                <p className="text-on-surface-variant leading-relaxed">Các giải pháp Six Sigma giúp giảm sai lỗi, kiểm soát biến động và đạt các yêu cầu quốc tế.</p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="text-xl font-bold font-body text-on-surface">VALUE CHAIN</h3>
                <p className="text-on-surface-variant leading-relaxed">Minh bạch về truy suất nguồn gốc, giảm rủi ro.</p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <h3 className="text-xl font-bold font-body text-on-surface">VALUE INNOVATION</h3>
                <p className="text-on-surface-variant leading-relaxed">Sáng tạo không chỉ là cải tiến mà tạo ra giá trị khác biệt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Component: Feature Pull-Quote */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-4xl mx-auto relative py-16">
            <div className="absolute top-0 left-0 -translate-x-8 -translate-y-4 w-32 h-32 bg-primary-fixed rounded-full opacity-30 z-0"></div>
            <blockquote className="font-headline text-4xl md:text-5xl italic text-primary text-center leading-tight relative z-10">
              "Các giải pháp của VN-Excellence hướng đến vận hành hoàn hảo, giảm rủi ro từ cốt lõi"
            </blockquote>
            <cite className="block text-center mt-8 font-label text-on-surface-variant not-italic">— Giám đốc Sáng tạo, Arcane Studio</cite>
          </div>
        </section>

        {/* 5. Image Section */}
        <section className="px-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="w-full aspect-[21/9] overflow-hidden rounded-xl">
              <img alt="Sleek modern digital dashboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFHRUaMcFcI6E0XyZfAFbevpVh8Tplop6cx-cNn_zyDpocFt_k_ne4Dx8PfWdsPS4y7U_njx55gnB_9stUEzGSN3ZSKKG_BLMyOs0auJmBM5QmiazJ3Pg8d-ILAb90MZqPldIbtGiAVmkmzQFbCOZDflbY1Hl7yK5IjnkfKMhXj_fuHrhUvwZmM2qvSEEkhR3m4aap9JJNCDLaRUjcQKQlHwn5RFQrJOCaBiKjXUUC02clSKFMvBiZbv0uvU6J3wlbOrNO0oYOM6c" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f6f3f2] dark:bg-[#1c1b1b] full-width p-12 tonal-shift-from-surface">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
          <div className="text-lg font-headline font-bold text-[#3b4e2a] dark:text-[#fcf9f8]">VN-EXCELLENCE</div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-sm tracking-wide">
            <a className="text-[#44483f] hover:underline decoration-[#9CA88E] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Điều khoản</a>
            <a className="text-[#44483f] hover:underline decoration-[#9CA88E] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Bảo mật</a>
            <a className="text-[#44483f] hover:underline decoration-[#9CA88E] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Cài đặt</a>
          </div>
          <p className="text-[#44483f] font-body text-sm tracking-wide">
            © 2026 <span style={{ color: "rgb(59, 78, 42)", fontFamily: "Newsreader", fontSize: "18px", letterSpacing: "normal" }}>VN-EXCELLENCE</span>. Bảo lưu mọi quyền.
          </p>
        </div>
      </footer>
      
      {/* Tính năng AI Chatbot */}
      <Chatbot />
    </>
  );
}
