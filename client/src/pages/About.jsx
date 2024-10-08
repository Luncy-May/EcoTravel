import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
import { BackgroundImage } from '../components';
const About = () => {
  return (
    <div>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <div className='absolute w-full h-full z-10 brightness-75'>
          <BackgroundImage name="about" imagePath={"/travel.jpg"} />
        </div>
        <div className="text-gray-300 z-20 text-[120px] font-inter overflow-hidden whitespace-nowrap">Our Missions</div>
        <div className='text-gray-300 overflow-hidden flex items-center justify-center font-inter '>
          <div className='z-20'>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Eco-Friendly Travel: Offer users a curated selection of eco-lodges, sustainable tour operators, and environmentally responsible transportation options, ensuring a guilt-free travel experience.
                  </div>
                </div>
            </div>

            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Social Good: Encourage users to participate in eco-friendly initiatives, conservation projects, and social enterprises that benefit local communities and contribute to the greater good.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Social Good: Inspire users to participate in volunteer opportunities, community service projects, and eco-friendly initiatives that benefit local communities and contribute to the greater good.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Personalized Recommendations: Provide tailored travel recommendations, activity suggestions, and insider tips based on users' interests, preferences, and travel style, ensuring a unique and enriching experience.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Education and Awareness: Raise awareness about environmental and social issues affecting travel destinations, promoting responsible travel practices and sustainable tourism.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Incentives and Rewards: Recognize and reward users for their eco-friendly travel choices, community contributions, and social good achievements, motivating them to continue making a positive impact.
                  </div>
                </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default About
