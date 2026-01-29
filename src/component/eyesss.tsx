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
      <div className='  h-10  w-8  md:h-20 md:w-16  lg:h-30 lg:w-25 whitespace-nowrap relative top-2 md:top-3 bg-white border-solid  border-3 border-black  rounded-full flex justify-center items-center '>
        <div className='h-[73%] w-[77%] bg-black rounded-full flex items-center justify-center'>
          <div style={{transform:`translate(-50% ,-50%) rotate(${rotate}deg)`}} className='h-[27%] w-[100%]  p-[2px] relative top-1.5 left-3  md:top-2.5 md:left-5 lg:top-3 lg:left-9'>
            <div className='size-2 md:size-3.5 lg:size-5 rounded-full bg-white'></div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Eyes