import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
const About = () => {
  return (
    <div>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <div className="text-black text-[140px] font-inter pt-[5vh] overflow-hidden whitespace-nowrap">Our Missions</div>
        <div className='text-black overflow-hidden space-x-5 flex items-center justify-center font-inter '>
          <div>
            <div className='flex-shrink-0'>
              <Link to="/login">
                <div className='p-5 text-2xl font-bold shadow-md hover:shadow-2xl min-h-[300px] min-w-[300px] flex flex-col items-center justify-center break-words'>
                  <div className='mb-2'>
                    <FaSignInAlt size={50} />
                  </div>
                  <div className='mt-2'>
                    Already have an account? Login here!
                  </div>
                </div>
              </Link>
            </div>

            <div className='flex-shrink-0'>
              <Link to="/register">
                <div className='p-5 text-2xl font-bold shadow-md hover:shadow-2xl min-h-[300px] min-w-[300px] flex flex-col items-center justify-center break-words'>
                  <div className='mb-2'>
                    <FaUserPlus size={50} />
                  </div>
                  <div className='mt-2'>
                    Register an account. It is free!
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <Link to="/community">
              <div className='pl-5 pr-5 text-2xl font-bold shadow-md hover:shadow-2xl min-h-[300px] min-w-[300px] flex flex-col items-center justify-center break-words'>
                <div className='mb-2'>
                  <FaSearch size={50} />
                </div>
                <div className='mt-2'>
                  Check out what other amazing people are doing with OurCity here!
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
