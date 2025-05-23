import React from 'react'
import PlaylistCarousel from './PlaylistCarousel'

export default function PlaylistSection() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore Playlists</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Telugu Great Personalities</h3>
          <PlaylistCarousel type="personalities" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Old Hit Telugu Movies</h3>
          <PlaylistCarousel type="movies" />
        </div>
      </div>
    </section>
  )
}