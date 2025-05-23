import Head from "next/head";

const featuredClassics = [
  { title: "Mounamelanoyi", artist: "SPB, Chitra" },
  { title: "Ee Velalo Neevu", artist: "SPB, K. S. Chithra" },
  { title: "Jaamu Raatiri", artist: "SPB, Chitra" },
];

const latestHits = [
  { title: "Butta Bomma", artist: "Armaan Malik" },
  { title: "Samajavaragamana", artist: "Sid Sriram" },
  { title: "Vachindamma", artist: "Sid Sriram" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mana Telugu Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-[#fafafd]">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-indigo-600">Mana Telugu Music</h1>
            <nav>
              <a href="#" className="text-base font-medium text-gray-700 hover:text-indigo-500 transition">Home</a>
            </nav>
          </div>
        </header>
        {/* Main */}
        <main className="flex-grow max-w-3xl mx-auto w-full px-4 py-8">
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Featured Telugu Classics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {featuredClassics.map((song, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center"
                >
                  <span className="text-lg font-medium">{song.title}</span>
                  <span className="text-sm text-gray-500 mb-2">{song.artist}</span>
                  <button className="mt-auto px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Play</button>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Latest Telugu Hits</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {latestHits.map((song, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center"
                >
                  <span className="text-lg font-medium">{song.title}</span>
                  <span className="text-sm text-gray-500 mb-2">{song.artist}</span>
                  <button className="mt-auto px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Play</button>
                </div>
              ))}
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-white border-t py-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mana Telugu Music. All rights reserved.
        </footer>
      </div>
    </>
  );
}