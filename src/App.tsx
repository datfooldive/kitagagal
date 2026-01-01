import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-sky-200">
      
      {/* Sticky Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              !
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">kita gagal.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#filosofi" className="hover:text-sky-600 transition-colors">Filosofi</a>
            <a href="#timeline" className="hover:text-sky-600 transition-colors">Jejak Kegagalan</a>
            <a href="#tim" className="hover:text-sky-600 transition-colors">Tim Gagal</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 text-sm font-bold text-white bg-sky-500 rounded-full hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200"
          >
            Donasi Sekarang
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-100 rounded-full"
          >
            Komunitas Pecinta Kegagalan
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-8"
          >
            Rayakan setiap <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              kegagalanmu.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
          >
            Sukses itu membosankan. Kegagalan mengajarkan kita arti bertahan hidup, 
            memperbaiki bug kehidupan, dan tertawa di atas error log yang merah membara.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 text-lg font-bold text-white bg-sky-500 rounded-full shadow-xl shadow-sky-200 hover:bg-sky-600 transition-all"
            >
              Donasi agar kami sukses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all"
            >
              Lihat portofolio gagal
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee / Social Proof (Irony) */}
      <div className="bg-sky-50 py-12 overflow-hidden border-y border-sky-100">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-16 items-center text-sky-900/40 text-2xl font-bold uppercase tracking-widest">
               <span>404 Not Found</span>
               <span>•</span>
               <span>Server Error 500</span>
               <span>•</span>
               <span>Build Failed</span>
               <span>•</span>
               <span>Runtime Error</span>
               <span>•</span>
               <span>Stack Overflow</span>
               <span>•</span>
               <span>Undefined is not a function</span>
               <span>•</span>
             </div>
           ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <section id="filosofi" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900">
              Kenapa harus <span className="text-sky-500">takut gagal?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Di "Kita Gagal", kami percaya bahwa setiap error code adalah puisi yang belum selesai. 
              Setiap proyek yang mangkrak adalah monumen pembelajaran. Kami tidak menyembunyikan 
              kebodohan kami; kami memamerkannya.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100">
                <h3 className="text-3xl font-bold text-sky-600 mb-2">1,024+</h3>
                <p className="text-sm font-medium text-slate-600">Proyek Mangkrak</p>
              </div>
              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100">
                <h3 className="text-3xl font-bold text-sky-600 mb-2">∞</h3>
                <p className="text-sm font-medium text-slate-600">Bug Diciptakan</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
             <img 
               src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop" 
               alt="Frustrated developer" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent flex items-end p-8">
               <p className="text-white text-lg font-medium italic">
                 "Saya mencoba memperbaiki satu bug, dan melahirkan sepuluh bug baru. Indah sekali."
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Feature/Steps Section */}
      <section id="timeline" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Siklus Hidup Kami</h2>
            <p className="text-slate-600 text-lg">Proses yang kami ulangi setiap hari tanpa rasa jera.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Mulai Semangat", desc: "Punya ide brilian jam 2 pagi, langsung coding tanpa dokumentasi.", icon: "🚀" },
              { title: "Mulai Bingung", desc: "Kenapa kodenya jalan tapi hasilnya salah? Copilot pun menyerah.", icon: "🤔" },
              { title: "Mulai Ulang", desc: "Hapus repo, uninstall VS Code, merenung di pojokan, lalu mulai lagi.", icon: "♻️" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Galeri Error</h2>
              <p className="text-slate-600 text-lg">Keindahan dalam ketidaksempurnaan visual.</p>
            </div>
            <button className="text-sky-600 font-bold hover:underline">Lihat Semua Kegagalan &rarr;</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative rounded-2xl overflow-hidden group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Coding screen" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold text-xl">Spaghetti Code v1</span>
               </div>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative rounded-2xl overflow-hidden group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                 alt="Laptop crash" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold text-xl">Blue Screen</span>
               </div>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative rounded-2xl overflow-hidden group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop" 
                 alt="Coffee spill" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold text-xl">Kopi Tumpah</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-sky-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="text-4xl md:text-5xl font-bold text-white leading-tight"
           >
             Bantu kami berhenti gagal. <br/>
             <span className="text-sky-300">Atau setidaknya gagal dengan gaya.</span>
           </motion.h2>
           <p className="text-sky-100 text-lg">
             Donasimu akan digunakan untuk membeli kopi berkualitas, keyboard mekanikal yang lebih berisik, 
             dan langganan kursus coding yang tidak pernah kami selesaikan.
           </p>
           <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <button className="px-10 py-5 bg-white text-sky-900 text-xl font-bold rounded-full shadow-2xl hover:bg-sky-50 transition-colors">
               Donasi Agar Kami Sukses
             </button>
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">kita gagal.</h3>
            <p className="max-w-xs leading-relaxed mb-6">
              Komunitas pengembang yang bangga akan setiap error, typo, dan logic fallacy yang kami buat.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                   {social[0]}
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jejak Kegagalan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>error@kitagagal.com</li>
              <li>Jl. Buntu No. 404</li>
              <li>Jakarta Selatan, ID</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 Kita Gagal. All rights reserved (maybe).</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Failure</a>
          </div>
        </div>
      </footer>

      {/* Global Styles for specific animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
