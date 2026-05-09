import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-soft-cloud px-4 py-4 md:px-8 flex justify-between items-center h-16">
        <div className="font-display text-2xl tracking-wide uppercase font-bold">
          BLAQ
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
          <a href="#" className="hover:opacity-70 transition-opacity">New Arrivals</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Collection</a>
          <a href="#" className="hover:opacity-70 transition-opacity">About</a>
        </nav>
        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Editorial Campaign Hero */}
        <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-soft-cloud">
            <Image
              src="/images/hero_jacket.png"
              alt="Model wearing sleek black jacket"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center mt-20 md:mt-0">
            <h1 className="font-display text-white text-[4rem] leading-[0.9] md:text-[8rem] lg:text-[10rem] uppercase tracking-wide mb-8">
              The Black<br/>Standard
            </h1>
            <button className="bg-ink text-white px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-black transition-transform active:scale-95 flex items-center justify-center">
              Shop Collection
            </button>
          </div>
        </section>

        {/* Trending Now */}
        <section className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto w-full">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide">Trending Now</h2>
            <a href="#" className="hidden md:block text-sm font-semibold uppercase tracking-widest border-b border-ink pb-1 hover:opacity-70 transition-opacity">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {/* Product 1 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[4/5] bg-soft-cloud w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-ink text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  New
                </div>
                <Image
                  src="/images/product_jacket.png"
                  alt="Apex Shell Jacket"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Apex Shell Jacket</h3>
                  <p className="text-sm text-gray-500 mt-1">Water-repellent Tech Nylon</p>
                </div>
                <span className="font-semibold text-lg">$220</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[4/5] bg-soft-cloud w-full overflow-hidden">
                <Image
                  src="/images/product_trackpant.png"
                  alt="Core Trackpant"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Core Trackpant</h3>
                  <p className="text-sm text-gray-500 mt-1">Heavyweight Cotton Blend</p>
                </div>
                <span className="font-semibold text-lg">$110</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col group cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="relative aspect-[4/5] bg-soft-cloud w-full overflow-hidden">
                 <div className="absolute top-4 left-4 z-10 bg-sale text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  Sale
                </div>
                <Image
                  src="/images/product_tee.png"
                  alt="Premium Essential Tee"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Premium Essential Tee</h3>
                  <p className="text-sm text-gray-500 mt-1">Supima Cotton</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-lg text-sale">$65</span>
                  <span className="text-gray-400 line-through text-sm mt-0.5">$85</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vertical Integration / About Us */}
        <section className="bg-ink text-white py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wide mb-8">
              Vertical<br/>Integration
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans max-w-xl mb-12">
              From fiber to final stitch, we own the process. 0 to 100 quality control for the minimalist purist. We eliminate middlemen to deliver uncompromising quality in every black garment.
            </p>
            <button className="bg-white text-ink px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-gray-100 transition-transform active:scale-95">
              Discover Our Process
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-canvas border-t border-soft-cloud py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display text-3xl font-bold tracking-widest uppercase">
          BLAQ
        </div>
        <div className="flex gap-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
          <a href="#" className="hover:text-ink transition-colors">Instagram</a>
          <a href="#" className="hover:text-ink transition-colors">Twitter</a>
          <a href="#" className="hover:text-ink transition-colors">Contact</a>
        </div>
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} BLAQ. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
