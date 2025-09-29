import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-16 px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800">
           Learn today, lead tomorrow
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 text-lg">
          Access world-class resources, build new skills, and take charge of your career — anytime, anywhere.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get started
        </button>

        <button className="flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition">
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction
