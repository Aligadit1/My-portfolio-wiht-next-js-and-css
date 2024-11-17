import React, { ReactNode } from 'react'
// defining props type
type Props ={
    children: ReactNode
}

const SectionHeading = ({children}:Props) => {
  return (
<h1 className='helper'>{children}</h1>
  )
}

export default SectionHeading
