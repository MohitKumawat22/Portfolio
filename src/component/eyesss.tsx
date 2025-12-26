'use client'
import React, { useEffect, useState } from 'react'

const Eyes: React.FC = () => {
  const [rotate, setRotate] = useState<number>(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const deltaX = mouseX - window.innerWidth / 2
      const deltaY = mouseY - window.innerHeight / 2
      const angle = Math.atan2(deltaY, deltaX)
      // Convert radians to degrees and offset by 180 to align orientation
      const degree = angle * (180 / Math.PI) - 180
      
      setRotate(degree)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []) 

  return (
    <>
      <div className='h-30 w-25  m-20 bg-white border-solid  border-3 border-black  rounded-full absolute top-35 left-165 flex justify-center items-center '>
        <div className='h-22 w-19 bg-black rounded-full flex items-center justify-center'>
          <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}} className='h-6 w-[100%]  relative top-3 left-9 '>
            <div className='h-6 w-6 rounded-full bg-white'></div>
          </div>
        </div>
      </div>
      <div className='h-30 w-25  m-20 bg-white border-solid  border-3 border-black  rounded-full  absolute top-35 left-73 flex justify-center items-center  '>
    <div className='h-22 w-19 bg-black rounded-full flex items-center justify-center'>
          <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}} className='h-6 w-[100%]  relative top-3 left-9 '>
            <div className='h-6 w-6 rounded-full bg-white'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eyes