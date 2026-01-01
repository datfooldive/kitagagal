import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useTheme } from "./hooks/useTheme";
import { useTranslation } from "react-i18next";
import {
  Sun,
  Moon,
  Rocket,
  FileQuestion,
  RefreshCcw,
  Quote,
  Twitter,
  Github,
  Linkedin,
  TriangleAlert,
  ArrowRight,
  Globe,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-x-hidden selection:bg-sky-200 dark:selection:bg-sky-900 transition-colors duration-300">
      {/* SEO Metadata */}
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <link rel="canonical" href="https://kitagagal.vercel.app/" />
      <meta name="keywords" content={t("meta.keywords")} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kitagagal.vercel.app/" />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kitagagal.vercel.app/" />
      <meta property="twitter:title" content={t("meta.title")} />
      <meta property="twitter:description" content={t("meta.description")} />
      <meta
        property="twitter:image"
        content="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop"
      />

      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              <TriangleAlert
                size={20}
                fill="currentColor"
                className="text-white"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              kita gagal.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a
              href="#filosofi"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {t("nav.philosophy")}
            </a>
            <a
              href="#timeline"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {t("nav.timeline")}
            </a>
            <a
              href="#tim"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {t("nav.team")}
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1 font-bold text-xs"
              aria-label={t("nav.switch_lang")}
            >
              <Globe size={18} />
              <span>{i18n.language.toUpperCase()}</span>
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-5 py-2.5 text-sm font-bold text-white bg-sky-500 rounded-full hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200 dark:shadow-none cursor-pointer"
            >
              {t("nav.donate")}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={targetRef}
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden"
      >
        {/* Faded Grid Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl [mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_70%)] dark:[mask-image:radial-gradient(ellipse_at_top,white_10%,transparent_60%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-sky-600 dark:text-sky-300 uppercase bg-sky-100 dark:bg-sky-900/30 rounded-full"
          >
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8"
          >
            {t("hero.title_start")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 dark:from-sky-300 dark:to-blue-500">
              {t("hero.title_highlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
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
              className="w-full md:w-auto px-8 py-4 text-lg font-bold text-white bg-sky-500 dark:bg-sky-600 rounded-full shadow-xl shadow-sky-200 dark:shadow-none hover:bg-sky-600 dark:hover:bg-sky-500 transition-all cursor-pointer"
            >
              {t("hero.cta_primary")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 text-lg font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              {t("hero.cta_secondary")}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee / Social Proof (Irony) */}
      <div
        className="bg-sky-50 dark:bg-slate-900/50 py-12 overflow-hidden border-y border-sky-100 dark:border-slate-800"
        aria-hidden="true"
      >
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex gap-16 items-center text-sky-900/40 dark:text-sky-100/20 text-2xl font-bold uppercase tracking-widest"
            >
              {t("marquee.text")}
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <section
        id="filosofi"
        className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-slate-900 dark:text-white"
            >
              {t("philosophy.title_start")}{" "}
              <span className="text-sky-500 dark:text-sky-400">
                {t("philosophy.title_highlight")}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {t("philosophy.desc")}
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-sky-50 dark:bg-slate-800/50 rounded-2xl border border-sky-100 dark:border-slate-800">
                <h3 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">
                  1,024+
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {t("philosophy.stat_projects")}
                </p>
              </div>
              <div className="p-6 bg-sky-50 dark:bg-slate-800/50 rounded-2xl border border-sky-100 dark:border-slate-800">
                <h3 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">
                  ∞
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {t("philosophy.stat_bugs")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-sky-100 dark:shadow-none"
          >
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=800&auto=format&fit=crop"
              alt={t("philosophy.image_alt")}
              title={t("philosophy.image_alt")}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium italic">
                {t("philosophy.image_caption")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature/Steps Section */}
      <section
        id="timeline"
        className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("timeline.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {t("timeline.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("timeline.step1_title"),
                desc: t("timeline.step1_desc"),
                icon: (
                  <Rocket
                    size={48}
                    className="text-sky-500"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: t("timeline.step2_title"),
                desc: t("timeline.step2_desc"),
                icon: (
                  <FileQuestion
                    size={48}
                    className="text-sky-500"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: t("timeline.step3_title"),
                desc: t("timeline.step3_desc"),
                icon: (
                  <RefreshCcw
                    size={48}
                    className="text-sky-500"
                    strokeWidth={1.5}
                  />
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-slate-900/50 transition-all"
              >
                <div className="mb-6" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t("gallery.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {t("gallery.subtitle")}
              </p>
            </div>
            <button className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold hover:underline cursor-pointer group">
              {t("gallery.see_all")}{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                alt={t("gallery.img1_alt")}
                title={t("gallery.img1_alt")}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {t("gallery.img1_label")}
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
                alt={t("gallery.img2_alt")}
                title={t("gallery.img2_alt")}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {t("gallery.img2_label")}
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600&auto=format&fit=crop"
                alt={t("gallery.img3_alt")}
                title={t("gallery.img3_alt")}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {t("gallery.img3_label")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: t("testimonials.person1_role"),
                amount: "Rp 50.000",
                quote: t("testimonials.person1_quote"),
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Siti Aminah",
                role: t("testimonials.person2_role"),
                amount: "Rp 25.000",
                quote: t("testimonials.person2_quote"),
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Kevin Anggara",
                role: t("testimonials.person3_role"),
                amount: "Rp 10.000",
                quote: t("testimonials.person3_quote"),
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative"
              >
                <div
                  className="absolute top-8 right-8 text-sky-100 dark:text-sky-900/50"
                  aria-hidden="true"
                >
                  <Quote size={48} fill="currentColor" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-100 dark:border-slate-700">
                    <img
                      src={item.image}
                      alt={`Foto profil ${item.name}`}
                      title={`Foto profil ${item.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.role}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 text-xs font-bold rounded-full">
                      {t("testimonials.donation_label")}: {item.amount}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic relative z-10">
                  {item.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-sky-900 dark:bg-sky-950 relative overflow-hidden text-center transition-colors">
        <div
          className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {t("cta.title_start")} <br />
            <span className="text-sky-300">
              {t("cta.title_highlight")}
            </span>
          </motion.h2>
          <p className="text-sky-100 text-lg">
            {t("cta.desc")}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="px-10 py-5 bg-white text-sky-900 text-xl font-bold rounded-full shadow-2xl hover:bg-sky-50 transition-colors cursor-pointer">
              {t("cta.button")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">kita gagal.</h3>
            <p className="max-w-xs leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "Twitter",
                  label: t("footer.social.twitter"),
                  icon: Twitter,
                },
                {
                  name: "GitHub",
                  label: t("footer.social.github"),
                  icon: Github,
                },
                {
                  name: "LinkedIn",
                  label: t("footer.social.linkedin"),
                  icon: Linkedin,
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t("footer.nav_header")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.trace")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("nav.donate")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t("footer.contact_header")}</h4>
            <ul className="space-y-4">
              <li>error@kitagagal.com</li>
              <li>Jl. Buntu No. 404</li>
              <li>Jakarta Selatan, ID</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-white">
              {t("footer.terms")}
            </a>
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
  );
}