import React from 'react'
import Image from "next/image"
function service() {
  return (
  <div className='grid grid-cols-3 gap 8'>
    {/* team 1 */}
    <div className='bg-white rounded-lg shadow-md p-6 hover:shasdow-lg hover:translate-y-2 transition-all-duration-300'>
      <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
       <Image src="/file.svg" alt='lasan' height={500} width={500} className='w-500 h-500 rounded-full'></Image>
      </div>
      <h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum dolor.</p>
    </div>

    {/* team 2  */}
 <div className='bg-white rounded-lg shadow-md p-6 hover:shasdow-lg hover:translate-y-2 transition-all-duration-300'>
      <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
     <Image src="/car.jpg" alt="car" height={200} width={200} className='rounded-full h-fit w-fit ' />
      </div>
      <h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum dolor.</p>
    </div>

    {/* team 3  */}
 <div className='bg-white rounded-lg shadow-md p-6 hover:shasdow-lg hover:translate-y-2 transition-all-duration-300'>
      <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
        <span className='text-2xl font-bold text-purple-600'>TT</span>
      </div>
      <h3 className='text-blue-400 items-center justify-center'>Lorem ipsum dolor sit.</h3>
      <p className='text-center'>Lorem, ipsum.</p>
      <p>Lorem, ipsum dolor.</p>
    </div>


    {/* team 4 */}
 <div className='bg-white rounded-lg shadow-md p-6 hover:shasdow-lg hover:translate-y-2 transition-all-duration-300'>
      <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
        <span className='text-2xl font-bold text-purple-600'>TT</span>
      </div>
      <h3>Lorem ipsum dolor sit.</h3>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum dolor.</p>
    </div>
  </div>

       

  )
}

export default service
