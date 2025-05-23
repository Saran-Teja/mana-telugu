import Head from "next/head";

const sections = [
  {
    id: "hero",
    title: "Mana Telugu Music",
    subtitle: "Experience the best of Telugu music — timeless classics and the latest hits. Curated, celebrated, and reimagined for you.",
    image: "/images/hero-music.jpg",
    cta: "Get Started",
    ctaHref: "#classics",
    bg: "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500",
    text: "text-white",
    hero: true,
  },
  {
    id: "classics",
    title: "Timeless Telugu Classics",
    subtitle:
      "Step into the golden era with our handpicked collection of legendary songs. Explore stories, artists, and the soulful melodies that defined generations.",
    image: "/images/classics-section.jpg",
    bg: "bg-white",
    text: "text-gray-900",
    hero: false,
    reverse: false,
  },
  {
    id: "hits",
    title: "Latest Telugu Hits",
    subtitle:
      "Stay updated with the freshest tracks making waves across the world. Discover trending tunes, upcoming artists, and exclusive video content.",
    image: "/images/hits-section.jpg",
    bg: "bg-gradient-to-r from-blue-100 via-indigo-100 to-pink-100",
    text: "text-gray-900",
    hero: false,
    reverse: true,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mana Telugu Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-700 tracking-tight">Mana Telugu Music</div>
          <nav className="space-x-6">
            <a href="#classics" className="font-medium text-gray-700 hover:text-indigo-500 transition">Classics</a>
            <a href="#hits" className="font-medium text-gray-700 hover:text-indigo-500 transition">Latest Hits</a>
          </nav>
        </div>
      </header>
      <main className="pt-28">
        {sections.map((section, idx) =>
          section.hero ? (
            // HERO SECTION
            <section key={section.id} className={`${section.bg} ${section.text} py-24 flex items-center`}>
              <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="flex-1 space-y-8 text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">{section.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl">{section.subtitle}</p>
                  <a
                    href={section.ctaHref}
                    className="inline-block px-10 py-4 rounded-lg bg-white/90 text-indigo-700 font-bold text-lg shadow-lg hover:bg-indigo-700 hover:text-white transition"
                  >
                    {section.cta}
                  </a>
                </div>
                <div className="flex-1 mt-10 md:mt-0 md:pl-10 flex justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </section>
          ) : (
            // ALTERNATING SECTIONS
            <section
              key={section.id}
              id={section.id}
              className={`${section.bg} ${section.text} py-20`}
            >
              <div className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""} items-center gap-10`}>
                <div className="flex-1 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.title}</h2>
                  <p className="text-lg md:text-xl mb-6">{section.subtitle}</p>
                  {/* Example of future expansion: articles, videos, etc */}
                  <a
                    href="#"
                    className="inline-block px-8 py-2 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                  >
                    Explore {section.title.split(" ")[0]}
                  </a>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full max-w-lg rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </section>
          )
        )}
      </main>
      <footer className="bg-white py-8 text-center text-gray-400 text-sm border-t mt-10">
        © {new Date().getFullYear()} Mana Telugu Music. All rights reserved.
      </footer>
    </>
  );
}