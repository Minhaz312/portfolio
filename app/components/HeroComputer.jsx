import React from 'react'
import ZoomIn from './animated/ZoomIn'
export default function HeroComputer() {
  return (
    <div>
        <ZoomIn>
          <img src='/images/computer.png' className='max-h-[250px] xl:max-h-[400px] w-auto mx-auto' />
        </ZoomIn>
    </div>
  )
}
