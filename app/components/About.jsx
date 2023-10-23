"use client"
import React from 'react'
import StarLine from './StarLine'
import LeftToRight from './animated/LeftToRight'
import RightToLeft from './animated/RightToLeft'

export default function About({about}) {
  return (
    <div className='bg-gradien mt-14 scroll-mt-32 md:mt-24' id="about">
      <div className='flex w-full mx-auto px-3 md:w-10/12 lg:w-10/12 xl:w-8/12 md:px-0 sm:px-5'>
          <StarLine double={true} />
          <div className='grid gap-y-5 md:gap-y-0 grid-cols-1 md:grid-cols-2'>
            <LeftToRight>
              <div className='flex items-center justify-center'>
                <div>
                  <h1 className='text-2xl md:text-5xl text-white font-bold'>Who am i?</h1>
                  <p className='mt-7 text-md break-al text-left hyphens-none text-slate-200 sm:text-lg tracking-wider sm:text-justify sm:hyphens-auto'>{about}</p>
                </div>
              </div>
            </LeftToRight>
            <RightToLeft>
              <div className='flex items-center justify-center'>
                <div className='cs-blur-xl shadow-sm shadow-primary p-5 md:pl-14 md:pt-14 rounded-2xl'>
                  <div className='nav-blur w-auto h-[250px] md:h-[300px] rounded-2xl'>
                    <div className='bg-primary/30 w-auto h-full rounded-2xl'>
                      <img src="/images/me.png" className='h-full object-contain w-auto' />
                    </div>
                  </div>
                </div>
              </div>
            </RightToLeft>
          </div>
      </div>
    </div>
  )
}
