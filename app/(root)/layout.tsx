import React from 'react'

export const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <h1 className='text-3xl'>Navbar knk</h1>
      {children}
    </div>
  )
}


export default layout