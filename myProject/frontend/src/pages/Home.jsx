import React from 'react'
import Carousel from './assets/homeAssets/Carousel'


export default function Home() {
  return (
    <>

      <div className='w-full felx items-center justify-center  '>
        <div className=''><h1 className='ml-[50%]'> HOME</h1> </div>
        
        
        
        <div id='carContainer' className='flex items-center justify-center'>
          <span id='carousel' className=''><Carousel/></span>
          
        </div>
        
      </div>
      
      
    
    </>
    
    
  )
}
