import React, { useState } from 'react'
import { personalities, movies } from '../data/playlists'

type Props = {
  type: 'personalities' | 'movies'
}

export default function PlaylistCarousel({ type }: Props) {
  const items = type === 'personalities' ? personalities : movies
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(index => (index === 0 ? items.length - 1 : index - 1))
  const next = () => setIndex(index => (index === items.length - 1 ? 0 : index + 1))

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full shadow rounded-lg p-4 bg-white transition-all duration-300">
        <img src={items[index].image} alt={items[index].title} className="w-full h-48 object-cover rounded mb-3" />
        <h4 className="text-lg font-bold mb-2">{items[index].title}</h4>
        <p className="text-sm mb-2">{items[index].description}</p>
        {items[index].video && (
          <a href={items[index].video} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm underline">
            Watch Video
          </a>
        )}
      </div>
      <div className="flex mt-3 gap-3">
        <button onClick={prev} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">&lt;</button>
        <span className="text-sm">{index + 1} / {items.length}</span>
        <button onClick={next} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">&gt;</button>
      </div>
    </div>
  )
}