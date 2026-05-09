import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-soft-cloud px-4 py-4 md:px-8 flex justify-between items-center h-16 transition-all duration-300">
        <div className="font-display text-2xl tracking-wide uppercase font-bold">
          BLAQ
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
          <a href="#" className="hover:opacity-60 transition-opacity duration-300">New Arrivals</a>
          <a href="#" className="hover:opacity-60 transition-opacity duration-300">Collection</a>
          <a href="#" className="hover:opacity-60 transition-opacity duration-300">Editorial</a>
          <a href="#" className="hover:opacity-60 transition-opacity duration-300">About</a>
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
          <div className="absolute inset-0 z-0 bg-soft-cloud">
            <Image
              src="/images/hero_jacket.png"
              alt="Model wearing sleek black jacket"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative z-10 text-center px-4 flex flex-col items-center mt-20 md:mt-0">
            <h1 className="font-display text-white text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] uppercase tracking-wide mb-8 drop-shadow-sm leading-[0.9]">
              The Black<br/>Standard
            </h1>
            <button className="bg-ink text-white px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors duration-300 active:scale-95 flex items-center justify-center">
              Shop Collection
            </button>
          </div>
        </section>

        {/* Limited Drop / Hype Banner */}
        <section className="bg-ink text-white py-4 px-4 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
           <div className="font-semibold text-xs md:text-sm uppercase tracking-widest text-center">
             The Void Collection — Exclusive Release
           </div>
           <div className="flex gap-4 font-display text-2xl tracking-wider">
             <div className="flex flex-col items-center"><span>24</span><span className="text-[10px] font-sans tracking-widest text-gray-400">HRS</span></div>
             <span className="text-gray-500">:</span>
             <div className="flex flex-col items-center"><span>00</span><span className="text-[10px] font-sans tracking-widest text-gray-400">MIN</span></div>
             <span className="text-gray-500">:</span>
             <div className="flex flex-col items-center"><span>00</span><span className="text-[10px] font-sans tracking-widest text-gray-400">SEC</span></div>
           </div>
           <button className="text-xs uppercase tracking-widest font-bold border-b border-white pb-0.5 hover:text-gray-300 hover:border-gray-300 transition-colors duration-300">
             Sign Up for Early Access
           </button>
        </section>

        {/* Featured Section */}
        <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-wide">Featured</h2>
            
            {/* Tabs */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
              <button className="bg-ink text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 shrink-0">
                Trending Drops
              </button>
              <button className="bg-soft-cloud text-ink px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap hover:bg-gray-200 transition-colors duration-300 shrink-0">
                New Arrivals
              </button>
              <button className="bg-soft-cloud text-ink px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap hover:bg-gray-200 transition-colors duration-300 shrink-0">
                Best Sellers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div className="pt-4 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-base group-hover:text-gray-600 transition-colors duration-300">Apex Shell Jacket</h3>
                  <span className="font-semibold text-base">$220</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Tech Nylon / Black</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[4/5] bg-soft-cloud w-full overflow-hidden">
                <Image
                  src="/images/product_hoodie_stone.png"
                  alt="Heavyweight Studio Hoodie"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-4 flex flex-col gap-1">
                 <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-base group-hover:text-gray-600 transition-colors duration-300">Heavyweight Studio Hoodie</h3>
                  <span className="font-semibold text-base">$140</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Organic Cotton / Stone</p>
              </div>
            </div>

            {/* Product 3 */}
             <div className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[4/5] bg-soft-cloud w-full overflow-hidden">
                <Image
                  src="/images/product_trackpant.png"
                  alt="Core Trackpant"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-4 flex flex-col gap-1">
                 <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-base group-hover:text-gray-600 transition-colors duration-300">Core Trackpant</h3>
                  <span className="font-semibold text-base">$110</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Cotton Blend / Black</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[4/5] bg-soft-cloud w-full overflow-hidden">
                 <div className="absolute top-4 left-4 z-10 bg-sale text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  Sale
                </div>
                <Image
                  src="/images/product_tee_olive.png"
                  alt="Oversized Essential Tee"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
               <div className="pt-4 flex flex-col gap-1">
                 <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-base group-hover:text-gray-600 transition-colors duration-300">Oversized Essential Tee</h3>
                  <div className="flex gap-2">
                    <span className="font-semibold text-base text-sale">$55</span>
                    <span className="text-gray-400 line-through text-xs mt-0.5">$75</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Supima Cotton / Olive</p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Showcase */}
        <section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category 1 */}
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden group cursor-pointer">
               <Image
                  src="/images/category_hoodies.png"
                  alt="Shop Hoodies"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"/>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="bg-white text-ink w-fit px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Category
                  </div>
                  <div>
                    <h2 className="font-display text-white text-5xl md:text-7xl uppercase tracking-wide leading-none mb-4">
                      The Hoodie<br/>Archive
                    </h2>
                    <span className="text-white border-b border-white pb-1 text-sm font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                      Shop Now
                    </span>
                  </div>
                </div>
            </div>

            {/* Category 2 */}
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden group cursor-pointer">
               <Image
                  src="/images/category_ts.png"
                  alt="Shop Oversized T-Shirts"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"/>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="bg-white text-ink w-fit px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Category
                  </div>
                  <div>
                    <h2 className="font-display text-white text-5xl md:text-7xl uppercase tracking-wide leading-none mb-4">
                      Oversized<br/>Essentials
                    </h2>
                    <span className="text-white border-b border-white pb-1 text-sm font-semibold uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                      Shop Now
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Brand Identity / Vertical Integration */}
        <section className="bg-ink text-white py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Why Blaq</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-wide mb-8 md:mb-10 leading-[0.9]">
              Vertical<br/>Integration
            </h2>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed font-sans max-w-2xl mb-12">
              We are not just a brand — we are the makers behind every piece. From sourcing premium raw fibers to the final stitch, we control the entire journey in-house. Every garment undergoes uncompromising quality checks, crafted for those who believe true minimalism deserves perfection. By eliminating middlemen, we deliver elevated craftsmanship, superior quality, and authenticity in every thread.
            </p>
            <button className="bg-white text-ink px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors duration-300 active:scale-95">
              Read Our Story
            </button>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto w-full overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-wide mb-4">Community</h2>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">@BLAQ.STANDARD</p>
          </div>

          {/* Social Grid */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
             <div className="relative w-full md:w-1/3 aspect-[4/5] bg-soft-cloud group overflow-hidden">
               <Image
                  src="/images/social_proof_1.png"
                  alt="Customer wearing BLAQ"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-3">
                  <p className="text-xs font-semibold">"The fit on the oversized tee is unmatched. Perfectly boxed."</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">— @marcus.fits</p>
                </div>
             </div>
             <div className="relative w-full md:w-1/3 aspect-[4/5] bg-ink group overflow-hidden flex flex-col justify-center items-center text-center p-8 text-white">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">"BLAQ redefined my entire wardrobe. Quality over quantity, always."</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Highsnobiety Features</p>
             </div>
             <div className="relative w-full md:w-1/3 aspect-[4/5] bg-soft-cloud group overflow-hidden">
                <Image
                  src="/images/social_proof_2.png"
                  alt="Customer wearing BLAQ"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-3">
                  <p className="text-xs font-semibold">"Studio hoodie is incredibly heavy. Instant staple."</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">— @david.x</p>
                </div>
             </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-soft-cloud py-24 px-4 md:px-8">
           <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
             <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide mb-4">Join The Standard</h2>
             <p className="text-gray-600 text-sm mb-10 max-w-md leading-relaxed">
               Subscribe for early access to limited drops, exclusive community discounts, and behind-the-scenes looks at our manufacturing process.
             </p>
             
             <form className="w-full flex flex-col sm:flex-row gap-4">
               <input 
                 type="email" 
                 placeholder="ENTER YOUR EMAIL" 
                 className="flex-grow bg-white border border-gray-300 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all"
                 required
               />
               <button type="submit" className="bg-ink text-white px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap">
                 Subscribe
               </button>
             </form>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-canvas py-16 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-t border-soft-cloud">
        <div className="flex flex-col items-center md:items-start gap-4">
           <div className="font-display text-4xl font-bold tracking-widest uppercase">
            BLAQ
          </div>
          <div className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} BLAQ. ALL RIGHTS RESERVED.
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16 text-center md:text-left w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest">Shop</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">All Products</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">T-Shirts</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Bottoms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Outerwear</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest">Support</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">FAQ</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Returns</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Shipping</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Contact</a>
          </div>
           <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest mt-8 sm:mt-0">Social</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Instagram</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">TikTok</a>
            <a href="#" className="text-sm text-gray-500 hover:text-ink transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
